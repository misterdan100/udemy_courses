setTimeout(() => {
    document.getElementById('loading-page').className += 'loaded';

    document.querySelector('#loader').className += 'opzero';
    document.querySelector('#lastray').className += 'finalray';
    document.body.className += 'whitebk'
}, 2000);

gsap.to('#bg', {
    scrollTrigger: {
        scrub: 1
    },
    scale: 2
});

gsap.to('#man', {
    scrollTrigger: {
        scrub: 1
    },
    scale: 0.5
});

gsap.to('#clouds_1', {
    scrollTrigger: {
        scrub: 1
    },
    x: 400
});

gsap.to('#clouds_2', {
    scrollTrigger: {
        scrub: 1
    },
    x: -400
});

gsap.to('#text', {
    scrollTrigger: {
        scrub: 1
    },
    y: 500
});