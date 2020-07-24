function printvalue(digit){
    document.getElementById('calculator').value= document.getElementById('calculator').value +digit;
    }
function allclear(){
    document.getElementById('calculator').value="";
}
function calculateresult(){
    let calculate = document.getElementById('calculator').value;
    let result = eval(calculate);
    document.getElementById('calculator').value= result;
}