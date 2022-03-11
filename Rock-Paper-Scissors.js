console.log("Hello World");
const playArray = ["Rock", "Paper", "Scissors"];

game();

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
		return ("You Win! " + capitalize(playerSelection) + " beats " + computerSelection);
			}
	
	else if ((computerSelection == "rock" && playerSelection =="scissors") || 
			(computerSelection =="paper" && playerSelection =="rock") ||
			(computerSelection =="scissors" && playerSelection =="paper")){
		return ("You Lose! " + capitalize(playerSelection) + " loses against " + computerSelection);
			}
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function game(playerScore,computerScore){

	var playerScore = 0; 
	var computerScore = 0;
	let counter = 0;
	let result = "";
	let computerSelection,playerSelection;
	
	while (counter < 1){
		
		computerSelection = computerPlay(playArray);
		console.log(counter + "- Computer played : " + computerSelection);
		
		playerSelection = prompt("Enter your play: Paper, Rock or Scissors");
		console.log(counter + "- You played : " + playerSelection);
		
		result = playRound(playerSelection,computerSelection);
		console.log(result);
		if(result.includes("Win"))
			playerScore += 1;
		else if (result.includes("Lose"))
			computerScore += 1;
		
		counter += 1;
	}
	
	console.log("End of game : PlayerScore " + playerScore + " - " + computerScore + " ComputerScore !");

}