let currentPlayer = "x";
    // With these two variables i check if the match was a draw
   let winn = 0;
   let check = 0;

   //Variables for score
   xScore = 0;
   oScore = 0;
   document.getElementById("xVariableForScore").innerHTML = xScore;
   document.getElementById("oVariableForScore").innerHTML = oScore;

    //stores the status of the game, whether its over or still in play
    let gameStatus = "Game On";

    document.getElementById("reset").style.display = "none";

    //Gets all Boxes elements
    const boxes = document.getElementsByClassName("box");

    //Hide text for a draw
    document.getElementById("draw").style.display = "none";
    //loops through all the elements
    for (let i = 0; i < boxes.length; i++) {
      //adds event listener to each box;
      boxes[i].addEventListener("click", function() {
        //checks if the box has an x or an o in it and also checks if the game is still on
        if (boxes[i].innerHTML.trim() == "" && gameStatus == "Game On") {
          //adds x or o for the current play in their choosen box
          boxes[i].innerHTML = currentPlayer;

          //changes player turns
          currentPlayer = currentPlayer == "x" ? "o" : "x";

          //changes player's turn label on top of the game
          document.getElementById(
            "player"
          ).innerHTML = currentPlayer.toUpperCase();

          //checks 3 matching x's or o's
          if (
            boxes[0].innerHTML == boxes[1].innerHTML &&
            boxes[1].innerHTML == boxes[2].innerHTML &&
            boxes[0].innerHTML.trim() != ""
          ) {
            showWinner(0, 1, 2);
          } else if (
            boxes[3].innerHTML == boxes[4].innerHTML &&
            boxes[4].innerHTML == boxes[5].innerHTML &&
            boxes[3].innerHTML.trim() != ""
          ) {
            showWinner(3, 4, 5);
          } else if (
            boxes[6].innerHTML == boxes[7].innerHTML &&
            boxes[7].innerHTML == boxes[8].innerHTML &&
            boxes[6].innerHTML.trim() != ""
          ) {
            showWinner(6, 7, 8);
          } else if (
            boxes[0].innerHTML == boxes[3].innerHTML &&
            boxes[3].innerHTML == boxes[6].innerHTML &&
            boxes[0].innerHTML.trim() != ""
          ) {
            showWinner(0, 3, 6);
          } else if (
            boxes[1].innerHTML == boxes[4].innerHTML &&
            boxes[4].innerHTML == boxes[7].innerHTML &&
            boxes[1].innerHTML.trim() != ""
          ) {
            showWinner(1, 4, 7);
          } else if (
            boxes[2].innerHTML == boxes[5].innerHTML &&
            boxes[5].innerHTML == boxes[8].innerHTML &&
            boxes[2].innerHTML.trim() != ""
          ) {
            showWinner(2, 5, 8);
          } else if (
            boxes[0].innerHTML == boxes[4].innerHTML &&
            boxes[4].innerHTML == boxes[8].innerHTML &&
            boxes[0].innerHTML.trim() != ""
          ) {
            showWinner(0, 4, 8);
          } else if (
            boxes[2].innerHTML == boxes[4].innerHTML &&
            boxes[4].innerHTML == boxes[6].innerHTML &&
            boxes[2].innerHTML.trim() != ""
          ) {
            showWinner(2, 4, 6);
          }
        }
        ++winn;
        if(winn == 9 && check == 0) {
          document.getElementById("draw").style.display = "block";
          document.getElementById("reset").style.display = "block";
        }
      });
    }

    //resets the game
    document.getElementById("reset").addEventListener("click", function() {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].style.backgroundColor = "#dee9ec";
        boxes[i].style.color = "black";
      }
      currentPlayer = "x";
      document.getElementById("message").style.display = "none";
      document.getElementById("player").innerHTML = "X";
      gameStatus = "Game On";
      document.getElementById("draw").style.display = "none";
      check = 0;
      winn = 0;
      document.getElementById("reset").style.display = "none";
    });

    //displays the winner
    function showWinner(x, y, z) {
      boxes[x].style.background = "#0d8b70";
      boxes[x].style.color = "white";
      boxes[y].style.background = "#0d8b70";
      boxes[y].style.color = "white";
      boxes[z].style.background = "#0d8b70";
      boxes[z].style.color = "white";
      document.getElementById("winner").innerHTML =
        currentPlayer == "x" ? "O" : "X";
      document.getElementById("message").style.display = "block";
       gameStatus = "Game Over";
      check = -1;
      document.getElementById("reset").style.display = "block";
      if(currentPlayer == "o") {
        ++xScore;
        document.getElementById("xVariableForScore").innerHTML = xScore;
      }
      if(currentPlayer == "x") {
        ++oScore;
        document.getElementById("oVariableForScore").innerHTML = oScore;
      }
    }

    // Reset the score of players to 0
    function resetScore() {
      xScore = 0;
      oScore = 0;
      document.getElementById("xVariableForScore").innerHTML = xScore;
      document.getElementById("oVariableForScore").innerHTML = oScore;
    }
