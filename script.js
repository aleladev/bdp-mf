const btn = document.querySelector('.btn');
const nav = document.querySelector('nav');
const illustration = document.querySelector('.illustration');



btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('visible');
    illustration.classList.toggle('hidden'); 
})










