$("#mobileNav").hide();
$("#studentTable").hide();

$(".navbar-toggler").on("click", function () {
  $("#mobileNav").toggle();
});

$("#searchBtn").on("click", function () {
  if ($("#TxtStdcode").val() !== "" && $('#TxtStdcode').val() === '119000392') {
    $("#studentTable").show();
  }
});
