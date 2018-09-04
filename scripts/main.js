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

const container = $('.image-thumbnail-container');
const lightBoxContainer = $('.lightbox-container');
const lightBox = $('.lightbox');
const lightBoxImage = $('.lightbox-image');
const lightBoxCaption = $('.lightbox-caption');
const exitButton = $('.exit-button');
const backArrow = $('.left-arrow');
const forwardArrow = $('.right-arrow');

let currentImageIndex;

let addNewImage = (image, i) => {

    let newImage = $('<img>');
    newImage.attr('src', image.src);
    newImage.addClass('image');

    let imageThumbnail = $('<li>');
    imageThumbnail.addClass('image-thumbnail');

    imageThumbnail.append(newImage);  
    
    let openLightBox = (event) => {
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

let changeImage = (currentImageIndex) => {
    lightBoxImage.attr('src', images[currentImageIndex].src);
};

let changeCaption = (currentImageIndex) => {
    lightBoxCaption.text(images[currentImageIndex].caption);
};

let closeLightBox = () => {
    lightBoxContainer.addClass('hide-lightbox');
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

// Click Event Listener on the Lightbox Container
$(window).on('click', (event) => {
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

// Arrow Button Click Listeners -- Clicking Actual Buttons on the Screen
backArrow.on('click', goBackImage);
forwardArrow.on('click', goForwardImage);