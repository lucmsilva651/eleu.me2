export async function loadTyped() {
  var options = {
    strings: ["Welcome to my website!"],
    typeSpeed: 40,
    showCursor: false
  };

  var typed = new Typed("#welcome", options);
};