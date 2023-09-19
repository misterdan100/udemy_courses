const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.list');

menuToggle.onclick = function() {
    navigation.classList.toggle('open')
};

function activarLink(e) {
    list.forEach( item => {
        item.classList.remove('active');
    })
    this.classList.add('active');
}

list.forEach( item => item.addEventListener('click', activarLink));