$(document).ready(function(){
  $("#get_color").on("click", function(event){
    event.preventDefault();
    $.post("/color", function(response){
      var cell = response[9];
      var color = response[21] + response[22] + response[23] + response[24] + response[25] + response[26] + response[27];
      $("#color_me li:nth-child(" + cell + ")").css("background-color", color);
    });
  });
});
