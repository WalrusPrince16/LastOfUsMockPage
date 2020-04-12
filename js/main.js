$('.carousel-main').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false
});

$('.carousel-nav').flickity({
    asNavFor: '.carousel-main',
    contain: true,
    pageDots: false
});