const keys = [..."ABCDEFGHIJKLMNOPQRSTVWXYZ"];
//* seleccionar una letra al asar
function getRandomNumber(min, max) {
    min = Math.floor(min); //? redondea hacia arriba
    max = Math.ceil(max); //? redondea hacia abajo

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomKey() {
    return keys[getRandomNumber(0, keys.length-1)]
}

function targetRandomKey() {
    const key = document.querySelector(`#${getRandomKey()}`)
    key.classList.add('selected')
}

//* evento para resaltar tecla cuando es presionada
document.addEventListener('keyup', event => {
    const keyPressed = String.fromCharCode(event.keyCode);
    const keyElement = document.querySelector(`#${keyPressed}`);
    const highlightedKey = document.querySelector('.selected');

    keyElement.classList.add('hit');
    keyElement.addEventListener('animationend', () => {
        keyElement.classList.remove('hit')
    })

    if(keyPressed === highlightedKey.innerHTML) {
        highlightedKey.classList.remove('selected')
        targetRandomKey();
    }
});

targetRandomKey();