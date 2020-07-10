$('h1').hover(
  function () {
    $('.setsumei').fadeIn();
  },
  function () {
    $('.setsumei').fadeOut();
  }
);
$('#enter').click(function () {
  let dom = $('#text').val();
  $('.out-put').append(dom)
  $('.out-put li').css('display', 'block');
});


