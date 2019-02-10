let images = [
    { title: "Image1", caption: "Caption1", index: 0, src: "images/ian-schneider-108618-unsplash.jpg" },
    { title: "Image2", caption: "Caption2", index: 1, src: "images/kristopher-roller-110204-unsplash.jpg" },
    { title: "Image3", caption: "Caption3", index: 2, src: "images/amy-humphries-227515-unsplash.jpg" },
    { title: "Image4", caption: "Caption4", index: 3, src: "images/toa-heftiba-362196-unsplash.jpg" },
    { title: "Image5", caption: "Caption5", index: 4, src: "images/cristian-escobar-297114-unsplash.jpg" },
    { title: "Image6", caption: "Caption6", index: 5, src: "images/cristian-palmer-756965-unsplash.jpg" },
    { title: "Image7", caption: "Caption7", index: 6, src: "images/patrick-bald-730896-unsplash.jpg" },
    { title: "Image8", caption: "Caption8", index: 7, src: "images/jeremy-thomas-98201-unsplash.jpg" },
    { title: "Image9", caption: "Caption9", index: 8, src: "images/kristopher-roller-188180-unsplash.jpg" }
];

let container = document.querySelector('.list-item-container');
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

    let imageTitle = document.createElement('p');
    imageTitle.textContent = image.title;
    imageTitle.classList.add('image-title');

    let listItem = document.createElement('li');
    listItem.classList.add('image-thumbnail');

    listItem.appendChild(newImage);
    listItem.appendChild(imageTitle);
    
    let openLightBox = (event) => {
        currentImageIndex = i;
        changeImage(currentImageIndex);
        changeCaption(currentImageIndex);
        // lightBox.classList.remove('hide-lightbox');
        lightBoxContainer.classList.remove('hide-lightbox');
    };

    listItem.addEventListener('click', openLightBox);

    container.appendChild(listItem);
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