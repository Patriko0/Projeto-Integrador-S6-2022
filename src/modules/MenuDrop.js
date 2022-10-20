import $ from "jquery";

$(document).ready(function () {
  $("#teste_btn").click(function () {
    if ($(".cardao").css("display") == "none") {
      $(".cardao").slideDown(300);
      $("#teste_btn").addClass("ativo");
    } else {
      $(".cardao").slideUp(300);
      $("#teste_btn").removeClass("ativo");
    }
  });
});
