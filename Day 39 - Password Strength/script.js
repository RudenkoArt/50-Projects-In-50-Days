// const password = document.getElementById('password');
// const backgroundImg = document.getElementById('background');

// password.addEventListener('input', (e) => {
//   backgroundImg.style.filter = `blur(${20 - e.target.value.length * 2}px)`;
// });

const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;

  background.style.filter = `blur(${blurValue}px)`;
});
