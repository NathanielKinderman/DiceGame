function runGame(){
	var n = prompt("Please enter your boxers name:");
	let player1 = {
		Name: n,
		Health: 100
	}	

	n = prompt("Please enter your boxers name:");
	let computer = { 
		Name: n,
		Health: 100

	}

	while(player1.Health > 0 && computer.Health > 0) {
		computer.Health -= chooseattack("Player 1");
		alert("Computer Health " + computer.Health);
		console.log("Computer Health " + computer.Health);

		player1.Health -= chooseattack("Player 2");
		alert("Your health " + player1.Health);
		console.log("Your health " + player1.Health);
	}
	
	console.log("They got knocked out");
	console.log(player1);
	console.log(computer);


//setup
//get names
//set both health to 100
// let playerHealth = 100
// let computerHealth = 100





//gameplay loop
//player one rolls five times
//total all five rolls then subtract from computers health
//computer rolls five times 
//total all five rolls then subtract from players health
//repeat til one person health hits zero
// link dice rolls to certain atk/damage

// console.log(damage);

// let roll6 = rollDie(6);//trashtalk roll have player roll at end of turn 




//clean up-ie reporting a winner

}

function rollDie(numberOfSides) {
	let randomNumber = Math.floor(Math.random() * numberOfSides) + 1;
	console.log('Your roll was a ' + randomNumber)
	return randomNumber;
    // document.getElementById(idOfElement).value = randomNumber;
}

// function accuracy(){				//unexpected token, check if logic is true also check if 
// 	let hit = rollDie(6);
// 		if(hit >==3==true);
// 		console.log("Your hit connected...")

// 		else(hit<==3);
// 		console.log("Your hit missed....")

//} 

//switch case here for players choice on attack


function chooseattack(player) {
	// debugger; 
	let choice = prompt(player + " please select attack type : Jab, Cross, Haymaker, Bodyshot, Uppercut");
	let damage = 0;
	if(choice != null){
			choice = choice.toLowerCase();
	}

	switch(choice){
		case"jab":
		damage = rollDie(4);
		// accuracy();

		console.log("Your jab did: " + damage)
		break;

		case"cross":
		damage = rollDie(8);
		// accuracy();
		console.log("Your cross did: " + damage)
		break;

		case"haymaker":
		damage = rollDie(10);
		// accuracy();
		console.log("Your haymaker did: " + damage)
		break;

		case"bodyshot":
		damage = rollDie(12);
		// accuracy();
		console.log("Your bodyshot did: " + damage)
		break;

		case"uppercut":
		damage = rollDie(20);
		// accuracy();
		console.log("Your uppercut did: " + damage)
		break;
		default:
		alert("Try again, that was not a valid attack")
		console.log(player + " please try again, that was not a valid attack");
		chooseattack(player);
		break;

	}
	return damage;
}
// function rollDamage(){

// 	let Uppercut = rollDie(20);
// 	let Bodyshot = rollDie(12);
// 	let Haymaker = rollDie(10);
// 	let Cross = rollDie(8);
// 	let Jab = rollDie(4);

// 	let damage = (Uppercut + Bodyshot + Haymaker + Cross + Jab);
// 	return damage;
// }
