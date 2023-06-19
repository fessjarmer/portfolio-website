$(document).ready(function() {
  $(".show-more a").on("click", function() {
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    

    if (linkText === "SHOW MORE") {
      linkText = "Show less";
      $content.removeClass("hideContent");
      $content.addClass("showContent");
    } else {
      linkText = "Show more";
      $content.removeClass("showContent");
      $content.addClass("hideContent");
    };

    $this.text(linkText);
  });
});

