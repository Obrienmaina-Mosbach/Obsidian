// Select elements
const mainImage = document.getElementById('mainImage');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Add click event to the main image
mainImage.addEventListener('click', () => {
  popup.style.display = 'flex'; // Show the popup
});

// Add click event to the close button
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
});

// Add click event to the popup background (optional: close when clicking outside)
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none'; // Hide the popup
  }
});
