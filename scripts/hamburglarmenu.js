$(document).ready(function() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    $("#width-element").removeClass("active");
  } else {
    $("#width-element").addClass("active");
  }
});


$("#burger").on("click", function() {
    if ($("#hamburger").hasClass("hidden")) {
        $("#hamburger").removeClass("hidden");
      } else {
        $("#hamburger").addClass("hidden");
      }
  });

