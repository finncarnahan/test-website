$(document).ready(() => {

// fade in title and body -------------------------------
  var $pageTitle = $(".pageTitle");
  var $menuHeader = $(".menuHeader");
  var $indexBody = $("#indexBody");

  $pageTitle.hide();
  $menuHeader.hide();
  $indexBody.hide();

  $pageTitle.fadeIn(1000);
  $menuHeader.fadeIn(1500);
  $indexBody.fadeIn(2500);
// -------------------------------------------------------

// hide menu and slideToggle when clicked

  var $menuItem = $(".menuItem");
  // menuHeader already defined

  $menuItem.hide();

  $menuHeader.on("click", () => {
    $menuItem.slideToggle(500);
  });

});
