
function myFunction() {
  var selectedPlayer = document.querySelector('input[name="player"]:checked').value;

  var playerName;
  if (selectedPlayer === "player1") {
    document.getElementById("player1").style.display = "block";
    document.getElementById("player2").style.display = "none";
    document.getElementById("player3").style.display = "none";
  } else if (selectedPlayer === "player2") {
     
    document.getElementById("player1").style.display = "block";
    document.getElementById("player2").style.display = "block";
    document.getElementById("player3").style.display = "none";
  } else if (selectedPlayer === "player3") {
  
    document.getElementById("player1").style.display = "block";
    document.getElementById("player2").style.display = "block";
    document.getElementById("player3").style.display = "block";
  }
}

function myName(){
playerName = document.getElementById("player1Input").value;
    document.getElementById("player1Name").innerHTML = playerName;    
}

function nameOne(){
  playerName = document.getElementById("player2Input").value;
    document.getElementById("player2Name").innerHTML = playerName;
}

function nameTwo(){
  playerName = document.getElementById("player3Input").value;
    document.getElementById("player3Name").innerHTML = playerName;
}

var diceResults = [];
var player1Score = 0;
function rollDice() {
  var c, x;
  c = Math.random();
  c = c * 6;
  c = Math.floor(c) + 1;

  if (c === 1) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die").innerHTML = x[0].innerHTML;
  } else if (c === 2) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die").innerHTML = x[1].innerHTML;
  } else if (c === 3) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die").innerHTML = x[2].innerHTML;
  } else if (c === 4) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die").innerHTML = x[3].innerHTML;
  } else if (c === 5) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die").innerHTML = x[4].innerHTML;
  } else if (c === 6) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die").innerHTML = x[5].innerHTML;
  }

  diceResults.push(c); // Store the generated number in the diceResults array

var sum = player1Score + c; // Calculate the new sum

  if (sum === 69) {
    document.getElementById("scorevalue").innerHTML = "Total score is 69 You are the winner!";
    player1Score = sum;
  }else if (sum < 69) {
    if (sum === 3) {
      sum += 7;
    } else if (sum === 5) {
       sum += 8;
    }else if (sum === 7) {
     sum -= 3; 
   }else if (sum === 14) {
      sum -= 5;
    } else if (sum === 17) {
    sum += 5;
  } else if (sum === 20) {
    sum += 10;
  } else if (sum === 25) {
    sum -= 4;
  } else if (sum === 27) {
    sum += 7;
  } else if (sum === 32) {
    sum -= 4;
  } else if (sum === 43) {
    sum += 9;
  } else if (sum === 51) {
    sum -= 4;
  } else if (sum === 56) {
    sum -= 7;
  } else if (sum === 63) {
    sum -= 5;
  } else if (sum === 66) {
    sum -= 6;
  } else if (sum === 68) {
    sum -= 68;
}
    player1Score = sum;
    document.getElementById("scorevalue").innerHTML = player1Score;
  } else {
    document.getElementById("scorevalue").innerHTML = "Try rolling the dice again.";
  }
}

var resultOne = [];
var player2Score = 0;
function diceTwo() {
  var c, x;
c = Math.random();
  c = c * 6;
  c = Math.floor(c) + 1;

  if (c === 1) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die1").innerHTML = x[0].innerHTML;
  } else if (c === 2) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die1").innerHTML = x[1].innerHTML;
  } else if (c === 3) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die1").innerHTML = x[2].innerHTML;
  } else if (c === 4) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die1").innerHTML = x[3].innerHTML;
  } else if (c === 5) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die1").innerHTML = x[4].innerHTML;
  } else if (c === 6) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die1").innerHTML = x[5].innerHTML;
  }
  resultOne.push(c);

var sum = player2Score + c; // Calculate the new sum

  if (sum === 69) {
    document.getElementById("scoreone").innerHTML = "Total score is 69 You are the winner!";
    player2Score = sum;
  }else if (sum < 69) {
    if (sum === 3) {
      sum += 7;
    } else if (sum === 5) {
       sum += 8;
    }else if (sum === 7) {
     sum -= 3; 
   }else if (sum === 14) {
      sum -= 5;
    } else if (sum === 17) {
    sum += 5;
  } else if (sum === 20) {
    sum += 10;
  } else if (sum === 25) {
    sum -= 4;
  } else if (sum === 27) {
    sum += 7;
  } else if (sum === 32) {
    sum -= 4;
  } else if (sum === 43) {
    sum += 9;
  } else if (sum === 51) {
    sum -= 4;
  } else if (sum === 56) {
    sum -= 7;
  } else if (sum === 63) {
    sum -= 5;
  } else if (sum === 66) {
    sum -= 6;
  } else if (sum === 68) {
    sum -= 68;
}
    player2Score = sum;
    document.getElementById("scoreone").innerHTML = player2Score;
  } else {
    document.getElementById("scoreone").innerHTML = "Try rolling the dice again.";
  }
}


var resultTwo = [];
var player3Score = 0;
function diceThree() {
  var c, x;
c = Math.random();
  c = c * 6;
  c = Math.floor(c) + 1;

  if (c === 1) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die2").innerHTML = x[0].innerHTML;
  } else if (c === 2) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die2").innerHTML = x[1].innerHTML;
  } else if (c === 3) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die2").innerHTML = x[2].innerHTML;
  } else if (c === 4) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die2").innerHTML = x[3].innerHTML;
  } else if (c === 5) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die2").innerHTML = x[4].innerHTML;
  } else if (c === 6) {
    x = document.querySelectorAll("p.intro");
    document.getElementById("die2").innerHTML = x[5].innerHTML;
  }
  resultTwo.push(c);

  var sum = player3Score + c; // Calculate the new sum

  if (sum === 69) {
    document.getElementById("scoretwo").innerHTML = "Total score is 69 You are the winner!";
    player2Score = sum;
  }else if (sum < 69) {
    if (sum === 3) {
      sum += 7;
    } else if (sum === 5) {
       sum += 8;
    }else if (sum === 7) {
     sum -= 3; 
   }else if (sum === 14) {
      sum -= 5;
    } else if (sum === 17) {
    sum += 5;
  } else if (sum === 20) {
    sum += 10;
  } else if (sum === 25) {
    sum -= 4;
  } else if (sum === 27) {
    sum += 7;
  } else if (sum === 32) {
    sum -= 4;
  } else if (sum === 43) {
    sum += 9;
  } else if (sum === 51) {
    sum -= 4;
  } else if (sum === 56) {
    sum -= 7;
  } else if (sum === 63) {
    sum -= 5;
  } else if (sum === 66) {
    sum -= 6;
  } else if (sum === 68) {
    sum -= 68;
}
    player3Score = sum;
    document.getElementById("scoretwo").innerHTML = player3Score;
  } else {
    document.getElementById("scoretwo").innerHTML = "Try rolling the dice again.";
  }
}

