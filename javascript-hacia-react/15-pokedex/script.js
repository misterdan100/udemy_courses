document.addEventListener('DOMContentLoaded', () => {

    //#region OBSERVADOR DE IMAGENES ASYNCRONAS
    const imgOptions = {};
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach( entry => {
            if(!entry.isIntersecting) return;
            const img = entry.target
            let dataImage = img.getAttribute('data-image');
            img.src = dataImage;
            imgObserver.unobserve(img)
        } )
    }, imgOptions);
    //#endregion

    //#region CONSUMO DE API CON FETCH 
    const fetchPokemons = async (endpoint) => {
        let data;
        try {
            const response = await fetch(endpoint, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            data = await response.json();

        } catch (error) {
            console.log(error);
        };

        return data.pokemon_species;
    };
    //#endregion

    //#region ORDENAR NUMEROS DE POKEMON
    function orderNumber(str) {
        let mySubstring = str.substring(
            str.lastIndexOf('s/') + 2,
            str.lastIndexOf('/')
        );
        return mySubstring;
    }
    //#endregion

    //#region AGREGAR POKEMONS AL HTML
    async function getPokemons(numero, toggle) {
        let endpoint = `https://pokeapi.co/api/v2/generation/${numero}/`;
        let container = document.querySelector('#container');
        container.innerHTML = '';
        let pokemons = [];
        pokemons = await fetchPokemons(endpoint);

        for (let j = 0; j < pokemons.length; j++) {
            pokemons[j].nr = orderNumber(pokemons[j].url);
        };

        pokemons.sort((a, b) => a.nr - b.nr);

        pokemons.forEach(item => {
            let numero3decimales = orderNumber(item.url);

            //* Agregar ceros delante al numero
            if (numero3decimales < 10) {
                numero3decimales = "0" + numero3decimales;
            }
            if (numero3decimales < 100) {
                numero3decimales = "0" + numero3decimales;
            }

            let divitem = document.createElement('LI');
            divitem.classList.add('item');

            //* Crear imagenes pokemons
            let img = new Image()
            //* Llamar direccion de las APIs que tienen imagenes
            const toggleurl = toggle ? "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" : "https://serebii.net/pokemongo/pokemon/";
            img.src = 'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif';
            const urlImage = `${toggleurl}${numero3decimales}.png`
            img.setAttribute('data-image', urlImage);
            img.setAttribute('class', 'pokeimage');
            img.setAttribute('alt', item.name);

            divitem.innerHTML = `<div> ${orderNumber(item.url)} - ${item.name}</div>`;
            divitem.appendChild(img);
            container.appendChild(divitem);
            imgObserver.observe(img)
        })
    };
    //#endregion

    //#region AGREGAR GENERACIONES
    let numero = 1;
    getPokemons(1);
    let toggle = false;
    btnicono.addEventListener('click', () => {
        toggle = !toggle;
        getPokemons(numero, toggle)
    })

    let geners = ['generation-1', 'generation-2', 'generation-3', 'generation-4', 'generation-5', 'generation-6', 'generation-7'];

    let filters = document.querySelector('#filters');
    let gen = '';

    for (let i = 0; i < geners.length; i++) {
        gen += `<input class="radio-gens" type="radio" id="${geners[i]}" value=${i + 1} name="generation" checked>
        <label for="${geners[i]}" class="label-gens">${geners[i]}</label>`
    }

    filters.innerHTML = gen;
    filters.addEventListener('click',(e) => {
        console.log(e);
        let targ = e.target.type;
        if(targ == 'radio') {
            getPokemons(e.target.value, toggle);
            title.innerHTML = `Pokemon ${e.target.id}`
        }
    })
    //#endregion

});