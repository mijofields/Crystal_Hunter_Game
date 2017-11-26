			//make this game out of objects

	

	var game = {

	crystals: 	["blue","red","yellow","purple"],

	crystalValues: [],

	targetScore: function targetScore (min, max) {  // random number in min, max range inclusive

	min = Math.ceil(19);
	max = Math.floor(120);
			  
	target = (Math.floor(Math.random() * (max - min + 1)) + min); //needs to be stored in a variable dummy
	console.log("target score " + target);
	$("#target").text("Target Score: "+target);

	}, //end of targetScore ()

	crystalValue: function crystalValue (min, max) {  // random number in min, max range inclusive


		min = Math.ceil(1);
		max = Math.floor(12);


		for (i=0; this.crystalValues.length < this.crystals.length; i++){

		randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
		this.crystalValues.push(randomValue);
		this.crystalValues = $.unique(this.crystalValues);}}, // end of crystalValues array build

		
	valueAssign: function (){

			game.crystalValue();

			console.log("crystal values "+ this.crystalValues);
			// crystalValues = this.crystalValues // because console.log(this) in the next function gives window. a function within a function goes to window

			console.log(this.crystals);

			for (i=0; i < this.crystals.length; i++){

				$('#'+this.crystals[i]).attr("data-value", this.crystalValues[i])



			};

			
	}, 

	playerScore: 0,

	wins: 0,

	losses: 0

			} // end of game object

			// game.crystalValue(); // call functions or values are not generated
			game.targetScore();

			game.valueAssign();

			
			console.log("game crystals arr " + game.crystals);
			console.log("player score " + game.playerScore);
			console.log("game wins " + game.wins);
			console.log("game losses " + game.losses);
			console.log("crystal values arr " + game.crystalValues); //pull the value of the random array


			