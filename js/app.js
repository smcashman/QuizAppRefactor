$(document).ready(function() {
	//question object arrays 

   
    const Questions = [{
            "image": "images/ImpressionSunrise.png",
            "options": ["Claude Monet", "Vincent Van Gogh", "Peter Paul Rubens", "Jackson Pollock"],
            "correctOption": "Claude Monet"
        },

        {
            "image": "images/barfoliesbergeres.png",
            "options": ["Childe Hassam", "Claude Monet", "Camille Pissarro", "Edouard Manet"],
            "correctOption": "Edouard Manet"
        },

        {
            "image": "images/bathersasnieres.jpg",
            "options": ["Camille Pissarro", "Georges Seurat", "Thomas Cole", "Paul Signac"],
            "correctOption": "Georges Seurat"
        },

        {
            "image": "images/starrynight.jpg",
            "options": ["Andy Warhol", "Childe Hassam", "Vincent Van Gogh", "Auguste Renoir"],
            "correctOption": "Vincent Van Gogh"
        },

        {
            "image": "images/boatingparty.jpg",
            "options": ["Edouard Manet", "Auguste Renoir", "Peter Paul Rubens", "Georges Seurat"],
            "correctOption": "Auguste Renoir"
        }
    ]

    let Correct = 0
    let CurrentQuestion = 0
    let RemainingQuestions = 4

    function AskQuestion() {
        $(".QuizContainer").append("<div class = 'singlequestion'><img src='" + Questions[CurrentQuestion].image + "'><div class='buttonwrapper'></div></div>")
        for (i = 0; i < Questions[CurrentQuestion].options.length; i++) {
            //$(".imageContainer").append("<div class='" +Questions[i].number+ "'> <img src='" +Questions[i].image+"'><div class='questionWrapper'></div></div>");
            //var QuestionsHTML = ""
            //$.each(Questions[i].options, function (index,value) {
            //$(".questionWrapper").append("<button>"+value+"</button>");
            //});

            $(".buttonwrapper").append("<button class='Questions'>" + Questions[CurrentQuestion].options[i] + "</button>")

            //$("button").click(function()
            $("button").off('click').on('click', function() {
                $(this).parent(".buttonwrapper").parent(".singlequestion").hide();
                const AnswerClicked = $(this).text()

                //if user is on last question, results show next//

                if (RemainingQuestions < 1) {
                	if (AnswerClicked == Questions[CurrentQuestion].correctOption) {
                	Correct++
                	$(".NumberCorrect").html(Correct);
                	$(this).parent(".singlequestion").hide()  
                }
               
                $(".counterbox").hide();
                 	
               	$(".scorewrapper").append("<h1 class='finalscore'>You scored "+Correct+" out of 5!</h1>")

                    if (Correct >=4) {
                    	$(".scorewrapper").append("<h2 class ='scoreStatement'> Monet would be proud. </h2>")
                    }
                    if (Correct <=3 && Correct > 2) {
                    	$(".scorewrapper").append("<h2 class ='scoreStatement'> Well, you're not the worst. </h2>")
                    }
                    if (Correct <= 2) {
                    	$(".scorewrapper").append("<h2 class ='scoreStatement'> You should go visit a museum. </h2>")
                    }
                    
                $(".QuizContainer").append("<p class='galleryhead'> Click on the image to learn more about the artist</p>");
                $(".QuizContainer").append("<div class = gallery><a href='https://en.wikipedia.org/wiki/Claude_Monet'><img class='thumbnail' src='images/ImpressionSunrise.png'></a></div>");
                $(".QuizContainer").append("<div class = gallery><a href='https://en.wikipedia.org/wiki/%C3%89douard_Manet'><img class='thumbnail' src='images/barfoliesbergeres.png'></a></div>");
                $(".QuizContainer").append("<div class = gallery><a href='https://en.wikipedia.org/wiki/Georges_Seurat'><img class='thumbnail' src='images/bathersasnieres.jpg'></a></div>");
                $(".QuizContainer").append("<div class = gallery><a href='https://en.wikipedia.org/wiki/Vincent_van_Gogh'><img class='thumbnail' src='images/starrynight.jpg'></a></div>");
                $(".QuizContainer").append("<div class = gallery><a href='https://en.wikipedia.org/wiki/Pierre-Auguste_Renoir'><img class='thumbnail' src='images/boatingparty.jpg'></a></div>");
                   
 				$(".QuizContainer").append("<div class = 'gameover'><h4>Start a new game?</h4></div>");
                $(".QuizContainer").append("<button class='restart'>Restart</button>");
                    
                    $(".restart").click(function(){
                    	$(this).remove();
                    	 Correct = 0
    					 CurrentQuestion = 0
    					 RemainingQuestions = 4
    					$(".questionNumber").html(CurrentQuestion + 1);
                        $(".NumberCorrect").html(Correct);
                        $(".NumberRemaining").html(RemainingQuestions);
                        $(".scoreStatement").hide();
                        $(".gameover").hide();
                        $(".galleryhead").hide();
                        $(".gallery").hide();
                        $(".finalscore").hide();
    					AskQuestion();

                    });

                } else {
                    if (AnswerClicked == Questions[CurrentQuestion].correctOption) {
                        Correct++
                        CurrentQuestion++
                        RemainingQuestions--
                        $(".questionNumber").html(CurrentQuestion + 1);
                        $(".NumberCorrect").html(Correct);
                        $(".NumberRemaining").html(RemainingQuestions);
                        console.log("correct");
                    } else {
                        console.log("nope");
                        CurrentQuestion++
                        RemainingQuestions--
                        $(".questionNumber").html(CurrentQuestion + 1);
                        $(".NumberCorrect").html(Correct);
                        $(".NumberRemaining").html(RemainingQuestions);
                        //return false;
                    }

                    AskQuestion();

                }




            });

        }

    }

    AskQuestion();

   




    $(".1").hide();

});