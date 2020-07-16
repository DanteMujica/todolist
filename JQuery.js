$('h1').hover(
  function () {
    $('.setsumei').fadeIn();
  },
  function () {
    $('.setsumei').fadeOut();
  }
);
$('#enter').click(function () {
  let text = $('#text').val();
  let dom = "<li class=outputlist>" + text + "<span id=remove>✖</span>" + "</li>"
  $('.out-put').append(dom);
});

$('ul').click(function () {
  $('li').click(function () {
    $(this).toggleClass('end');
  });
});
$('#remove').click(function () {
  $('li').remove();
});

localStorage.list = ul
localStorage.getItem('ul')