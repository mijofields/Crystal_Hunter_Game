			//make this game out of objects

	

	var game = {

	crystals: 	["blue","red","yellow","purple"],

	crystalValues: [],

	targetScore: function targetScore (min, max) {  // random number in min, max range inclusive

	min = Math.ceil(19);
	max = Math.floor(120);
			  
	target = (Math.floor(Math.random() * (max - min + 1)) + min); //needs to be stored in a variable dummy
	console.log("target score " + target);


	}, //end of targetScore ()

	crystalValue: function crystalValue (min, max) {  // random number in min, max range inclusive


		min = Math.ceil(1);
		max = Math.floor(12);


		for (i=0; this.crystalValues.length < this.crystals.length; i++){

		randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
		this.crystalValues.push(randomValue);
		this.crystalValues = $.unique(this.crystalValues);}}, // end of crystalValues array build

		
	valueAssign: function (crystalid){

			game.crystalValue();

			// var id = this.crystals;
			// console.log(id);
			// var selector = '"#'+crystalid+'"';
		
			// console.log(selector);

			this.crystals.forEach(function(crystalid){



			$("#"+crystalid).attr("data-value",this.crystalValues[i])});
	


		// this.crystals.forEach(function(crystalid){

		// 	// var id = this.crystals;
		// 	// console.log(id);
		// 	// var selector = '"#'+crystalid+'"';
		// 	console.log(crystalid);
		// 	// console.log(selector);


		// 	$("#"+crystalid).attr("data-value",this.crystalValues[i])});
			


			// var CrystalClass = $("<img>"+this.crystals[i][1]);
			// CrystalClass.atrr("data-value", crystalValues[i]);





		

			}, //valueAssign()



	playerScore: 0,

	wins: 0,

	losses: 0

			} // end of game object

			game.crystalValue(); // call functions or values are not generated
			game.targetScore();
			
			console.log("game crystals arr " + game.crystals);
			console.log("player score " + game.playerScore);
			console.log("game wins " + game.wins);
			console.log("game losses " + game.losses);
			console.log("crystal values arr " + game.crystalValues); //pull the value of the random array


			