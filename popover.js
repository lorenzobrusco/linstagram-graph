$(document).ready(function () {
  //Popover 
  var title_popover = "<img class='user-img' src='user_login_img.png'/><b><span id='username-popover'>Peppe</span></b>";
  var content_popover = "<a href='profile.html' class='popover-option' id='profile-option-popover'><i class='fa fa-user'></i>Profile</a> <br> <a href='#' class='popover-option' id='logout-option-popover'><i class='fa fa-sign-out'></i>Logout</a>";
  $('#profile').popover({
    title: title_popover,
    content: content_popover,
    html: true,
    placement: "bottom",
    trigger: "manual",
    container: "header"
  }).on("mouseenter", function () {
    var _this = this;
    $(this).popover("show");
    $(".popover").on("mouseleave", function () {
      $(_this).popover('hide');
    });
  }).on("mouseleave", function () {
    var _this = this;
    setTimeout(function () {
      if (!$(".popover:hover").length) {
        $(_this).popover("hide");
      }
    }, 300);
  });

});