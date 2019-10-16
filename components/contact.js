const emailInp = document.getElementById("email");
const messageInp = document.getElementById("message");

emailInp.focus({ preventScroll: true });
messageInp.focus({ preventScroll: true });

$(document).ready(function() {
  $(".submit").click(function(event) {
    const email = $("#email").val();
    const message = $("#message").val();
    const status = $("#status");
    status.empty();
    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      status.append("");
    } else {
      event.preventDefault();
      status.append("<span>You have to type right e-mail. </span>");
    }
    if (message.length > 0) {
      status.append("");
    } else {
      event.preventDefault();
      status.append("<span>Reading empty messages makes me sad :(</span>");
    }
  });
});
