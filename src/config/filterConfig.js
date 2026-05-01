const filterConfig = {
  defaultFilters: {
    companyInclude: [],        // e.g. ["google", "amazon"]
    companyExclude: [],        // e.g. ["consultancy", "agency"]
    categories: [],            // e.g. ["Company Career Page"]
    daysSinceVisit: null,      // e.g. 5
    searchTerm: "",

    // 🔥 extra useful flags
    showNeverVisitedOnly: false,
    caseInsensitive: true,
    trimSpaces: true
  },

  defaultSort: {
    sortBy: "lastVisited",
    sortOrder: "desc"
  }
};

export default filterConfig;