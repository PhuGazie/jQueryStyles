$(document).on("click", "#change-red", function() {
    //on click of the change color button, change box color from white to red
    $("#red-box")
      .css("background-color", "#d9534f");
});

$(document).on("click", "#change-green", function() {
    //on click of the change color-green button, change box color from white to green
    $("#green-box")
      .css("background-color", "#5cb85c");
});


$(document).on("click", "#change-blue", function() {
    //on click of the change color-green button, change box color from white to blue
  $("#blue-box")
    .css("background-color", "#2e6da4");
});

$(document).on("click", "#make-big", function() {
    //on click of the change font-size
    $("#enlarge-box").toggleClass("big-box");

});

$(document).on("click", "#make-small", function() {
    //on click of the change font-size
    $("#shrink-box").toggleClass("small-box");

});

$(document).ready(function(){
    $("#animate-div").click(function(){
        $("#animate-box").toggle(1000);
    });
});
