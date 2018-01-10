$(document).ready(function() {
  $("#query").submit(function(event) {
    var shouting = $("input#shout").val();

    $(".shout").text(shouting.toUpperCase());
    $("#response").show();
    $(".formOne").hide();

    event.preventDefault();
  });
});
