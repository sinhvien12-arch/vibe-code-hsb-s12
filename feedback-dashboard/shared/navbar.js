// ============================================================================
// Shared Navbar Component
// ============================================================================

function renderNavbar(currentPage) {
  const navContainer = document.getElementById('navbar-container');

  const navHTML = `
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a href="submit.html" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            📊 Feedback Dashboard
          </a>

          <nav class="flex gap-4">
            <a
              href="submit.html"
              class="nav-link ${currentPage === 'submit' ? 'active' : ''} px-4 py-2 rounded-lg font-medium transition text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Submit Feedback
            </a>
            <a
              href="admin.html"
              class="nav-link ${currentPage === 'admin' ? 'active' : ''} px-4 py-2 rounded-lg font-medium transition text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Admin View
            </a>
          </nav>
        </div>
      </div>
    </header>
  `;

  navContainer.innerHTML = navHTML;

  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active {
      color: #2563eb !important;
      background-color: #eff6ff;
      border-bottom: 2px solid #2563eb;
      padding-bottom: 6px;
    }
  `;
  document.head.appendChild(style);
}