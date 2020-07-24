function printtime(){
    var monthnames = [
        'abc',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'Novermber',
        'December'
    ]
    var today = new Date();
    var hrs = today.getHours();
    if(Number(hrs)<10){
        hrs="0"+hrs;
    }
    var mins = today.getMinutes();
    if(Number(mins)<10){
        mins="0"+mins;
    }
    var sec = today.getSeconds();
    if(Number(sec)<10){
        sec="0"+sec;
    }
    var yrs = today.getFullYear();
    var month = today.getMonth();
    month = monthnames[Number(month)];
    var date = today.getDate();
    document.getElementById('time').innerHTML = hrs+":"+mins+":"+sec;
    document.getElementById('date').innerHTML = date+" "+month+" "+yrs;
    setTimeout(printtime, 500);
}
var number = 0;
function printquote(){
    var quotes = [
        'Never say Immposible.',
        'You only live once, but if you do it right, once is enough.',
        'Yesterday is not ours to recover, but tomorrow is ours to win or lose.',
        'Forget the failures. Time to move on.',
        'If you are happy, you will make others happy too.',
        'If opportunity does not knock, build a door.',
        'Sometimes later becomes never.'
    ]
    document.getElementById('quote').innerHTML=quotes[number];
    number=number+1;
    if(number==7){
        number=0
    }
    setTimeout(printquote, 10000);
}