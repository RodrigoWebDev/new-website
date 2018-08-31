$(function(){
  console.log("Hello");
  $(".icon-container").on("click", function(){
    $(this).find(".accordion__list").toggle("fast"); 
  });

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav").classList.add("nav--background");
    } else {
      document.getElementById("nav").classList.remove("nav--background");
    }
  } 
});