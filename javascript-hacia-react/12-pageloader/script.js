setTimeout(() => {
    document.querySelector('.page-loader').remove()
    document.querySelector('.content').classList.remove('hidden')
}, 3000);