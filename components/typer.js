document.addEventListener("DOMContentLoaded", function(event) {
  let dataText = [
    "Hello World",
    "I'm Piotr",
    "I love art, design and programming",
    "I'm creative beginner front-end developer",
    "You can simply help me grow",
    "Beauty lies in simplicity"
  ];
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.getElementsByClassName("typewrite")[0].innerHTML =
        text.substring(0, i + 1) + '<div aria-hidden="true"></div>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function() {
        StartTextAnimation(0);
      }, 14800);
    }
    else if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function() {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});
