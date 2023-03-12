let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');


let contactsBurger = document.getElementById('contacts-burger')
let aboutBurger = document.getElementById('about-burger')
let eduBurger = document.getElementById('edu-burger')
let hardSkillsBurger = document.getElementById('hard-skills-burger')
let softSkillsBurger = document.getElementById('soft-skills-burger')
let projectsBurger = document.getElementById('projects-burger')
let codeBurger = document.getElementById('code-burger')



burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
contactsBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
aboutBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
eduBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
hardSkillsBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
softSkillsBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
projectsBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
codeBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
