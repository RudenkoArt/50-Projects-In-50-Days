/*
const TIMER_SEC = 2;

const imgContainer = document.getElementById('imgs');
const imgs = document.querySelectorAll('img');
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');

let timer = setInterval(changeSlide, TIMER_SEC * 1000);
let totalWidth = (imgs.length - 1) * 500;

function changeSlide(prev = false) {
  const currTransValue = +imgContainer.style.transform.replace(/[^\d.]/g, '');

  if (prev) {
    if (currTransValue === 0) {
      imgContainer.style.transform = `translateX(-${totalWidth}px)`;
    } else {
      imgContainer.style.transform = `translateX(-${currTransValue - 500}px)`;
    }
  } else {
    if (currTransValue < totalWidth) {
      imgContainer.style.transform = `translateX(-${currTransValue + 500}px)`;
    } else {
      imgContainer.style.transform = `translateX(${0}px)`;
    }
  }

  clearInterval(timer);
  timer = setInterval(changeSlide, TIMER_SEC * 1000);
}

nextBtn.addEventListener('click', () => changeSlide());

prevBtn.addEventListener('click', () => changeSlide(true));
*/

const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx += 1;

  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  idx += 1;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  idx -= 1;
  changeImage();
  resetInterval();
});
