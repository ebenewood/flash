// $(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//   $("img").click(function() {
//     alert("This is an image.");
//   });
//   $("body").click(function() {
//     prompt("Stop touching my body!");
//   });
// });

$(function() {
  $(".clicker").click(function() {
    $("#img-show").toggle(fadeIn);
    $("#img-hid").toggle(fadeOut);
  });
});
