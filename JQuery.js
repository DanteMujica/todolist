$('h1').hover(
  function () {
    $('.setsumei').fadeIn();
  },
  function () {
    $('.setsumei').fadeOut();
  }
);
$('#text').click(function () {
  $('.list').addClass('output-item');
});

$('#enter').click(function () {
  let text = $('#text').val();
  $('.output-item').text(text);
  let dom = '<p class="list">やりたいこと：</p>'
  $('.out-put').append(dom);
  $('div p').removeClass('output-item');
});

$('.list').click(function () {
  $(this).addClass('end')
});