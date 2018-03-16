$(document).ready(function()
{
    var number = 35;
    var right = 0;
    var wrong = 0;
    var blank = 7;
    $("input[type=radio]").on("change", function()
    {
        right = $("input[value=right]:checked").length;
        wrong = $("input[value=wrong]:checked").length;
        blank = (7 - right - wrong);
    });

    function run()
    {
        intervalId=setInterval(decrement, 1000);
    }

    function decrement()
    {
        number--;
        $("#timer").html("<h2>" + number + " seconds" + "</h2>");
        if(number === 0)
        {
            stop();
            $("#wrapper").hide(); 
            checkAnswer();
        }
        //check();
    }

    function stop()
    {
        clearInterval(intervalId);
    }

    $("#startGame").on("click", run);
    $("#startGame").on("click", function()
    {
        $("#wrapper").show();
        $(this).hide();
    });

    $("#doneButton").on("click", function()
    {
        stop();
        $("#wrapper").hide(); 
        checkAnswer();
    })

    function checkAnswer()
    {
        $("#results").append("Correct answers: "+ right);
        $("#results2").append("Wrong answer: " + wrong);
        $("#results3").append("Unanswered: "+ blank);    
    }

});