const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')
//NAV SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})
//NAV HIDE
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})