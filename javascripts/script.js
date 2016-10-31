$(function() {
  $("#submit").click(function() {
    var entries = $('#entries').val().split('\n');
    
    if (entries.length <= 1) {
      window.alert("You have to enter some entries before picking a winner!");
    } else {
      var winner = entries[Math.floor(Math.random()*entries.length)];
      $("#winner").removeClass("waiting");
      $("#winner").html(winner);
      $("#winner").addClass('animated bounceIn');
      window.setTimeout(function() {$("#winner").removeClass('animated bounceIn');}, 2000);
    }
  });
});