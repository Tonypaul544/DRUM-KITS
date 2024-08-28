








// var btnNumber = document.querySelectorAll (".drum").length;

// for (var t = 0; t<btnNumber; t++) {
//   var beadDrum = document.querySelectorAll(".drum")[t].addEventListener("click", drumSound);

// function drumSound() {
// var buttonInnerHTML =   this.buttonInnerHTML;

//   switch (buttonInnerHTML) {

//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     case "a" :
//       var tom2 = new Audio("sounds/tom-1.mp3");
//       tom2.play();
//       break;

//     case "s" :
//       var tom3 = new Audio("sounds/tom-1.mp3");
//       tom3.play();
//       break;

//     case "d" :
//       var tom4 = new Audio("sounds/tom-1.mp3");
//       tom4.play();
//       break;

//     case "j" :
//       var tom5 = new Audio("sounds/tom-1.mp3")
//       tom5.play();
//       break;

//     case "k" :
//       var tom6 = new Audio("sounds/tom-1.mp3");
//       tom6.play();
//       break;

//       case "l" :
//       var tom7 = new Audio("sounds/tom-1.mp3");
//       tom7.play();
//       break;



//     default:
    
//   }


  
// }

// }








var drum1 = document.querySelector(".w"),
    drum2 = document.querySelector(".a"),
    drum3 = document.querySelector(".s"),
    drum4 = document.querySelector(".d"),
    drum5 = document.querySelector(".j"),
    drum6 = document.querySelector(".k"),
    drum7 = document.querySelector(".l");

    drum1.addEventListener("click", playFirstSound);
    function playFirstSound() {
      drum1 = new Audio("sounds/crash.mp3");
      drum1.play();
    }

    
    drum2.addEventListener("click", playSound2);
    function playSound2() {
      drum2 = new Audio("sounds/kick-bass.mp3");
      drum2.play();
    }

    drum3.addEventListener("click", playSound3);
    function playSound3() {
      drum3 = new Audio("sounds/snare.mp3");
      drum3.play();
    }

    drum4.addEventListener("click", playSound4);
    function playSound4() {
      drum4 = new Audio("sounds/tom-1.mp3");
      drum4.play();
    }

    drum5.addEventListener("click", playSound5);
    function playSound5() {
      drum5 = new Audio("sounds/tom-2.mp3");
      drum5.play();
    }

    drum6.addEventListener("click", playSound6);
    function playSound6() {
      drum6 = new Audio("sounds/tom-3.mp3");
      drum6.play();
    }

    drum7.addEventListener("click", playSound7);
    function playSound7() {
      drum7 = new Audio("sounds/tom-4.mp3");
      drum7.play();
    }


    const drumSet = document.querySelector(".set");
    const startDrum = document.querySelector(".instructuin1");
    const closeBtn = document.querySelector(".instructuin2");

    startDrum.addEventListener("click", drumShow);
    function drumShow() {
      drumSet.style.display = "block";
      startDrum.style.display = "none"
      closeBtn.style.display = "block"
    } 

    closeBtn.addEventListener("click", closeDrum);
    function closeDrum() {
      drumSet.style.display = "none";
      startDrum.style.display = "block";
      startDrum.style.margin = "10px auto";
      closeBtn.style.display = "none";
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
