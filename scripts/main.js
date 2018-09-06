// Landscape-themed-images
let images = [
    { caption: "Caption1", index: 0, src: "aventuras/billy-williams-262740-unsplash.jpg" },
    { caption: "Caption2", index: 1, src: "aventuras/brianda-maldonado-741341-unsplash.jpg" },
    { caption: "Caption3", index: 2, src: "aventuras/idan-arad-109776-unsplash.jpg" },
    { caption: "Caption4", index: 3, src: "aventuras/romello-williams-384006-unsplash.jpg" },
    { caption: "Caption5", index: 4, src: "aventuras/kea-mowat-601648-unsplash.jpg" },
    { caption: "Caption6", index: 5, src: "aventuras/kea-mowat-658785-unsplash.jpg" },
    { caption: "Caption7", index: 6, src: "aventuras/patrick-bald-730896-unsplash.jpg" },
    { caption: "Caption8", index: 7, src: "aventuras/simon-matzinger-320332-unsplash.jpg" },
    { caption: "Caption9", index: 8, src: "aventuras/saffu-221040-unsplash.jpg" }
];

let container = document.querySelector('.image-thumbnail-container');
let lightBoxContainer = document.querySelector('.lightbox-container');
let lightBox = document.querySelector('.lightbox');
let lightBoxImage = document.querySelector('.lightbox-image');
let lightBoxCaption = document.querySelector('.lightbox-caption');
let exitButton = document.querySelector('.exit-button');
let backArrow = document.querySelector('.left-arrow');
var forwardArrow = document.querySelector('.right-arrow');

let currentImageIndex;

let addNewImage = (image, i) => {

    let newImage = document.createElement('img');
    newImage.setAttribute('src', image.src);
    newImage.classList.add('image');

    let imageThumbnail = document.createElement('li');
    imageThumbnail.classList.add('image-thumbnail');

    imageThumbnail.appendChild(newImage);  
    
    let openLightBox = (event) => {
        currentImageIndex = i;
        changeImage(currentImageIndex);
        changeCaption(currentImageIndex);
        // lightBox.classList.remove('hide-lightbox');
        lightBoxContainer.classList.remove('hide-lightbox');
    };

    imageThumbnail.addEventListener('click', openLightBox);

    container.appendChild(imageThumbnail);
};

images.forEach(addNewImage);

let changeImage = (currentImageIndex) => {
    lightBoxImage.setAttribute('src', images[currentImageIndex].src);
};

let changeCaption = (currentImageIndex) => {
    lightBoxCaption.textContent = images[currentImageIndex].caption;
};

let closeLightBox = () => {
    lightBoxContainer.classList.add('hide-lightbox');
    // lightBox.classList.add('hide-lightbox');
};

let updateLightBox = () => {
    changeImage(currentImageIndex);
    changeCaption(currentImageIndex);
};

let goBackImage = () => {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length-1;
    }
    updateLightBox(currentImageIndex);
};

let goForwardImage = () => {
    currentImageIndex += 1;
    if (currentImageIndex > images.length) {
        currentImageIndex = 0;
    }
    updateLightBox(currentImageIndex);
};

let closeLightBoxContainer = (event) => {
    if (event.target === lightBoxContainer) {
        closeLightBox();
    }
};

window.addEventListener('click', closeLightBoxContainer);

// Exit Button Listeners
exitButton.addEventListener('click', closeLightBox);

// Arrow + Escape Button Listeners -- Pressing Buttons on Keyboard
document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    if (keyName === "ArrowRight") {
        goForwardImage();
    }
    else if (keyName === "ArrowLeft") {
        goBackImage();
    }
    else if (keyName === "Escape") {
        closeLightBox();
    }
});

// Arrow Button Listeners -- Clicking Buttons on Screen
backArrow.addEventListener('click', goBackImage);
forwardArrow.addEventListener('click', goForwardImage);