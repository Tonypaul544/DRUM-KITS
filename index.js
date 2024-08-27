





var btnNumber = document.querySelectorAll (".drum").length;

for (var t = 0; t<btnNumber; t++) {
  var beadDrum = document.querySelectorAll(".drum")[t].addEventListener("click", drumSound);

function drumSound() {
var buttonInnerHTML =   this.buttonInnerHTML;

  switch (buttonInnerHTML) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a" :
      var tom2 = new Audio("sounds/tom-1.mp3");
      tom2.play();
      break;

    case "s" :
      var tom3 = new Audio("sounds/tom-1.mp3");
      tom3.play();
      break;

    case "d" :
      var tom4 = new Audio("sounds/tom-1.mp3");
      tom4.play();
      break;

    case "j" :
      var tom5 = new Audio("sounds/tom-1.mp3")
      tom5.play();
      break;

    case "k" :
      var tom6 = new Audio("sounds/tom-1.mp3");
      tom6.play();
      break;

      case "l" :
      var tom7 = new Audio("sounds/tom-1.mp3");
      tom7.play();
      break;



    default:
    
  }


  
}

}




// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }











// var numberOfButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

// function handleClick() {
//   alert("i got clicked");
// }

// }
