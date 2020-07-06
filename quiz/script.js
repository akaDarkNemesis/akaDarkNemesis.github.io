function printscore(){
    function getscore(answer){
        var radiob = document.getElementsByName(answer);
        if(radiob[0].checked){
            return Number(radiob[0].value);
        }
        if(radiob[1].checked){
            return Number(radiob[1].value);
        }
        if(radiob[2].checked){
            return Number(radiob[2].value);
        }
    }
    var name= document.getElementById('namefield').value;
    if(
        name == ""
    ){
        alert("Please Enter Your Name!");
        return false;
    }
    if(
        document.getElementById('q1a1').checked==false && document.getElementById('q1a2').checked==false && document.getElementById('q1a3').checked==false
    ){
        alert("Question 1 has not been answered!");
        return false;
    }
    if(
        document.getElementById('q2a1').checked==false && document.getElementById('q2a2').checked==false && document.getElementById('q2a3').checked==false
    ){
        alert("Question 2 has not been answered!");
        return false;
    }
    if(
        document.getElementById('q3a1').checked==false && document.getElementById('q3a2').checked==false && document.getElementById('q3a3').checked==false
    ){
        alert("Question 3 has not been answered!");
        return false;
    }
    if(
        document.getElementById('q4a1').checked==false && document.getElementById('q4a2').checked==false && document.getElementById('q4a3').checked==false
    ){
        alert("Question 4 has not been answered!");
        return false;
    }
    if(
        document.getElementById('q5a1').checked==false && document.getElementById('q5a2').checked==false && document.getElementById('q5a3').checked==false
    ){
        alert("Question 5 has not been answered!");
        return false;
    }
    var score = getscore('answer1') + getscore('answer2') + getscore('answer3') + getscore('answer4') + getscore('answer5');
    document.getElementById('finalscore').innerHTML= name+ " We found that your total is " +score;
}

function alertbox(){
    alert("Hey There! Try out this amazing quiz");
}