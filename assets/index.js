
$(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
    var r = $(this).attr("alt");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $(".modal-text").html(""+r+"");
  $("#myModal").modal();
});
  

$("video").click(function(){
  var v = $("video > source");
  var t = v.attr("src");
  $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
  $("#myModal").modal();  
});
});
