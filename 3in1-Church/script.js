
document.addEventListener('DOMContentLoaded', () => {
  // Read More functionality
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
      const fullText = this.nextElementSibling;
      const dots = this;
      
      if (fullText.style.display === 'none') {
        fullText.style.display = 'inline';
        dots.textContent = ' Voir moins';
      } else {
        fullText.style.display = 'none';
        dots.textContent = '... Lire la suite';
      }
    });
  });
  // Carousel functionality
  const carouselContainer = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  // Auto advance every 4 seconds
  setInterval(nextSlide, 4000);

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = document.querySelector('.dropbtn');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  dropbtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    }
  });
});
