
const menu =  document.querySelector('.menu-container');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body')

const hamburger = document.querySelectorAll(".hamburger");

console.log(hamburger);




function handleClick() {

  if (!menu.classList.contains('open')) {
  menu.classList.add('open')
    overlay.classList.add('open')
    body.style.overflow = 'hidden'

  }
  else {
    menu.classList.remove('open')
    overlay.classList.remove('open')
    body.style.overflow = 'auto'
  }

}


hamburger.forEach(item => {
  item.addEventListener('click',handleClick )
})