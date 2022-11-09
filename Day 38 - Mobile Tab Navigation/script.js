// const content = document.querySelectorAll('.content');
// const buttons = document.querySelectorAll('li');

// for (let idx = 0; idx < buttons.length; idx++) {
//   buttons[idx].addEventListener('click', () => {
//     addActiveClass(buttons[idx]);
//     displayContent(idx);
//   });
// }

// function addActiveClass(btn) {
//   buttons.forEach((button) => (button.classList = ''));

//   btn.classList.add('active');
// }

// function displayContent(idx) {
//   content.forEach((img) => img.classList.remove('show'));
//   content[idx].classList.add('show');
// }

const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove('active'));
}
