var num = prompt("enter a number");
var digit=num;

function factorial(num){
    while(num!==0){
        if(num !==1){
            digit= digit*(num-1);
           
            
        }
        num = num - 1; 
    }
    console.log(digit);
    
}

factorial(num);
