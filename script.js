// List of image file names 
const images =  [
    'boom.jpg',
    'ijsbeer.jpg',
    'Jone_en_koe.jpg',
    'kameleon.jpg',
    'luipaard.jpg'
];
// Function to select a random image 
function displayRandomImage() { 
    const randomIndex = Math.floor(Math.random() * images.length); 
    const randomImage = images[randomIndex]; 
    document.getElementById('random-image').src = `/pictures/${randomImage}`; 
} 
// Call the function to display a random image on page load 
window.onload = displayRandomImage;