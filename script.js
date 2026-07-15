const images = [
    'boom.jpg',
    'ijsbeer.jpg',
    'Jone_en_koe.jpg',
    'kameleon.jpg',
    'luipaard.jpg'
];

const picturePath = 'pictures/';

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    document.getElementById('random-image').src =
        picturePath + randomImage;
}

function displayGallery() {
    const gallery = document.getElementById('gallery');

    images.forEach(image => {
        const imageElement = document.createElement('img');

        imageElement.src = picturePath + image;
        imageElement.alt = 'Memory';

        gallery.appendChild(imageElement);
    });
}

function displayGallery() {
    const gallery = document.getElementById('gallery');

    images.forEach(image => {
        const imageElement = document.createElement('img');

        imageElement.src = picturePath + image;
        imageElement.alt = 'Memory';

        imageElement.addEventListener('click', () => {
            window.open(picturePath + image, '_blank');
        });

        gallery.appendChild(imageElement);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    displayRandomImage();
    displayGallery();
});
