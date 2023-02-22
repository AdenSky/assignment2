var coinFlip=Math.round(Math.random());
var choice=prompt("Please select Heads or Tails");
var result;

if(coinFlip==1){
    result="Heads";
}else if(coinFlip==0){
    result="Tails";
}



if(coinFlip<choice){
    if(result=="Heads"){
        alert("The flip was heads and you chose heads...you win!")
    }else if(result=="Tails"){
        alert("The flip was heads but you chose tails...you lose!")
    }
}
if(coinFlip>choice){
    if(result=="Heads"){
       alert("The flip was tails but you chose heads...you lose!") 
    }else if(result=="Tails"){
        alert("The flip was tails but you chose tails...you win!")
    }
}