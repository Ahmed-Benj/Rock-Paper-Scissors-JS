console.log("Hello World");
const playArray = ["Rock", "Paper", "Scissors"];

console.log(computerPlay(playArray));

function computerPlay(playArray){
	
	return playArray[Math.floor(Math.random() * playArray.length)];

}

