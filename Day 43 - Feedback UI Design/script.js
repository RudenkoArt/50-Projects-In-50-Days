const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.raitings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.closest('div').classList.contains('rating')) {
    removeActive();
    e.target.closest('div').classList.add('active');
    selectedRating =
      e.target.children[1]?.innerHTML ??
      e.target.nextElementSibling?.innerText ??
      e.target.innerHTML;
  }
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <string>Thank You!</string>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
