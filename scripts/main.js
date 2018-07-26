// Food-themed-images
// var images = [
//     { caption: "Dragonfruit & citrus!", class: "image1", src: "images/brooke-lark-209712-unsplash.jpg" },
//     { caption: "Oooh! Something tasty!", class: "image2", src: "images/brooke-lark-194252-unsplash.jpg" },
//     { caption: "A colorful array of citrus fruits!", class: "image3", src: "images/edgar-castrejon-459807-unsplash.jpg" },
//     { caption: "A fresh lunch bowl ready to be devoured.", class: "image4", src: "images/brooke-lark-229136-unsplash.jpg" },
//     { caption: "Caption", class: "image5", src: "images/brooke-lark-209708-unsplash.jpg" },
//     { caption: "Caption", class: "image6", src: "images/edgar-castrejon-460843-unsplash.jpg" },
//     { caption: "Caption", class: "image7", src: "images/jonathan-pielmayer-176664-unsplash.jpg" },
//     { caption: "Caption", class: "image8", src: "images/cayla1-150730-unsplash.jpg" },
//     { caption: "Caption", class: "image9", src: "images/edgar-castrejon-459822-unsplash.jpg" }
// ];

// Landscape-themed-images
var images = [
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

var container = document.querySelector('.image-thumbnail-container');

for (var image of images) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.src);
    newImage.classList.add('image');

    // var caption = document.createElement('p');
    // caption.textContent = image.caption;
    // caption.classList.add('image-caption')

    var imageThumbnail = document.createElement('li');
    imageThumbnail.classList.add('image-thumbnail');
    imageThumbnail.setAttribute('data-index', image.index);

    imageThumbnail.appendChild(newImage);
    // listItem.appendChild(caption);

    container.appendChild(imageThumbnail);
}

// ==================================================================== //
//                              Lightbox                                //
// ==================================================================== //

var currentIndex;

// Selects the Thumbnail
var imageThumbnails = document.querySelectorAll('.image-thumbnail');

// Selects the Lightbox
var lightBox = document.querySelector('.lightbox');

// Selects the Lightbox Image
var lightboxImage = document.querySelector('.lightbox-image');

// Selects the Arrow Buttons
var backArrow = document.querySelector('.left-arrow');
var forwardArrow = document.querySelector('.right-arrow');

// Selects the Exit Button
var exitButton = document.querySelector('.exit-button');

var changeImage = function () {
    var imageSource = images[currentIndex].src;
    lightboxImage.setAttribute('src', imageSource);
};

// -------------------------- Opens Lightbox --------------------------- //
var openLightBox = function () {
    currentIndex = event.currentTarget.getAttribute('data-index');
    changeImage();
    lightBox.classList.remove('hide-lightbox');
};

// Adds 'Click' Event Listener to every image container ('listItems') --- //
for (var image of imageThumbnails) {
    image.addEventListener('click', openLightBox);
}

// -------------------------- Closes Lightbox ---------------------------- //
var closeLightBox = function () {
    lightBox.classList.add('hide-lightbox');
};

// Exit Button Listener
exitButton.addEventListener('click', closeLightBox);

// -------------------------- Goes Back An Image -------------------------- // 
var goBackImage = function () {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = images.length-1;
    }
    changeImage();
};

// ------------------------- Goes Forward An Image -------------------------- // 
var goForwardImage = function () {
    currentIndex += 1;
    if (currentIndex > images.length) {
        currentIndex = 0;
    }
    changeImage();
};

// Arrow Button Listeners
backArrow.addEventListener('click', goBackImage);
forwardArrow.addEventListener('click', goForwardImage);