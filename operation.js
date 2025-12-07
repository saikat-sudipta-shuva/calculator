//sum
document.getElementById('add')
.addEventListener('click',
     function(){
const firstDigit=document.getElementById('first-digit').value;
    const convertedfirstDigit=parseFloat(firstDigit);
const secondDigit=document.getElementById("second-digit").value;
    const convertedsecondDigit=parseFloat(secondDigit);
    //sum
     const sum=convertedfirstDigit+convertedsecondDigit;
    const recentSum= document.getElementById('results').innerText;
    convertedRecentSum = parseFloat(recentSum);
    document.getElementById('results').innerText=sum;
    }
)

//sub
document.getElementById('sub')
.addEventListener('click',
     function(){
const firstDigit=document.getElementById('first-digit').value;
    const convertedfirstDigit=parseFloat(firstDigit);
const secondDigit=document.getElementById("second-digit").value;
    const convertedsecondDigit=parseFloat(secondDigit);
    //sum
    const sum=convertedfirstDigit-convertedsecondDigit;
    const recentSum= document.getElementById('results').innerText;
    convertedRecentSum = parseFloat(recentSum);
    document.getElementById('results').innerText=sum;
    }
)
//mul
document.getElementById('mul')
.addEventListener('click',
     function(){
const firstDigit=document.getElementById('first-digit').value;
    const convertedfirstDigit=parseFloat(firstDigit);
const secondDigit=document.getElementById("second-digit").value;
    const convertedsecondDigit=parseFloat(secondDigit);
    //sum
    const sum=convertedfirstDigit*convertedsecondDigit;
    const recentSum= document.getElementById('results').innerText;
    convertedRecentSum = parseFloat(recentSum);
    document.getElementById('results').innerText=sum.toFixed(2);
    }
)

//div
document.getElementById('div')
.addEventListener('click',
     function(){
const firstDigit=document.getElementById('first-digit').value;
    const convertedfirstDigit=parseFloat(firstDigit);
const secondDigit=document.getElementById("second-digit").value;
    const convertedsecondDigit=parseFloat(secondDigit);
    //div
    if(convertedsecondDigit!==0){
        const sum=convertedfirstDigit/convertedsecondDigit;
        const recentSum= document.getElementById('results').innerText;
        convertedRecentSum = parseFloat(recentSum);
        document.getElementById('results').innerText=sum.toFixed(2);
    }
    else{
        alert('Can not divided by 0')
    }
    
    }
)

//reset
document.getElementById('reset')
.addEventListener('click',
    function(){
        document.getElementById('results').innerText='0.00';
        document.getElementById('first-digit').value=null;
        document.getElementById('second-digit').value=null;
        
    }
)