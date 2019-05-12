
var links = $(".myNav a");
$(document).ready(function() {
  // Smooth scrolling
  links.click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 100
      },
      1000
    );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    links.each(function() {
      var sectionOffset = $(this.hash).offset().top - 100;

      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    }, 1);
  });
});


// nav close on click
links.on("click", function() {
  $(".myNav").removeClass("navActiv");
  $(".burger-box").removeClass("burgerActiv");
});