function findscore(){
    var number1 = document.getElementById('1').value;
    var number2 = document.getElementById('2').value;
    var operation3 = document.getElementById('inputGroupSelect01').value
    var answer
    if(
        number1 == ""
    ){
        document.getElementById('title').innerHTML="Please give the first value!";
        return false;
    }
    if(
        number2 == ""
    ){
        document.getElementById('title').innerHTML="Please give the second value!";
        return false;
    }
    if(operation3=='+'){
        answer = Number(number1) + Number(number2);
        document.getElementById('title').innerHTML=answer;
    }
    else if(operation3=='-'){
        answer= Number(number1) - Number(number2);
        document.getElementById('title').innerHTML=answer;
    }
    else if(operation3=='x'){
        answer= Number(number1) * Number(number2);
        document.getElementById('title').innerHTML=answer;
    }
    else{
        if(number2=='0'){
            document.getElementById('title').innerHTML="The second digit can't be 0 in division!";
            return false;
        }
        answer= Number(number1)/Number(number2);
        document.getElementById('title').innerHTML=answer;
    }
}