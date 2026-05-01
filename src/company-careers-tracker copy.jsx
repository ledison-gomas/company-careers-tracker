//import React, { useState, useEffect, useMemo } from 'react';
import React, { useState, useEffect } from 'react';
import {  Filter, Plus, Download, Upload, Trash2, Link as LinkIcon, Mail, MoreVertical, X } from 'lucide-react';
//import { ChevronDown, Filter, Plus, Download, Upload, Trash2, Link as LinkIcon, Mail, MoreVertical, X } from 'lucide-react';

const CompanyCareersTracker = () => {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecords, setSelectedRecords] = useState(new Set());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  
  // Filter states
  const [filters, setFilters] = useState({
    companyInclude: [],
    companyExclude: [],
    categories: [],
    daysSinceVisit: null,
    searchTerm: ''
  });
  
  const [sortBy, setSortBy] = useState('lastVisited');
  const [sortOrder, setSortOrder] = useState('desc');
  
  const [formData, setFormData] = useState({
    company: '',
    jobTitle: '',
    category: '',
    applyLink: '',
    contactEmail: '',
    lastVisited: new Date().toISOString().split('T')[0],
    notes: ''
  });

  // Category options
  const categories = [
    'Job Portal',
    'Company Career Page',
    'Recruitment Agency',
    'LinkedIn',
    'Internal',
    'Referral',
    'Other'
  ];

  const dayFilters = [
    { label: 'Not visited in 3 days', value: 3 },
    { label: 'Not visited in 5 days', value: 5 },
    { label: 'Not visited in 10 days', value: 10 }
  ];

  // Load sample data on mount
  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        company: 'Affirm',
        jobTitle: 'Software Engineer',
        category: 'Company Career Page',
        applyLink: 'https://affirm.com/careers',
        contactEmail: 'careers@affirm.com',
        lastVisited: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        notes: 'Great benefits package'
      },
      {
        id: 2,
        company: 'AssetMark',
        jobTitle: 'Data Analyst',
        category: 'Job Portal',
        applyLink: 'https://assetmark.com/careers',
        contactEmail: 'hr@assetmark.com',
        lastVisited: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
        notes: 'Remote friendly'
      },
      {
        id: 3,
        company: 'Proofpoint',
        jobTitle: 'Tech Lead',
        category: 'Company Career Page',
        applyLink: 'https://proofpoint.com/careers',
        contactEmail: 'careers@proofpoint.com',
        lastVisited: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(),
        notes: 'Security focused'
      },
      {
        id: 4,
        company: 'John Deere',
        jobTitle: 'Software Engineer',
        category: 'Job Portal',
        applyLink: 'https://johndeere.com/careers',
        contactEmail: 'careers@deere.com',
        lastVisited: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8).toISOString(),
        notes: 'Hybrid work'
      },
      {
        id: 5,
        company: 'ByteDance',
        jobTitle: 'Backend Engineer',
        category: 'Company Career Page',
        applyLink: 'https://bytedance.com/en/careers',
        contactEmail: 'careers@bytedance.com',
        lastVisited: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(),
        notes: 'Competitive pay'
      },
      {
        id: 6,
        company: 'National Security Agency',
        jobTitle: 'Cybersecurity Analyst',
        category: 'Government Portal',
        applyLink: 'https://nsa.gov/careers',
        contactEmail: 'careers@nsa.gov',
        lastVisited: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(),
        notes: 'Security clearance required'
      }
    ];
    setRecords(sampleData);
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = [...records];

    // Company include filter
    if (filters.companyInclude.length > 0) {
      filtered = filtered.filter(r => 
        filters.companyInclude.some(inc => r.company.toLowerCase().includes(inc.toLowerCase()))
      );
    }

    // Company exclude filter
    if (filters.companyExclude.length > 0) {
      filtered = filtered.filter(r => 
        !filters.companyExclude.some(exc => r.company.toLowerCase().includes(exc.toLowerCase()))
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(r => filters.categories.includes(r.category));
    }

    // Days since visit filter
    if (filters.daysSinceVisit) {
      const cutoffDate = new Date(Date.now() - filters.daysSinceVisit * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(r => new Date(r.lastVisited) < cutoffDate);
    }

    // Search filter
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(r =>
        r.company.toLowerCase().includes(term) ||
        r.jobTitle.toLowerCase().includes(term) ||
        r.contactEmail.toLowerCase().includes(term)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      let aVal, bVal;
      
      if (sortBy === 'company') {
        aVal = a.company.toLowerCase();
        bVal = b.company.toLowerCase();
      } else if (sortBy === 'lastVisited') {
        aVal = new Date(a.lastVisited);
        bVal = new Date(b.lastVisited);
      } else if (sortBy === 'category') {
        aVal = a.category.toLowerCase();
        bVal = b.category.toLowerCase();
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredRecords(filtered);
    setCurrentPage(1);
  }, [records, filters, sortBy, sortOrder]);

  const recordsPerPage = 50;
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleAddRecord = () => {
    if (!formData.company.trim()) {
      alert('Company name is required');
      return;
    }

    if (records.some(r => r.company.toLowerCase() === formData.company.toLowerCase()) && !editingRecord) {
      alert('Company already exists');
      return;
    }

    if (editingRecord) {
      setRecords(records.map(r => r.id === editingRecord.id ? { ...formData, id: editingRecord.id } : r));
      setEditingRecord(null);
    } else {
      setRecords([...records, { ...formData, id: Math.max(...records.map(r => r.id), 0) + 1 }]);
    }

    setFormData({
      company: '',
      jobTitle: '',
      category: '',
      applyLink: '',
      contactEmail: '',
      lastVisited: new Date().toISOString().split('T')[0],
      notes: ''
    });
    setShowAddModal(false);
  };

  const handleDeleteRecords = () => {
    setRecords(records.filter(r => !selectedRecords.has(r.id)));
    setSelectedRecords(new Set());
  };

  const handleExportCSV = () => {
    const csv = [
      ['Company', 'Job Title', 'Category', 'Apply Link', 'Contact Email', 'Last Visited', 'Notes'],
      ...filteredRecords.map(r => [
        r.company,
        r.jobTitle,
        r.category,
        r.applyLink,
        r.contactEmail,
        new Date(r.lastVisited).toLocaleString(),
        r.notes
      ])
    ].map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'company-careers.csv';
    a.click();
  };

  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          const newRecords = imported.map((r, idx) => ({
            ...r,
            id: r.id || Math.max(...records.map(x => x.id), 0) + idx + 1
          }));
          setRecords([...records, ...newRecords]);
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleRecordClick = (record) => {
    setEditingRecord(record);
    setFormData(record);
    setShowAddModal(true);
  };

  const handleLastVisitedUpdate = (recordId) => {
    setRecords(records.map(r =>
      r.id === recordId ? { ...r, lastVisited: new Date().toISOString() } : r
    ));
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const diffMs = now - new Date(date);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
    return `${Math.floor(diffDays / 30)}mo ago`;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Company Career Page': 'bg-blue-100 text-blue-800',
      'Job Portal': 'bg-green-100 text-green-800',
      'Recruitment Agency': 'bg-purple-100 text-purple-800',
      'LinkedIn': 'bg-blue-100 text-blue-800',
      'Internal': 'bg-orange-100 text-orange-800',
      'Referral': 'bg-pink-100 text-pink-800',
      'Government Portal': 'bg-red-100 text-red-800',
      'Other': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors['Other'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                💼 Company Careers Tracker
              </h1>
              <p className="text-slate-500 text-sm mt-1">Track and manage your job application journey</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                <Plus size={18} /> Add Company
              </button>
              <button
                onClick={handleExportCSV}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                <Download size={18} /> Export CSV
              </button>
              <label className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors cursor-pointer font-medium">
                <Upload size={18} /> Import JSON
                <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
              </label>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 border border-indigo-200">
              <p className="text-indigo-600 text-sm font-semibold">Total Companies</p>
              <p className="text-3xl font-bold text-indigo-700 mt-1">{records.length}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <p className="text-blue-600 text-sm font-semibold">Filtered Results</p>
              <p className="text-3xl font-bold text-blue-700 mt-1">{filteredRecords.length}</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border border-emerald-200">
              <p className="text-emerald-600 text-sm font-semibold">Visited Today</p>
              <p className="text-3xl font-bold text-emerald-700 mt-1">
                {records.filter(r => {
                  const visited = new Date(r.lastVisited);
                  const today = new Date();
                  return visited.toDateString() === today.toDateString();
                }).length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200">
              <p className="text-amber-600 text-sm font-semibold">Selected</p>
              <p className="text-3xl font-bold text-amber-700 mt-1">{selectedRecords.size}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 mb-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by company, job title, or email..."
              value={filters.searchTerm}
              onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-medium text-slate-700"
            >
              <Filter size={18} /> Filters {filters.categories.length > 0 || filters.daysSinceVisit ? `(${filters.categories.length + (filters.daysSinceVisit ? 1 : 0)})` : ''}
            </button>
          </div>

          {showFilterPanel && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-200">
              {/* Company Include */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Include Companies</label>
                <input
                  type="text"
                  placeholder="Add company name..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      setFilters({
                        ...filters,
                        companyInclude: [...filters.companyInclude, e.target.value.trim()]
                      });
                      e.target.value = '';
                    }
                  }}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {filters.companyInclude.map((c, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {c}
                      <button onClick={() => setFilters({ ...filters, companyInclude: filters.companyInclude.filter((_, j) => j !== i) })}>
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Company Exclude */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Exclude Companies</label>
                <input
                  type="text"
                  placeholder="Add company name..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      setFilters({
                        ...filters,
                        companyExclude: [...filters.companyExclude, e.target.value.trim()]
                      });
                      e.target.value = '';
                    }
                  }}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {filters.companyExclude.map((c, i) => (
                    <span key={i} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {c}
                      <button onClick={() => setFilters({ ...filters, companyExclude: filters.companyExclude.filter((_, j) => j !== i) })}>
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Categories</label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(cat)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({ ...filters, categories: [...filters.categories, cat] });
                          } else {
                            setFilters({ ...filters, categories: filters.categories.filter(c => c !== cat) });
                          }
                        }}
                        className="w-4 h-4 rounded border-slate-300"
                      />
                      <span className="text-sm text-slate-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Days Since Visit */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Last Visited</label>
                <div className="space-y-2">
                  {dayFilters.map(filter => (
                    <label key={filter.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="dayFilter"
                        checked={filters.daysSinceVisit === filter.value}
                        onChange={() => setFilters({ ...filters, daysSinceVisit: filter.value })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-slate-700">{filter.label}</span>
                    </label>
                  ))}
                  <label className="flex items-center gap-2 cursor-pointer pt-2 border-t border-slate-200">
                    <input
                      type="radio"
                      name="dayFilter"
                      checked={filters.daysSinceVisit === null}
                      onChange={() => setFilters({ ...filters, daysSinceVisit: null })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-slate-700">All</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Sort Controls */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200">
            <span className="text-sm text-slate-600 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="lastVisited">Last Visited</option>
              <option value="company">Company Name</option>
              <option value="category">Category</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium transition-colors"
            >
              {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
            </button>
            {selectedRecords.size > 0 && (
              <button
                onClick={handleDeleteRecords}
                className="ml-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <Trash2 size={16} /> Delete {selectedRecords.size}
              </button>
            )}
          </div>
        </div>

        {/* Records Table */}
        <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedRecords.size === paginatedRecords.length && paginatedRecords.length > 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRecords(new Set(paginatedRecords.map(r => r.id)));
                        } else {
                          setSelectedRecords(new Set());
                        }
                      }}
                      className="w-4 h-4 rounded border-slate-300"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Job Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Last Visited</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Contact</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedRecords.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-slate-500">
                      <p className="text-lg font-medium">No records found</p>
                      <p className="text-sm mt-1">Try adjusting your filters or add a new company</p>
                    </td>
                  </tr>
                ) : (
                  paginatedRecords.map(record => (
                    <tr key={record.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedRecords.has(record.id)}
                          onChange={(e) => {
                            const newSet = new Set(selectedRecords);
                            if (e.target.checked) {
                              newSet.add(record.id);
                            } else {
                              newSet.delete(record.id);
                            }
                            setSelectedRecords(newSet);
                          }}
                          className="w-4 h-4 rounded border-slate-300"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900">{record.company}</p>
                        {record.notes && <p className="text-xs text-slate-500 mt-1">{record.notes}</p>}
                      </td>
                      <td className="px-6 py-4 text-slate-700">{record.jobTitle || '—'}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(record.category)}`}>
                          {record.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleLastVisitedUpdate(record.id)}
                          className="text-indigo-600 hover:text-indigo-700 font-medium text-sm hover:underline"
                          title="Click to update to now"
                        >
                          {getTimeAgo(record.lastVisited)}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {record.applyLink && (
                            <a
                              href={record.applyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700 transition-colors"
                              title="Open careers page"
                            >
                              <LinkIcon size={18} />
                            </a>
                          )}
                          {record.contactEmail && (
                            <a
                              href={`mailto:${record.contactEmail}`}
                              className="text-emerald-600 hover:text-emerald-700 transition-colors"
                              title="Send email"
                            >
                              <Mail size={18} />
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleRecordClick(record)}
                          className="text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing {(currentPage - 1) * recordsPerPage + 1} to {Math.min(currentPage * recordsPerPage, filteredRecords.length)} of {filteredRecords.length} records
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum = i + 1;
                    if (totalPages > 5 && currentPage > 3) {
                      pageNum = currentPage - 2 + i;
                    }
                    if (pageNum > totalPages) return null;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          currentPage === pageNum
                            ? 'bg-indigo-600 text-white'
                            : 'border border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">
                {editingRecord ? 'Edit Company' : 'Add New Company'}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingRecord(null);
                  setFormData({
                    company: '',
                    jobTitle: '',
                    category: '',
                    applyLink: '',
                    contactEmail: '',
                    lastVisited: new Date().toISOString().split('T')[0],
                    notes: ''
                  });
                }}
                className="text-slate-500 hover:text-slate-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g., Affirm"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    placeholder="e.g., Software Engineer"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Visited</label>
                  <input
                    type="date"
                    value={formData.lastVisited}
                    onChange={(e) => setFormData({ ...formData, lastVisited: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Apply Link</label>
                  <input
                    type="url"
                    value={formData.applyLink}
                    onChange={(e) => setFormData({ ...formData, applyLink: e.target.value })}
                    placeholder="https://careers.example.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Email</label>
                  <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    placeholder="careers@example.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Notes</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Add any notes about this company..."
                    rows="3"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200 bg-slate-50">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingRecord(null);
                  setFormData({
                    company: '',
                    jobTitle: '',
                    category: '',
                    applyLink: '',
                    contactEmail: '',
                    lastVisited: new Date().toISOString().split('T')[0],
                    notes: ''
                  });
                }}
                className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddRecord}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
              >
                {editingRecord ? 'Update' : 'Add Company'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyCareersTracker;