var link = document.querySelector(".feedbackBtn");
var popup = document.querySelector(".feedback");
var userName = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");
var comment = popup.querySelector("[name=feedback-comment]");
var close = popup.querySelector(".feedbackCrossBtn");
var form = popup.querySelector(".feedback__form");
var storageUserName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback--show");

  if (storageUserName && storageEmail) {
    userName.value = storageUserName;
    email.value = storageEmail;
    comment.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback--show");
  popup.classList.remove("feedback--error");
});

form.addEventListener("submit", function(event) {
  if (!userName.value || !email.value || !comment.value) {
    event.preventDefault();
    popup.classList.remove("feedback--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback--error");
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback--show")) {
      popup.classList.remove("feedback--show");
      popup.classList.remove("feedback--error");
    }
  }
});


