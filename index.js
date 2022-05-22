/* $(".email").on("mouseover", () => {
    $(".email input").slideDown();
    $(".pass input").slideUp();
}) 

$(".pass").on("mouseover", () => {
    $(".email input").slideUp();
    $(".pass input").slideDown();
})  */

$(".email").on("mouseover", () => {
    $(".email input").removeClass("hid");
    $(".pass input").addClass("hid");
}) 

$(".pass").on("mouseover", () => {
    $(".pass input").removeClass("hid");
    $(".email input").addClass("hid");
}) 

$("body").on("input",() => {
    if($(".email input").val().indexOf("@")>-1) {
        if($(".pass input").val().length>8) {
            $("button").removeClass("hid");
        } else ($("button").addClass("hid"))
    } else ($("button").addClass("hid"))
})
