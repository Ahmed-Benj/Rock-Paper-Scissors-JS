console.log("Hello World");
const playArray = ["Rock", "Paper", "Scissors"];

let computerSelection = computerPlay(playArray);
console.log("Computer played : " + computerSelection);

let playerSelection = prompt("Enter your play: Paper, Rock or Scissors");
console.log("You played : " + playerSelection);


console.log(playRound(playerSelection,computerSelection));

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
			(computerSelection =="scissors" && playerSelection =="rock"))
		return ("You Win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection));
	
	else if ((computerSelection == "rock" && playerSelection =="scissors") || 
			(computerSelection =="paper" && playerSelection =="rock") ||
			(computerSelection =="scissors" && playerSelection =="paper"))
		return ("You Lose! " + capitalize(playerSelection) + " loses against " + capitalize(computerSelection));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
