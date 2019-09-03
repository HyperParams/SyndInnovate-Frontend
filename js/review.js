console.clear();
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}
console.log($.urlParam('num'));
const number = $.urlParam('num');
//---------------code for the amazing select menu-------------------------------
var el = {};
let eerating = -1;
let longtext = "";

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
    el: '#aa',
    data: { message }
});


$(document).keyup(function (event) {
    if ($("#inp").is(":focus") && event.key == "Enter") {
        console.log("enter");
        console.log(message.message);
        longtext = (message.message);
        let url = "http://2bc5231b.ngrok.io/review/?";
        let params = "ID" + number + "&rating=" + eerating + "&review=" + longtext;
        $.getJSON(url + params, function (response) {
            window.open('', '_self').close()
            // window.location.href = "congrats.html";
        });
    }
});

(function formloader() {
    // console.log($('#fname').html());
    // field._data["text"] = "Rating"; s
})();

$('.rating').click(function (e) {
    e.preventDefault();
    eerating = $(this).text();
    showtext();
});

function showtext() {
    $('#plshide').hide();
    $('.placeholder').on('click', function (ev) {
        $('.placeholder').css('opacity', '0');
        // $('.placeholder').hide();
        $('.list__ul').fadeIn(100);
        $('#inp').focus();
    });
}

jqj
