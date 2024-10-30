let Guess1 = Math.floor(Math.random() * 10) + 1;

let index = 0;
let index1 = 3;
document.getElementById("numcount").innerHTML = index1;
function Guessing() {
  let Guess2 = document.getElementById("guess").value;
  if (Guess2 == "") {
    alert("enter an integer ......");
  }

  for (let i = 0; i < 1; i++) {
    index++;
    index1--;
  }
  if (Guess2 == Guess1) {
    //alert("Congratulations! You guessed the correct number.");
    document.getElementById("result").innerHTML = "you won";
    //index1--;
  } else if (Guess1 > Guess2) {
    alert("miss match try a higher number");
  } else if (Guess1 < Guess2) {
    alert("miss match try a lower number");
  }
  if (index == 3) {
    document.getElementById("result1").innerHTML = "you lost";

    alert("game over correct number is :" + Guess1);
  }

  console.log(index);
  console.log(Guess1);

  document.getElementById("numcount").innerHTML = index1;
}
