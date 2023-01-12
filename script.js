// console.log('hello from js');

const toggleBar = document.querySelector('.bar');
const closeBtn = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');

toggleBar.addEventListener('click', () => {
    // console.log('hello');
    navMenu.classList.add('active');
})
closeBtn.addEventListener('click', () => {
    // console.log('hello');
    navMenu.classList.remove('active');
})