$('h1').hover(
  function () {
    $('.setsumei').fadeIn();
  },
  function () {
    $('.setsumei').fadeOut();
  }
);
const $list = $('#list');

$('.btn').click(function () {
  let text = $('#text').val();
  $('.output-item').text(text);
  $list.clone().appendTo('#list');
});
$('.output-item').click(function () {
  $(this).addClass('end');
});
