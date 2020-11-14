var currenttime = new Date();
var currenthour = currenttime.getHours();

console.log(currenthour);

// do a conditional

var emailmessage = "You are <strong>OK</strong> to email me now";

if (currenthour < 9 || currenthour > 22) {
  emailmessage = "I am asleep, sorry!";
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);


function snapcode() {
    var codeImage = document.getElementById("codePopup");
    codeImage.classList.toggle("appear");
}
function snapcode2() {
    var codeImage = document.getElementById("codePopup2");
    codeImage.classList.toggle("appear");
}