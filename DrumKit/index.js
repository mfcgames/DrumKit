
//Detecting Button for button inner html drum!
var drumButtons =document.querySelectorAll(".drum");//Get All info Drum Buttons

for (var i = 0; i < drumButtons.length; i++) {

  drumButtons[i].addEventListener("click",function handleClick(){

    var btnInnerHtml = this.textContent;
    makeSound(btnInnerHtml);
    buttonAnimation(btnInnerHtml);
  });
}
//Detecting Keyboard which is pressed actual key
document.addEventListener("keydown", function(event) {
  var drumKey = event.key;
  makeSound(drumKey);
  buttonAnimation(drumKey);
});

//Our Sounds...
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare=new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
    conolse.log(key);

  }
}

//Animating Buttons
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function(){
    activeButton.classList.remove('pressed');
  },100);
}
