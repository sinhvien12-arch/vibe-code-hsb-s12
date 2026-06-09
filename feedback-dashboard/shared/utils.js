// ============================================================================
// Shared Utilities: localStorage, date formatting, sentiment helpers
// ============================================================================

const STORAGE_KEY = 'feedbackEntries';

/**
 * Get all feedback entries from localStorage
 */
function getAllFeedback() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

/**
 * Save feedback entry to localStorage
 */
function saveFeedback(entry) {
  const all = getAllFeedback();
  const newEntry = {
    id: Date.now(),
    ...entry,
    timestamp: new Date().toISOString(),
  };
  all.push(newEntry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return newEntry;
}

/**
 * Format ISO timestamp to DD/MM/YYYY HH:MM
 */
function formatDate(isoString) {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

/**
 * Get sentiment based on rating
 * Rating 1-2: red (negative)
 * Rating 3: yellow (neutral)
 * Rating 4-5: green (positive)
 */
function getSentiment(rating) {
  if (rating >= 4) return 'positive';
  if (rating === 3) return 'neutral';
  return 'negative';
}

/**
 * Get sentiment badge classes for Tailwind
 */
function getSentimentClasses(rating) {
  const sentiment = getSentiment(rating);
  const classes = {
    positive: 'bg-green-50 text-green-800',
    neutral: 'bg-yellow-50 text-yellow-800',
    negative: 'bg-red-50 text-red-800',
  };
  return classes[sentiment];
}

/**
 * Get sentiment badge color for the rating cell
 */
function getSentimentBadgeClasses(rating) {
  const sentiment = getSentiment(rating);
  const classes = {
    positive: 'bg-green-100 text-green-700',
    neutral: 'bg-yellow-100 text-yellow-700',
    negative: 'bg-red-100 text-red-700',
  };
  return classes[sentiment];
}

/**
 * Get location display name
 */
function getLocationName(locationKey) {
  const locations = {
    'district-1': 'Quận 1',
    'district-3': 'Quận 3',
    'thao-dien': 'Thảo Điền',
  };
  return locations[locationKey] || locationKey;
}

/**
 * Format number as percentage
 */
function formatPercent(value, total) {
  if (total === 0) return '0%';
  return `${Math.round((value / total) * 100)}%`;
}

/**
 * Filter feedback by criteria
 */
function filterFeedback(location = '', minRating = 0, fromDate = '', toDate = '') {
  const all = getAllFeedback();
  
  return all.filter(entry => {
    // Location filter
    if (location && entry.location !== location) return false;
    
    // Minimum rating filter
    if (minRating && entry.rating < parseInt(minRating)) return false;
    
    // Date range filter
    if (fromDate) {
      const entryDate = new Date(entry.timestamp).toISOString().split('T')[0];
      if (entryDate < fromDate) return false;
    }
    
    if (toDate) {
      const entryDate = new Date(entry.timestamp).toISOString().split('T')[0];
      if (entryDate > toDate) return false;
    }
    
    return true;
  });
}

/**
 * Convert feedback array to CSV string
 */
function generateCSV(feedbackArray) {
  const headers = ['Địa Điểm', 'Đánh Giá', 'Bình Luận', 'Tên', 'Ngày Giờ'];
  const rows = feedbackArray.map(entry => [
    getLocationName(entry.location),
    entry.rating,
    `"${(entry.comment || '').replace(/"/g, '""')}"`,
    `"${(entry.name || '').replace(/"/g, '""')}"`,
    formatDate(entry.timestamp),
  ]);
  
  const csv = [
    headers.join(','),
    ...rows.map(row => row.join(',')),
  ].join('\n');
  
  return csv;
}

/**
 * Download CSV file
 */
function downloadCSV(csv, filename = 'feedback-export.csv') {
  // Add BOM for proper UTF-8 encoding in Excel
  const bom = '\uFEFF';
  const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
