
//something about this doesn't work and I'm too tired to figure it out rn





//when .button is clicked, run execute():
function main() {
  $(".button").on("click", execute() {
    var randomNumber = Math.floor(Math.random() * 7);

    //eight ball operation:
    function chooseResponse() {
    if (randomNumber === 0) {
      return "Reply hazy. Try again.";
    }
    else if (randomNumber === 1) {
      return "Unsure. Is someone fucking with me?";
    }
    else if (randomNumber === 2) {
      return "Absolutely.";
    }
    else if (randomNumber === 3) {
      return "Signs point to no :/";
    }
    else if (randomNumber === 4) {
      return "My sources say yes...";
    }
    else if (randomNumber === 5) {
      return "Unfortunately not.";
    }
    else if (randomNumber === 6) {
      return "Did you even ask me a question? Jesus";
    }
    else if (randomNumber === 7) {
      return "I guess.";
    }
  }
  //print an alert with the result:
  alert(chooseResponse);
});


$(document).ready(main());
