var images;
var container;
var lightBox;
var lightBoxImage;
var exitButton;
var i;
var openLightBox;
var backArrow;
var forwardArrow;


// Landscape-themed-images
images = [
    { caption: "Caption", index: 0, src: "aventuras/billy-williams-262740-unsplash.jpg" },
    { caption: "Caption", index: 1, src: "aventuras/brianda-maldonado-741341-unsplash.jpg" },
    { caption: "Caption", index: 2, src: "aventuras/idan-arad-109776-unsplash.jpg" },
    { caption: "Caption", index: 3, src: "aventuras/romello-williams-384006-unsplash.jpg" },
    { caption: "Caption", index: 4, src: "aventuras/kea-mowat-601648-unsplash.jpg" },
    { caption: "Caption", index: 5, src: "aventuras/kea-mowat-658785-unsplash.jpg" },
    { caption: "Caption", index: 6, src: "aventuras/patrick-bald-730896-unsplash.jpg" },
    { caption: "Caption", index: 7, src: "aventuras/simon-matzinger-320332-unsplash.jpg" },
    { caption: "Caption", index: 8, src: "aventuras/saffu-221040-unsplash.jpg" }
    
];

container = document.querySelector('.image-thumbnail-container');
lightBox = document.querySelector('.lightbox');
lightBoxImage = document.querySelector('.lightbox-image');
exitButton = document.querySelector('.exit-button');
backArrow = document.querySelector('.left-arrow');
forwardArrow = document.querySelector('.right-arrow');

var currentImageIndex;

for (i = 0; i < images.length; i++) {
    (function() {
        var image;
        var newImage;
        // var caption;
        var imageThumbnail;

        // Copies 'i' every time it creates a new desk space
        var currentI = i;

        image = images[i];
        newImage = document.createElement('img');
        newImage.setAttribute('src', image.src);
        newImage.classList.add('image');

        // caption = document.createElement('p');
        // caption.textContent = image.caption;
        // caption.classList.add('image-caption')

        imageThumbnail = document.createElement('li');
        imageThumbnail.classList.add('image-thumbnail');
        // imageThumbnail.setAttribute('data-index', image.index);
        imageThumbnail.setAttribute('data-index', i);

        imageThumbnail.appendChild(newImage);
        // imageThumbnail.appendChild(caption);    
        
        openLightBox = function (event) {
            currentImageIndex = currentI;
            changeImage(currentImageIndex);
            lightBox.classList.remove('hide-lightbox');
        };

        imageThumbnail.addEventListener('click', openLightBox);

        container.appendChild(imageThumbnail);
    })();
}

var changeImage = function (currentImageIndex) {
    lightBoxImage.setAttribute('src', images[currentImageIndex].src);
    // image.caption;
};

var closeLightBox = function () {
    lightBox.classList.add('hide-lightbox');
};

var goBackImage = function () {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length-1;
    }
    changeImage(currentImageIndex);
};

var goForwardImage = function () {
    currentImageIndex += 1;
    if (currentImageIndex > images.length) {
        currentImageIndex = 0;
    }
    changeImage(currentImageIndex);
};

// Exit Button Listner
exitButton.addEventListener('click', closeLightBox);

// Arrow Button Listeners
backArrow.addEventListener('click', goBackImage);
forwardArrow.addEventListener('click', goForwardImage);