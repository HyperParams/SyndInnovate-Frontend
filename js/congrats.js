console.clear();
var el = {};
$('.list__ul').toggle(0);
$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
            stagePadding: 60
        },
        600: {
            items: 1,
            stagePadding: 100
        },
        1000: {
            items: 1,
            stagePadding: 200
        },
        1200: {
            items: 1,
            stagePadding: 250
        },
        1400: {
            items: 1,
            stagePadding: 300
        },
        1600: {
            items: 1,
            stagePadding: 350
        },
        1800: {
            items: 1,
            stagePadding: 400
        }
    }
})
// $('.list__ul a').on('click', function (ev) {
//     //ev.preventDefault();
//     var index = $(this).parent().index();

//     $('.placeholder').text($(this).text()).css('opacity', '1');

//     console.log($('.list__ul').find('li').eq(index).html());

//     seq = $('.list__ul').find('li').eq(index).html();
//     $('.list__ul').find('li').eq(index).prependTo('.list__ul');
//     $('.list__ul').toggle();
// });


// $('select').on('change', function (e) {

//     // Set text on placeholder hidden element
//     $('.placeholder').text(this.value);

//     // Animate select width as placeholder
//     $(this).animate({ width: $('.placeholder').width() + 'px' });
// });

//--------------Select menu code end---------------------------------------------
