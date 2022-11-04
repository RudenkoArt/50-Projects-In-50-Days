const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btnIncr = document.getElementById('increase');
const btnDecr = document.getElementById('decrease');
const btnClear = document.getElementById('clear');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');

let isPressed = false;
let size = 20;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

btnClear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

btnIncr.addEventListener('click', () => {
  if (size < 50) {
    size += 5;
    sizeEl.innerHTML = size;
  }
});

btnDecr.addEventListener('click', () => {
  if (size > 5) {
    size -= 5;
    sizeEl.innerHTML = size;
  }
});

colorEl.addEventListener('input', () => {
  color = colorEl.value;
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
