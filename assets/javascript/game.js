//variables
//================================================================

//all the questions and their answers
var questions=[{
	question:"Where Does 'The Lion King' Take Place?",
	choices:["Africa","Pallet Town", "Neverland", "Atlantis"],
	correctAnswer:0,
}, {
	question:"What Is The Age Of Ariel In The Little Mermaid?",
	choices:[13,15,16,18],
	correctAnswer:2,
}, {
	question:"Aladdin Is Also Known As...?",
	choices:["Jaffar","The Genie", "Raja", "The Diamond In The Rough"],
	correctAnswer:3,
}, {
	question:"What Is The Name Of The Famous Male Mouse In Disney?",
	choices:["Goofy", "Mickey", "Minnie", "Pluto"],
	correctAnswer:1,
}, {
	question:"Why Does Sebastian Think Ariel Should Stay 'Under The Sea'?",
	choices:["Up on the shore they work all day Out in the sun they slave away", "Down here all the fish is happy. And soft through the waves they roll", "Nobody beat us fry, us and eat us","All Of The Above"],
	correctAnswer:3,
}];

//tracks which question selected on
var currentQuestion=0;
//Array Containing User Choices
var selections=[];
//tracks the number of correct answers
var correctAnswers=0;
//tracks the number of wrong answers
var wrongAnswers=0;
//boullion 
var quizOver=false;
var choseWrong=false;

//tracks

//debugging
for(let i=0; i<questions.length; i++){
console.log(questions[i]);
};
var timer= {	
	time:10,
	restart: function(){
		$("#timer").html("00:00");
	},
	start: function(){
		$("#timer").html("01:00");
		myTimer=setInterval(timer.count,1000)	
	},
	stop: function(){
		clearInterval(myTimer);
	},
	count: function(){
		timer.time--;
		var converted = timer.timeConverter(timer.time);
		$("#timer").html(converted);
		//if timer is up.
		if(timer.time==00){
			timer.time=10;
			timer.stop()
			timesUp();
		};
	},
	//Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
	timeConverter: function(t){
		var minutes = Math.floor(t/60);
		var seconds = t - (minutes * 60);
		if (seconds<10){
			seconds="0" + seconds;
		}
		if (minutes===0){
			"00";
		}
		else if (minutes<10){
			minutes ="0" + minutes;
		}
		//"0" temporary fix for formatting
		return minutes + "0:" + seconds;
	}
};


//Functions
//================================================================
function displayCurrentQuestion(){
	var chosenQuestion;
	var choice;
	//gets question...!!!!! so I kind of f-ed up this part
	for(i=0; i<questions.length;i++){
		chosenQuestion=questions[i].question;
		$("#questionDisplay").html(chosenQuestion);
		//displays question onto question Display div so I kind of f-ed up this part
		for(i=0;i<questions[i].choices.length;i++){
			choice=questions[i].choices[i];
			$('<li><input type="radio" value=' + i + ' name="dynradio"/> &nbsp;' + choice + '</li>').addClass("answerRadio").appendTo("#choiceDisplay");
		}
		//regisiters click on radio button
		$(".answerRadio").on("click", function(){
		//sets the value of the radio button checked to a variable.
			var choice = $('input[name="dynradio"]:checked').val()
			$("#nextButton").show();
			//compares to see if the answer is correct or not	
			if(choice==questions[i].correctAnswer){
				choseWrong=false;
				correctAnswers++;
				console.log("Correct: "+ correctAnswers);
			} else{
				choseWrong=true
				wrongAnswers++;
				console.log("Wrong: " + wrongAnswers);
			}

		});
	}
	

	//debuggin
	console.log(chosenQuestion);
	console.log(choice);
};



//function nextQuestion(){}

//What shows up when time is Up
function timesUp (){
	$("#timer").html("00:00");
	$("#questionDisplay").html("Sorry You're Out Of Time");
	$("#choiceDisplay").html(" ");
	$("#replayButton").show();
	$("#nextButton").hide();
	quizOver=true;
};

//Function to reset board.
function reset(){
	$("#timer").html("01:00");
	$("#questionDisplay").html("");
	$("#choiceDisplay").html(" ");
	displayCurrentQuestion();
	timer.stop();//something wrong with timer after reset board.

};


//Game Play
//================================================================
$(document).ready(function(){
	$("#nextButton").hide();
	$("#replayButton").hide();
	//display the first question
	$("#play").on("click", function(){
		displayCurrentQuestion();
		timer.start();
	});
	//when replay button is clicked;
	$("#replayButton").on("click", function(){
		reset();
		//hides replay button when clicked
		$("#replayButton").hide();
		timer.start();
	});
	$("#nextButton").on("click", function(){
		//hides next button when clicked
		$("#nextButton").hide();
		//nextQuestion();
	});
});









