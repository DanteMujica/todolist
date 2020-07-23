$("h1").hover(
  function () {
    $(".setsumei").fadeIn();
  },
  function () {
    $(".setsumei").fadeOut();
  }
);
$("#enter").click(function () {
  let text = $("#text").val();
  let dom = "<li class=outputlist>" + text + "<span class=close>✖</span>" + "</li>";
  $(".out-put").append(dom);
});
$("body").on('click', 'li' , function () {
  $(this).toggleClass("end");
});
$('body').on('click', 'span', function () {
  $(this).closest('li').remove();
});
