// Landscape-themed-images
var images = [
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

var container = document.querySelector('.image-thumbnail-container');
var lightBoxContainer = document.querySelector('.lightbox-container');
var lightBox = document.querySelector('.lightbox');
var lightBoxImage = document.querySelector('.lightbox-image');
var lightBoxCaption = document.querySelector('.lightbox-caption');
var exitButton = document.querySelector('.exit-button');
var backArrow = document.querySelector('.left-arrow');
var forwardArrow = document.querySelector('.right-arrow');

var currentImageIndex;

var addNewImage = function(image, i) {

    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.src);
    newImage.classList.add('image');

    var imageThumbnail = document.createElement('li');
    imageThumbnail.classList.add('image-thumbnail');

    imageThumbnail.appendChild(newImage);  
    
    var openLightBox = function (event) {
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

var changeImage = function (currentImageIndex) {
    lightBoxImage.setAttribute('src', images[currentImageIndex].src);
};

var changeCaption = function (currentImageIndex) {
    lightBoxCaption.textContent = images[currentImageIndex].caption;
};

var closeLightBox = function () {
    lightBoxContainer.classList.add('hide-lightbox');
    // lightBox.classList.add('hide-lightbox');
};

var updateLightBox = function () {
    changeImage(currentImageIndex);
    changeCaption(currentImageIndex);
};

var goBackImage = function () {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length-1;
    }
    updateLightBox(currentImageIndex);
};

var goForwardImage = function () {
    currentImageIndex += 1;
    if (currentImageIndex > images.length) {
        currentImageIndex = 0;
    }
    updateLightBox(currentImageIndex);
};

// Exit Button Listeners
exitButton.addEventListener('click', closeLightBox);

// Arrow Button Listeners
backArrow.addEventListener('click', goBackImage);
forwardArrow.addEventListener('click', goForwardImage);