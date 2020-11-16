var currenttime = new Date();
var currenthour = currenttime.getHours();
var offsetMins = currenttime.getTimezoneOffset();
var offset = offsetMins/60

console.log(offset);
console.log(currenthour);
currenthour += offset;
console.log(currenthour);

var emailmessage = "I am awake, feel free to email me";

if (currenthour < 9 || currenthour >= 22) {
  emailmessage = "I am asleep, please avoid emailing me currently";
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);


var findLocation = document.getElementById('switch');


var button = document.createElement('button');
button.setAttribute('class','js-make-something-happen'); 
button.setAttribute('id','make-something-happen');
button.textContent='Blinding Light Mode'; 


findLocation.append(button);

var listenForInteraction = document.getElementById('make-something-happen');


function changePage(){
  
  document.documentElement.classList.toggle('js-modify-page');

  if (button.textContent == 'Blinding Light Mode'){
    button.textContent = 'Take me back to Dark Mode';
    document.cookie = "false"
  } else{
    button.textContent = 'Blinding Light Mode';
    document.cookie = "true;"
  }
}


listenForInteraction.addEventListener('click', changePage);
listenForInteraction.addEventListener('keydown', changePage);


window.onload = (event) => {
  console.log(document.cookie);
  if (document.cookie == "false"){
    document.documentElement.classList.add('js-modify-page');
    button.textContent = 'Take me back to Dark Mode';
  } else {
    document.documentElement.classList.remove('js-modify-page');
    button.textContent = 'Blinding Light Mode';
  }
};

