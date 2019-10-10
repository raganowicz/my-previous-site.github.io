document.addEventListener("DOMContentLoaded", function(event) {
  let dataText = [
    "Hello World",
    "I'm Piotr",
    "I love art, design and programming",
    "I'm creative beginner front-end developer",
    "You can simply help me grow",
    "Beauty lies in simplicity"
  ];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.getElementsByClassName("typewrite")[0].innerHTML =
        text.substring(0, i + 1) + '<div aria-hidden="true"></div>';
      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function() {
        StartTextAnimation(0);
      }, 14800);
    }
    // check if dataText[i] exists
    else if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function() {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
