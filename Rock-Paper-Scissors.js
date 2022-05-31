console.log("Hello World");
const playArray = ["Rock", "Paper", "Scissors"];

const buttonList = document.querySelectorAll('button');
const computerselection = document.getElementsByClassName("computer-selection")[0];
const playerselection = document.getElementsByClassName("player-selection")[0];
const result = document.getElementsByClassName("result")[0];

//game();

function computerPlay(playArray){
	return playArray[Math.floor(Math.random() * playArray.length)];
}

function playRound(playerSelection, computerSelection){
	
	playerSelection = playerSelection.toLowerCase();
	computerSelection =  computerSelection.toLowerCase();
	
	if (computerSelection == playerSelection)
		return("Tie Play!");	
	
	else if ((computerSelection =="rock" && playerSelection =="paper") || 
			(computerSelection =="paper" && playerSelection =="scissors") ||
			(computerSelection =="scissors" && playerSelection =="rock")){
		return ("You Win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection));
			}
	
	else if ((computerSelection == "rock" && playerSelection =="scissors") || 
			(computerSelection =="paper" && playerSelection =="rock") ||
			(computerSelection =="scissors" && playerSelection =="paper")){
		return ("You Lose! " + capitalize(playerSelection) + " loses against " + capitalize(computerSelection));
			}
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function game(playerScore,computerScore){
	

	var playerScore = 0; 
	var computerScore = 0;
	
	let result = "";
	let computerSelection,playerSelection;
	
	
}

let counter = 0;
while (counter < 5){
		buttonList.forEach(function(button){
			button.addEventListener('click', clickHandler);
		})
/* 		computerSelection = computerPlay(playArray);
		console.log(counter + "- Computer played : " + computerSelection);
		
		playerSelection = prompt("Enter your play: Paper, Rock or Scissors");
		console.log(counter + "- You played : " + playerSelection);
		
		result = playRound(playerSelection,computerSelection);
		console.log(result);
		if(result.includes("Win"))
			playerScore += 1;
		else if (result.includes("Lose"))
			computerScore += 1; */
		alert("counter = " + counter);
		counter += 1;
	}
	// console.log("End of game : PlayerScore " + playerScore + " - " + computerScore + " ComputerScore !");


function clickHandler(event) {
	playerSelection = event.currentTarget.innerHTML;
	computerSelection = computerPlay(playArray);
	
	computerselection.innerHTML = "Computer Selection ----------------- : " + computerSelection;
	playerselection.innerHTML = "Player Selection ----------------- : " + playerSelection;
	result.innerHTML = "Result ----------------- : " + playRound(playerSelection, computerSelection); 
}