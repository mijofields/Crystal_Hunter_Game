			//make this game out of objects

	

	var game = {

	crystals: ["blue", "red", "yellow", "purple"],
	crystalValues: [],

	targetScore: function targetScore (min, max) {  // random number in min, max range inclusive

	min = Math.ceil(19);
	max = Math.floor(120);
			  
	console.log(Math.floor(Math.random() * (max - min + 1)) + min);


	}, //end of targetScore ()

	crystalValue: function crystalValue (min, max) {  // random number in min, max range inclusive


		min = Math.ceil(1);
		max = Math.floor(12);


		for (i=0; this.crystalValues.length < this.crystals.length; i++){

		randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
		this.crystalValues.push(randomValue);
		this.crystalValues = $.unique(this.crystalValues);

		}
		}, //end of crystalValue


	playerScore: 0,

	wins: 0,

	losses: 0

			}


			
			console.log(game.crystals);
			console.log(game.targetScore()); // why do I need to add these to cause the console.log in the function to work?
			console.log(game.crystalValue()); // why do I need to add these to cause the console.log in the function to work?
			console.log(game.playerScore);
			console.log(game.wins);
			console.log(game.losses);
			console.log(game.crystalValues);


			