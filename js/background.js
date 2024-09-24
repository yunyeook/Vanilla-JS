const images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg']; //이미지 파일명이랑 같아야함.

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement('img');
const body = document.querySelector('body');
body.style.backgroundImage = `url(image/${chosenImage})`;

// bgimage.src = `image/${chosenImage}`;

// document.body.appendChild(bgimage);
