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
  $('.list').append(dom).css('display', 'block');
});


