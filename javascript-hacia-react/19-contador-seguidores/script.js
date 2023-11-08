const counters = document.querySelectorAll('.counter');

// * bucle para recorrer todos los hijos de counters
counters.forEach( (item) => {
    item.innerText = '0';
    //* el + es para convertir un string en numero
    const target = +item.getAttribute('data-target');
    const interval = target / 30;


    // item.innerText = target

    const updateCounter = () => {
        const value = +item.innerText;
        if( value < target ) {
            item.innerText = Math.ceil( value + interval)
            setTimeout(() => {
                updateCounter();
            }, 50)
        } else {
            item.innerHTML = target;
        }


    }

    updateCounter();
} )