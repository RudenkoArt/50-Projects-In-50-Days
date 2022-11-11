const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

// the below implementation would allow you
// to avoid repeated images
/*
createImages();

function createImages() {
  for (let i = 0; i < 15; i++) {
    const img = document.createElement('img');

    img.src = `https://source.unsplash.com/random/300x${300 + i}`;

    img.style.width = '300px';
    img.style.height = '300px';

    container.appendChild(img);
  }
}
*/
