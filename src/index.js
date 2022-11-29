import './stylesheets/main.scss'

const body = document.querySelector('body')
const btnMenu = document.querySelector('.mobile-menu')
const menu = document.querySelector('.nav')
const header = document.querySelector('header')
const nav = document.querySelector('#menu')

const menuButtonDisplayed = getComputedStyle(btnMenu).display !== 'none'
const headerHeight = header.offsetHeight

const closeMenu = (e) => {
  const key = e.key
  if (key === 'Escape') {
    toggleMenu()
  }
}

const toggleMenu = () => {
  const isExpanded = btnMenu.getAttribute('aria-expanded') === 'true'

  menu.style.top = headerHeight + 'px'

  btnMenu.toggleAttribute('open')
  btnMenu.setAttribute('aria-expanded', !isExpanded)

  if (!isExpanded) {
    body.addEventListener('keydown', closeMenu)
  } else {
    body.removeEventListener('keydown', closeMenu)
  }
}

if (!menuButtonDisplayed) {
  nav.removeAttribute('aria-labelledby')
}

btnMenu.onclick = toggleMenu
