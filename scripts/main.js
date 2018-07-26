var images;
var container;
var lightBoxContainer;
var lightBox;
var lightBoxImage;
var lightBoxCaption;
var exitButton;
var i;
var openLightBox;
var backArrow;
var forwardArrow;

// Landscape-themed-images
images = [
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

container = document.querySelector('.image-thumbnail-container');
lightBoxContainer = document.querySelector('.lightbox-container');
lightBox = document.querySelector('.lightbox');
lightBoxImage = document.querySelector('.lightbox-image');
lightBoxCaption = document.querySelector('.lightbox-caption');
exitButton = document.querySelector('.exit-button');
backArrow = document.querySelector('.left-arrow');
forwardArrow = document.querySelector('.right-arrow');

var currentImageIndex;

for (i = 0; i < images.length; i++) {
    (function() {
        var image;
        var newImage;
        var imageThumbnail;

        // Copies 'i' every time it creates a new desk space
        var currentI = i;

        image = images[i];
        newImage = document.createElement('img');
        newImage.setAttribute('src', image.src);
        newImage.classList.add('image');

        // caption = document.createElement('p');
        // caption.textContent = image.caption;
        // caption.classList.add('image-caption');

        imageThumbnail = document.createElement('li');
        imageThumbnail.classList.add('image-thumbnail');
        // imageThumbnail.setAttribute('data-index', image.index);
        imageThumbnail.setAttribute('data-index', i);

        imageThumbnail.appendChild(newImage);
        // imageThumbnail.appendChild(caption);    
        
        openLightBox = function (event) {
            currentImageIndex = currentI;
            changeImage(currentImageIndex);
            // console.log(currentI);
            changeCaption(currentImageIndex);
            lightBox.classList.remove('hide-lightbox');
            lightBoxContainer.classList.remove('hide-lightbox');
        };

        imageThumbnail.addEventListener('click', openLightBox);

        container.appendChild(imageThumbnail);
    })();
}

var changeImage = function (currentImageIndex) {
    lightBoxImage.setAttribute('src', images[currentImageIndex].src);
};

var changeCaption = function(currentImageIndex) {
    lightBoxCaption.textContent = images[currentImageIndex].caption;
};

var closeLightBox = function () {
    lightBoxContainer.classList.add('hide-lightbox');
    lightBox.classList.add('hide-lightbox');
};

var goBackImage = function () {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length-1;
    }
    changeImage(currentImageIndex);
    changeCaption(currentImageIndex);
};

var goForwardImage = function () {
    currentImageIndex += 1;
    if (currentImageIndex > images.length) {
        currentImageIndex = 0;
    }
    changeImage(currentImageIndex);
    changeCaption(currentImageIndex);
};

// Exit Button Listeners
exitButton.addEventListener('click', closeLightBox);

// Arrow Button Listeners
backArrow.addEventListener('click', goBackImage);
forwardArrow.addEventListener('click', goForwardImage);