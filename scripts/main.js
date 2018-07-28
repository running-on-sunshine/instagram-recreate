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

var container = $('.image-thumbnail-container');
var lightBoxContainer = $('.lightbox-container');
var lightBox = $('.lightbox');
var lightBoxImage = $('.lightbox-image');
var lightBoxCaption = $('.lightbox-caption');
var exitButton = $('.exit-button');
var backArrow = $('.left-arrow');
var forwardArrow = $('.right-arrow');

var currentImageIndex;

var addNewImage = function(image, i) {

    var newImage = $('<img>');
    newImage.attr('src', image.src);
    newImage.addClass('image');

    var imageThumbnail = $('<li>');
    imageThumbnail.addClass('image-thumbnail');

    imageThumbnail.append(newImage);  
    
    var openLightBox = function (event) {
        currentImageIndex = i;
        changeImage(currentImageIndex);
        changeCaption(currentImageIndex);
        // lightBox.classList.remove('hide-lightbox');
        lightBoxContainer.removeClass('hide-lightbox');
    };

    imageThumbnail.on('click', openLightBox);

    container.append(imageThumbnail);
};

images.forEach(addNewImage);

var changeImage = function (currentImageIndex) {
    lightBoxImage.attr('src', images[currentImageIndex].src);
};

var changeCaption = function (currentImageIndex) {
    lightBoxCaption.text(images[currentImageIndex].caption);
};

var closeLightBox = function () {
    lightBoxContainer.addClass('hide-lightbox');
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

// Click Event Listener on the Lightbox Container
$(window).on('click', function (event) {
    if (event.target === lightBoxContainer[0]) {
        closeLightBox();
    }
});

// Click Event Listener on the Lightbox Container (Alternative Version)
// $(window).on('click', function (event) {
//     if ($(event.target).is(lightBoxContainer)) {
//         closeLightBox();
//     }
// });

// Click Event Listener on the 'x' Exit Button 
exitButton.on('click', closeLightBox);

// Arrow + Escape Keydown Event Listeners -- Pressing Actual Buttons on the Keyboard
$(document).on('keydown', (event) => {
    var keyName = event.key;
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

// Arrow Button Click Listeners -- Clicking Actual Buttons on the Screen
backArrow.on('click', goBackImage);
forwardArrow.on('click', goForwardImage);