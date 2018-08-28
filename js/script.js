$(function(){
   console.log("Hello");
    $(".icon-container").on("click", function(){
       $(this).find(".accordion__list").toggle("fast"); 
    });
});