const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const popup = document.querySelector('.popup');
const popupImage = document.getElementById('popup-image');
const close = document.querySelector('.popup-content .close');

let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for navigation buttons
leftButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  updateCarousel();
});

rightButton.addEventListener('click', () => {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

// Event listener to show popup on image click
images.forEach(image => {
  image.addEventListener('click', (e) => {
    popupImage.src = e.target.src;
    popup.classList.remove('hidden');
  });
});

// Close popup
close.addEventListener('click', () => {
  popup.classList.add('hidden');
});
