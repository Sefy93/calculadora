// seletor de tema -------------------
const all = $("*");
const body = $("body");
const input = $("#display");
const keyBoard = $(".key-board");
const result = $(".result");
const toggle = $(".toggle");
const move = $(".move");
const key = $(".key");
const del = $(".del");
const reset = $(".reset");

let clickCount = 1;
$(".move").click(() => {
  //tema1--------------------------------------
  if (clickCount == 3) {
    $(".move").css({ left: "5%" });
    clickCount = 1;
    body.css({ "background-color": "#3a4764", color: "#ffffff" });
    input.css({ "background-color": "#182034", color: "#ffffff" });
    keyBoard.css("background-color", "#232c43");
    toggle.css("background-color", "#d1cccc");
    move.css("background-color", "#ca5502");
    result.removeClass("resultDark");
    result.addClass("resultDefault");
    del.removeClass("delResetDark");
    reset.removeClass("delResetDark");
    del.addClass("delResetDefault");
    reset.addClass("delResetDefault");
    key.removeClass("keyDark");
  }
  //tema 3-------------------------------------
  else if (clickCount == 2) {
    $(".move").css({ left: "70%" });
    clickCount++;
    body.css({ "background-color": "#160628", color: "#ffe53d" });
    input.css({ "background-color": "#1d0934", color: "#ffe53d" });
    keyBoard.css("background-color", "#1d0934");
    toggle.css("background-color", "#1d0934");
    move.css("background-color", "#00e0d1");
    result.removeClass("resultLight");
    result.addClass("resultDark");
    reset.removeClass("delResetLight");
    del.removeClass("delResetLight");
    reset.addClass("delResetDark");
    del.addClass("delResetDark");
    key.addClass("keyDark");
  }
  // tema 2-------------------------------------------
  else if (clickCount == 1) {
    $(".move").css({ left: "37%" });
    clickCount++;
    body.css({ "background-color": "#e6e6e6", color: "#35352c" });
    input.css({ "background-color": "#ffffff", color: "#35352c" });
    keyBoard.css("background-color", "#d1cccc");
    toggle.css("background-color", "#d1cccc");
    move.css("background-color", "#ca5502");
    result.removeClass("resultDefault");
    result.addClass("resultLight");
    reset.removeClass("delResetDefault");
    del.removeClass("delResetDefault");
    reset.addClass("delResetLight");
    del.addClass("delResetLight");
    key.removeClass("keyDark");
  }
});
// fim seletor de tema
