$(document).ready(function(){
  $("#get_color").on("click", function(event){
    event.preventDefault();
    $.post("/color", function(response){
      // var cell = response["cell"];
      // var color = response["color"];
      // console.log(cell);
      // console.log(color);
      console.log(response);
      console.log(response[9]);
      // console.log(response[21..27]);
    });
  });
});
