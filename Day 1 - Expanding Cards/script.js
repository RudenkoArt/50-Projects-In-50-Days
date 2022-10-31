const panels = document.querySelectorAll('.panel');

function removeAcviteClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

panels.forEach((panel) =>
  panel.addEventListener('click', () => {
    removeAcviteClasses();
    panel.classList.add('active');
  })
);
