var currenttime = new Date();
var currenthour = currenttime.getHours();
var offsetMins = currenttime.getTimezoneOffset();
var offset = offsetMins / 60;

currenthour += offset;

var emailmessage = "I am awake, feel free to email me";

if (currenthour < 9 || currenthour >= 22) {
  emailmessage = "I am asleep, please don't email me";
}

var getheading = document.querySelector(".contact-me h2");
getheading.insertAdjacentHTML("afterend", '<p class="js-message">' + emailmessage + "</p>");


var findLocation = document.getElementById('switch');


var button = document.createElement('button');
button.setAttribute('class', 'js-make-something-happen');
button.setAttribute('id', 'make-something-happen');
button.textContent = 'Light Mode';


findLocation.append(button);

var listenForInteraction = document.getElementById('make-something-happen');


function changePage() {
  
  document.documentElement.classList.toggle('js-modify-page');

  if (button.textContent === 'Light Mode') {
    button.textContent = 'Dark Mode';
    document.cookie = "false";
  } else {
    button.textContent = 'Light Mode';
    document.cookie = "true";
  }
}


listenForInteraction.addEventListener('click', changePage);
listenForInteraction.addEventListener('keydown', changePage);


window.addEventListener('load',
  function checkCookies() {
    if (document.cookie == "false"){
      document.documentElement.classList.add('js-modify-page');
      button.textContent = 'Dark Mode';
    } else {
      document.documentElement.classList.remove('js-modify-page');
      button.textContent = 'Light Mode';
    }
  },
  
  );
  
