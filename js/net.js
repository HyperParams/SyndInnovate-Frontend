console.clear();
//---------------code for the amazing select menu-------------------------------
var el = {};

$('.placeholder').on('click', function (ev) {
    $('.placeholder').css('opacity', '0');
    // $('.placeholder').hide();
    $('.list__ul').fadeIn(100);
    $('#inp').focus();
});

$('.list__ul a').on('click', function (ev) {
    //ev.preventDefault();
    var index = $(this).parent().index();

    $('.placeholder').text($(this).text()).css('opacity', '1');

    //console.log($('.list__ul').find('li').eq(index).html());

    $('.list__ul').find('li').eq(index).prependTo('.list__ul');
    $('.list__ul').toggle();
});


$('select').on('change', function (e) {
    // Set text on placeholder hidden element
    $('.placeholder').text(this.value);

    // Animate select width as placeholder
    $(this).animate({ width: $('.placeholder').width() + 'px' });
});


//--------------Select menu code end-------------------------------------------

var message = new Vue({
    el: '.list__ul',
    data: { message }
});
$(document).keyup(async function (event) {
    if ($("#inp").is(":focus") && event.key == "Enter") {
        let url = "https://2bc5231b.ngrok.io/verify/";
        sessionStorage.setItem('mobile-number', message.message);
        sessionStorage.setItem('POV', "1");
        console.log(url + message.message);
        let params = "?mobile-number=" + message.message;
        $.getJSON(url + params, function () {
            // alert(response);
            window.location.href = "/otp.html";
        });
    }
});
