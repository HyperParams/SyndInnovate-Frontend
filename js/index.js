console.clear();
var el = {};
$(".cardsbg").hide();
$('.placeholder').on('click', function (ev) {
  $('.placeholder').css('opacity', '0');
  $('.list__ul').toggle(300);
});

$('.list__ul a').on('click', function (ev) {
  //ev.preventDefault();
  var index = $(this).parent().index();

  $('.placeholder').text($(this).text()).css('opacity', '1');

  console.log($('.list__ul').find('li').eq(index).html());

  seq = $('.list__ul').find('li').eq(index).html();
  $('.list__ul').find('li').eq(index).prependTo('.list__ul');
  $('.list__ul').toggle();
});


$('select').on('change', function (e) {

  // Set text on placeholder hidden element
  $('.placeholder').text(this.value);

  // Animate select width as placeholder
  $(this).animate({ width: $('.placeholder').width() + 'px' });
});

//--------------Select menu code end---------------------------------------------

function redir(a) {
  sessionStorage.setItem('POV', a);
  window.location.href = "net.html";
}
