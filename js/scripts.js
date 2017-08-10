$(document).ready(function() {
  $("#voteInfo").submit(function(event){
    var age = $("#age").val();

    if (age >= 18) {
      $(".adult").show();
    } else {
      $(".minor").show();
    }
    event.preventDefault();
  });
});
