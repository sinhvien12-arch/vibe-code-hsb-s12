// ============================================================================
// Shared Navbar Component
// ============================================================================

function renderNavbar(currentPage) {
  const navContainer = document.getElementById('navbar-container');
  
  // Đã sửa lại href từ "/" thành đường dẫn tương đối trỏ đúng vào các file nội bộ
  const navHTML = `
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a href="submit.html" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            📊 Feedback Dashboard
          </a>
          
          <nav class="flex gap-6">
            <a 
              href="submit.html" 
              class="nav-link ${currentPage === 'submit' || currentPage === 'home' ? 'active' : ''} text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Gửi Phản Hồi
            </a>
            <a 
              href="admin.html" 
              class="nav-link ${currentPage === 'admin' ? 'active' : ''} text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Bảng Quản Trị
            </a>
          </nav>
        </div>
      </div>
    </header>
  `;
  
  navContainer.innerHTML = navHTML;
  
  // Add active link styling
  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active {
      color: #2563eb !important;
      border-bottom: 2px solid #2563eb;
      padding-bottom: 2px;
    }
  `;
  document.head.appendChild(style);
}