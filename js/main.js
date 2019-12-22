$().ready(function () {
    let controller = new ScrollMagic.Controller();
    const tl = new TimelineMax();
    tl
        .to('.overlay', 3, {
            scale: 15,
            autoAlpha: 0,
            zIndex: 0
        })
        .to('.background', 3, {
            zIndex: 2
        })
        .to('.video', 3, {
            autoAlpha: 0
        }, '-=3')
        .from('.last', 3, {
            autoAlpha: 0
        }, '-=3')
        .to('.last', 3, {
            autoAlpha: 1
        }, '-=3')
        .from('.play', 3, {
            autoAlpha: 0
        }, '-=3')
        .to('.play', 3, {
            autoAlpha: 1,
            translateY: 20
        }, '-=3')
        .from('.title', 2, {
            autoAlpha: 0
        }, '-=3')
        .to('.title', 2, {
            autoAlpha: 1,
            translateY: 5
        }, '-=3')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.wrapper',
        triggerHook: 0,
        duration: '100%'
    })
        .setTween(tl)
        .setPin('.wrapper')
        .addTo(controller);

});
