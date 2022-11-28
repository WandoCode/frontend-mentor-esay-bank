import './stylesheets/main.scss'

const btnMenu = document.querySelector('.mobile-menu')
const menu = document.querySelector('.nav')
const header = document.querySelector('header')

const headerHeight = header.offsetHeight

const toggleMenu = (e) => {
  e.preventDefault()
  menu.style.top = headerHeight + 'px'
  btnMenu.toggleAttribute('open')
}

btnMenu.onclick = toggleMenu
