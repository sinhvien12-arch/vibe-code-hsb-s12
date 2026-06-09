// ============================================================================
// Submit Form Logic
// ============================================================================

function initSubmitForm() {
  const form = document.getElementById('feedback-form');
  const ratingGroup = document.getElementById('rating-group');
  const ratingInput = document.getElementById('rating');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  // Rating button selection
  const ratingButtons = ratingGroup.querySelectorAll('.rating-btn');
  ratingButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove previous selection
      ratingButtons.forEach(b => {
        b.classList.remove('border-blue-500', 'bg-blue-50');
        b.classList.add('border-gray-300');
      });
      
      // Add selection to clicked button
      btn.classList.add('border-blue-500', 'bg-blue-50');
      btn.classList.remove('border-gray-300');
      ratingInput.value = btn.dataset.rating;
    });
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset messages
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');
    
    // Get form data
    const name = document.getElementById('name').value.trim();
    const location = document.getElementById('location').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value.trim();
    
    // Validation
    if (!location) {
      showError('Vui lòng chọn địa điểm');
      return;
    }
    
    if (!rating) {
      showError('Vui lòng chọn đánh giá');
      return;
    }
    
    if (!comment || comment.length < 10) {
      showError('Bình luận phải có ít nhất 10 ký tự');
      return;
    }
    
    // Save feedback
    try {
      saveFeedback({
        name: name || null,
        location,
        rating: parseInt(rating),
        comment,
      });
      
      // Show success message
      successMessage.classList.remove('hidden');
      
      // Reset form
      form.reset();
      ratingButtons.forEach(b => {
        b.classList.remove('border-blue-500', 'bg-blue-50');
        b.classList.add('border-gray-300');
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 3000);
    } catch (error) {
      showError('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
  }
}
