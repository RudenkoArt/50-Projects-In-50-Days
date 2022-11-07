const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profileImg');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" alt="macbook photo" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus fuga ad vero ipsam voluptatum numquam!';
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />';
  name.innerHTML = 'Mike Ross';
  date.innerHTML = 'Nov 07, 2022';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((text) => text.classList.remove('animated-bg'));
}
