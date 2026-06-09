// ============================================================================
// Admin Table Logic
// ============================================================================

let currentFilters = {
  location: '',
  minRating: '',
  fromDate: '',
  toDate: '',
};

function initAdminTable() {
  const filterBtn = document.getElementById('filter-btn');
  const resetBtn = document.getElementById('reset-btn');
  const exportBtn = document.getElementById('export-btn');
  
  const filterLocation = document.getElementById('filter-location');
  const filterRating = document.getElementById('filter-rating');
  const filterFrom = document.getElementById('filter-from');
  const filterTo = document.getElementById('filter-to');

  // Load initial data
  loadAndRenderTable();

  // Filter button
  filterBtn.addEventListener('click', () => {
    currentFilters.location = filterLocation.value;
    currentFilters.minRating = filterRating.value;
    currentFilters.fromDate = filterFrom.value;
    currentFilters.toDate = filterTo.value;
    loadAndRenderTable();
  });

  // Reset button
  resetBtn.addEventListener('click', () => {
    filterLocation.value = '';
    filterRating.value = '';
    filterFrom.value = '';
    filterTo.value = '';
    currentFilters = { location: '', minRating: '', fromDate: '', toDate: '' };
    loadAndRenderTable();
  });

  // Export button
  exportBtn.addEventListener('click', () => {
    const filtered = filterFeedback(
      currentFilters.location,
      currentFilters.minRating,
      currentFilters.fromDate,
      currentFilters.toDate
    );
    
    if (filtered.length === 0) {
      alert('Không có dữ liệu để xuất');
      return;
    }
    
    const csv = generateCSV(filtered);
    const timestamp = new Date().toISOString().split('T')[0];
    downloadCSV(csv, `feedback-${timestamp}.csv`);
  });
}

function loadAndRenderTable() {
  const tableBody = document.getElementById('feedback-table-body');
  const emptyState = document.getElementById('empty-state');
  
  const filtered = filterFeedback(
    currentFilters.location,
    currentFilters.minRating,
    currentFilters.fromDate,
    currentFilters.toDate
  );

  // Update stats
  updateStats(filtered);

  // Render table
  if (filtered.length === 0) {
    tableBody.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  
  tableBody.innerHTML = filtered
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .map(entry => {
      const sentimentClasses = getSentimentClasses(entry.rating);
      const badgeClasses = getSentimentBadgeClasses(entry.rating);
      
      return `
        <tr class="${sentimentClasses}">
          <td class="px-4 py-3">${getLocationName(entry.location)}</td>
          <td class="px-4 py-3">
            <span class="px-3 py-1 rounded-full text-sm font-medium ${badgeClasses}">
              ${entry.rating}⭐
            </span>
          </td>
          <td class="px-4 py-3 max-w-md truncate" title="${entry.comment}">
            ${entry.comment}
          </td>
          <td class="px-4 py-3 text-gray-600">${entry.name || '—'}</td>
          <td class="px-4 py-3 text-gray-600 whitespace-nowrap">${formatDate(entry.timestamp)}</td>
        </tr>
      `;
    })
    .join('');
}

function updateStats(filtered) {
  const all = getAllFeedback();
  const total = all.length;
  const filteredTotal = filtered.length;
  
  // Total count
  document.getElementById('stat-total').textContent = filteredTotal;
  
  // Average rating
  const avgRating = filteredTotal > 0
    ? (filtered.reduce((sum, e) => sum + e.rating, 0) / filteredTotal).toFixed(1)
    : 0;
  document.getElementById('stat-avg').textContent = avgRating;
  
  // Positive percentage (rating >= 4)
  const positiveCount = filtered.filter(e => e.rating >= 4).length;
  const positivePercent = formatPercent(positiveCount, filteredTotal);
  document.getElementById('stat-positive').textContent = positivePercent;
}
