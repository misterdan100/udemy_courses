const container = document.querySelector('.container');
const btnregistrarse = document.querySelector('#sign-up-btn');
const btniniciarsesion = document.querySelector('#sign-in-btn');

btnregistrarse.addEventListener('click', () => {
    container.classList.add('sign-up-mode')
});

btniniciarsesion.addEventListener('click', () => {
    container.classList.remove('sign-up-mode')
});