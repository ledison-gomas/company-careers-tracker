# 💼 Company Careers Tracker

A modern, full-featured web application for tracking and managing your job application journey across multiple companies. Built with React and Tailwind CSS.

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-06B6D4)

## 🎯 Features

### Core Functionality
- **Company Management**: Add, edit, and delete company records with unique company names
- **50 Records Per Page**: Efficient pagination with detailed view controls
- **Real-time Filtering**: Instant filter updates as you type
- **Data Import/Export**: 
  - Export filtered results to CSV
  - Import data from JSON files
  - Preserve data structure across sessions

### Advanced Filtering & Search
- **Company Filters**:
  - Include specific companies
  - Exclude companies from results
  - Multiple filters work together
- **Category Filtering**: Filter by job portal, company career page, recruitment agency, LinkedIn, Internal, Referral, or Other
- **Date-based Filters**:
  - Not visited in 3 days
  - Not visited in 5 days
  - Not visited in 10 days
- **Search**: Full-text search across company names, job titles, and email addresses

### Sorting & Organization
- **Sort Options**:
  - By Company Name (A-Z)
  - By Last Visited (Recent-First)
  - By Category
- **Flexible Sort Direction**: Ascending or Descending
- **Batch Operations**: Select multiple records and delete them at once

### Data Management
- **Quick Actions**:
  - Click "Last Visited" to update timestamp to now
  - Direct links to careers pages
  - Quick email links to contact
  - Edit records inline
- **Detailed Statistics**:
  - Total companies tracked
  - Filtered results count
  - Companies visited today
  - Currently selected records

### User Interface
- **Clean, Modern Design**: Gradient backgrounds, smooth transitions
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Dark Mode Ready**: CSS variables for easy theme switching
- **Accessibility**: Proper labels, keyboard navigation, semantic HTML

## 📋 Data Structure

Each company record contains:
```javascript
{
  id: number,
  company: string (unique),
  jobTitle: string,
  category: string,
  applyLink: string,
  contactEmail: string,
  lastVisited: ISO 8601 datetime,
  notes: string
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- React 18+
- Tailwind CSS 3+

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/company-careers-tracker.git
cd company-careers-tracker
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Install Required Packages**
```bash
npm install react lucide-react
npm install -D tailwindcss postcss autoprefixer
```

4. **Configure Tailwind CSS**
```bash
npx tailwindcss init -p
```

5. **Update `tailwind.config.js`**
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

6. **Add Tailwind Directives to CSS**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. **Start Development Server**
```bash
npm start
```

Visit `http://localhost:3000` in your browser.

## 📖 Usage Guide

### Adding a Company
1. Click the **"+ Add Company"** button
2. Fill in the company details:
   - **Company Name** (required, must be unique)
   - **Job Title** (optional)
   - **Category** (select from predefined list)
   - **Apply Link** (URL to careers page)
   - **Contact Email** (optional)
   - **Last Visited** (auto-set to today)
   - **Notes** (optional)
3. Click **"Add Company"** to save

### Editing a Company
1. Click the **⋮** menu button on any record
2. Edit the details in the modal
3. Click **"Update"** to save changes

### Filtering Records

#### By Company
1. Open the **Filters** panel
2. **Include Companies**: Type company names to show only those
3. **Exclude Companies**: Type company names to hide them

#### By Category
1. Open the **Filters** panel
2. Check the categories you want to see

#### By Last Visited
1. Open the **Filters** panel
2. Select a time range:
   - Not visited in 3 days
   - Not visited in 5 days
   - Not visited in 10 days

#### Search
- Use the search bar at the top to search by:
  - Company name
  - Job title
  - Email address

### Sorting
1. Use the **Sort by** dropdown to choose:
   - Last Visited (most recent first)
   - Company Name (A-Z)
   - Category
2. Click the **ascending/descending** button to reverse order

### Exporting Data
1. Apply any filters you want
2. Click **"Export CSV"** button
3. CSV file downloads with filtered results

### Importing Data
1. Click **"Import JSON"** button
2. Select a JSON file with the correct structure
3. Data is merged with existing records

### Batch Operations
1. Select multiple records using the checkboxes
2. Click **"Delete [N]"** to remove all selected records
3. Confirm the deletion

### Updating Last Visited
- Click the **Last Visited** timestamp on any record
- It updates to the current date/time automatically

## 📊 Sample Data

The application includes sample data to get you started. You can also import from the provided files:

- **sample-data.json**: 10 company records in JSON format
- **sample-data.csv**: Same data in CSV format for Excel/Google Sheets

## 🎨 Customization

### Color Scheme
Edit the gradient colors in the main component:
```jsx
className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
```

### Categories
Modify the `categories` array in the component:
```javascript
const categories = [
  'Job Portal',
  'Company Career Page',
  'Recruitment Agency',
  'LinkedIn',
  'Internal',
  'Referral',
  'Other'
];
```

### Time Filters
Adjust the `dayFilters` array:
```javascript
const dayFilters = [
  { label: 'Not visited in 3 days', value: 3 },
  { label: 'Not visited in 5 days', value: 5 },
  { label: 'Not visited in 10 days', value: 10 }
];
```

### Records Per Page
Change the `recordsPerPage` constant:
```javascript
const recordsPerPage = 50; // Change to desired number
```

## 🔧 Technical Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Data Format**: JSON/CSV

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Performance

- Efficient filtering and sorting algorithms
- Memoized calculations with useMemo
- Optimized re-renders with proper hook dependencies
- Supports 10,000+ records without significant lag

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test new features before submitting
- Update the README if adding new features

## 🐛 Bug Reports

Found a bug? Please create an issue on GitHub with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information

## 💡 Feature Requests

Have an idea? Open an issue with:
- Feature description
- Use case and benefits
- Proposed implementation (optional)

## 📞 Contact

For questions or suggestions:
- Open an issue on GitHub
- Create a discussion in the repository

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev)
- Styling by [Tailwind CSS](https://tailwindcss.com)
- Built with [React](https://react.dev)

## 📈 Roadmap

### Planned Features
- [ ] Dark mode toggle
- [ ] Advanced reporting and analytics
- [ ] Email notification reminders
- [ ] Integration with calendar apps
- [ ] Salary range tracking
- [ ] Interview status tracking
- [ ] Notes/interview prep templates
- [ ] Multi-user support
- [ ] Cloud synchronization
- [ ] Mobile app (React Native)

### Coming Soon
- [ ] Database backend (PostgreSQL)
- [ ] Authentication system
- [ ] Email reminders for stale applications

## 📄 Changelog

### v1.0.0 (Initial Release)
- Core functionality implemented
- All filtering and sorting features
- CSV/JSON import-export
- Responsive design
- Sample data included

---

**Happy job hunting! 🎉**

Made with ❤️ for aspiring developers and career changers.