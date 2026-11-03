$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h1").css("color", "#3b82f6");
  $("#headline").text("Future Developer | Learning jQuery");
  $(".introduction").css("font-size", "18px");

  $("#light-theme").click(function () {
    $("body").css({
      "background-color": "#f3f5f9",
      "color": "#202938"
    });

    $("a").css("color", "#2563eb");
  });

  $("#dark-theme").click(function () {
    $("body").css({
      "background-color": "#172033",
      "color": "#f3f5f9"
    });

    $("a").css("color", "#93c5fd");
  });

  $("#hide-about").click(function () {
    $("#about-details").hide();
  });

  $("#show-about").click(function () {
    $("#about-details").show();
  });

  $("#toggle-about").click(function () {
    $("#about-details").toggle();
  });

  $("#fade-in").click(function () {
    $(".gallery img").stop(true, true).fadeIn();
  });

  $("#fade-out").click(function () {
    $(".gallery img").stop(true, true).fadeOut();
  });

  $("#fade-toggle").click(function () {
    $(".gallery img").stop(true, true).fadeToggle();
  });

  $("#music-heading, #movie-heading").click(function () {
    const panel = $(this).next(".panel");

    panel.stop(true, true);

    if (panel.is(":visible")) {
      panel.slideUp();
    } else {
      panel.slideDown();
    }
  });

  $("#subject-heading").click(function () {
    $("#subject-panel").stop(true, true).slideToggle();
  });

  $("#add-skill").click(function () {
    const skill = $("#new-skill").val().trim();

    if (skill !== "") {
      $("#skills").append($("<li>").text(skill));
      $("#new-skill").val("");
    }
  });

  $("#prepend-skill").click(function () {
    const skill = $("#new-skill").val().trim();

    if (skill !== "") {
      $("#skills").prepend($("<li>").text(skill));
      $("#new-skill").val("");
    }
  });

  $("#remove-skill").click(function () {
    $("#skills li").last().remove();
  });

  $("#change-link").click(function () {
    $("#social-link").attr(
      "href",
      "https://github.com/Elnur-ctrl?tab=repositories"
    );
  });

  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
  });

  $("#name, #email").on("input", function () {
    $("#live-name").text($("#name").val());
    $("#live-email").text($("#email").val());
  });

  let skillsVisible = false;

  $("#animate-skills").click(function () {
    skillsVisible = !skillsVisible;

    $(".skill-bar").each(function () {
      const targetWidth = skillsVisible
        ? $(this).attr("data-width")
        : "0%";

      $(this).stop().animate({
        width: targetWidth
      }, 800);
    });
  });
});