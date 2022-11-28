import './stylesheets/main.scss'

const btnMenu = document.querySelector('.mobile-menu')
const menu = document.querySelector('.nav')
const header = document.querySelector('header')

const headerHeight = header.offsetHeight
menu.style.top = headerHeight + 'px'

const toggleMenu = (e) => {
  e.preventDefault()
  btnMenu.toggleAttribute('open')
}

btnMenu.onclick = toggleMenu
