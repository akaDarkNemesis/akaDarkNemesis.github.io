function loophole(){
    var num1 = document.getElementById('start').value;
    var num2 = document.getElementById('stop').value;
    if(
        Number(num1)>Number(num2)
    ){
        alert('First Number Should be Smaller or Equal to Second Number');
        return false;
    }
    document.getElementById('print').innerHTML="";
    var option = document.getElementById('numbers').value;
    if( option=="all"
        ){
            for (let i=num1; i<=num2; i++){
                document.getElementById('print').innerHTML = document.getElementById('print').innerHTML + " " + i;
            }
        }
        if( option=="even"){
            if(num1%2==1){
                num1++;
            }
            for (let i=num1; i<=num2; i=Number(i) + Number(2)){
                document.getElementById('print').innerHTML = document.getElementById('print').innerHTML + " " + i;
            }
        }
        if(option=="odd"){
            if(num1%2==0){
                num1++;
            }
            for (let i=num1; i<=num2; i=Number(i) + Number(2)){
                document.getElementById('print').innerHTML = document.getElementById('print').innerHTML + " " + i;
            }
        }
}