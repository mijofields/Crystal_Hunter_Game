			//make this game out of objects

	

	var game = {

	crystals: 	["blue","red","yellow","purple"],

	crystalValues: [],

	target: 0,

	targetScore: function targetScore (min, max) {  // random number in min, max range inclusive

	min = Math.ceil(19);
	max = Math.floor(120);
			  
	target = (Math.floor(Math.random() * (max - min + 1)) + min); //needs to be stored in a variable dummy
	game.target = target;
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

			// crystalValues = this.crystalValues // because console.log(this) in the next function gives window. a function within a function goes to window

			for (i=0; i < this.crystals.length; i++){

				$('#'+this.crystals[i]).attr("data-value", this.crystalValues[i])



			};


    	},


    newGame: function() {







    },


			 

	playerScore: 0,

	wins: 0,

	losses: 0,


	newGame: function(){


    		game.crystalValues=[];
    		game.playerScore=0;
    		game.crystalScore=0;
    		game.targetScore();
    		game.valueAssign();
    		$("#score").text("Current Score: " + game.playerScore);
    		$("#button").removeClass("active").addClass("disabled");
    		$("#warning").text("");


	},	



	gameFlow: function(){



		this.targetScore();
		this.valueAssign();


			$(".img-crystal").on("click", function() {

    		var crystalScore = ($(this).attr("data-value"));
    		crystalScore = parseInt(crystalScore);


    		if(game.playerScore > game.target){

    		

    		} else if (game.playerScore + crystalScore > game.target){

    			game.playerScore += crystalScore;
    			$("#score").text("Current Score: " + game.playerScore);    			
    			game.losses++;    			
    			$("#losses").text("Losses: "+ game.losses);
    			$("#warning").text("You lose, click New Game to play again.");
    			$("#button").removeClass("disabled").addClass("active");
    			$("#button").on("click", game.newGame);


    			
    			   			

    		}else if(game.playerScore + crystalScore === game.target){

    			game.playerScore += crystalScore;
    			$("#score").text("Current Score: " + game.playerScore);
    			$("#warning").text("Holy math! You win Batman! Click New Game to play again.");
    			game.wins++;
    			$("#wins").text("Wins: " + game.wins);
    			$("#button").removeClass("disabled").addClass("active");
    			$("#button").on("click", game.newGame);


    		}else{

    		game.playerScore += crystalScore;
    		$("#score").text("Current Score: " + game.playerScore);


    		}

    		});






	}, //end of game flow

			} // end of game object

			
			game.gameFlow();



			