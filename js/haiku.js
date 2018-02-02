$(function(){
  console.log("init haiku");
});


$(document).ready(function() {
     $(".click").click(function(){
        alert();
        $(this).removeClass('btn-success');
        $(this).addClass('btn-primary');
     });
});
