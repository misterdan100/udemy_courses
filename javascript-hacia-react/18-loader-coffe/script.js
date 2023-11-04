    function OcultarLoader() {
        document.querySelector('#loading').remove();
    }

    setTimeout(() => {
       OcultarLoader(); 
    }, 5000);