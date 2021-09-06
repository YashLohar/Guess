let secrertNumber=Math.trunc(Math.random()*20+1);
let score=20;
let highScore=0;


document.querySelector(".check").addEventListener("click",function(){

    let guess= Number(document.querySelector(".guess").value);

    if(!guess){
        document.querySelector(".message").textContent="⛔️ No number!";
    }
    else if(guess===secrertNumber){
        document.querySelector(".number").textContent=secrertNumber;
        document.querySelector(".message").textContent="🎉 Correct Number!";

        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";

        if(score > highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }
    }
    else if(guess !== secrertNumber){
             if(score > 1){
                if(guess > secrertNumber){
                    document.querySelector(".message").textContent="📈 Too high!'";
                    score--;
                    document.querySelector(".score").textContent=score;
                }
                else{
                    document.querySelector(".message").textContent="📉 Too low!";
                    score--;
                    document.querySelector(".score").textContent=score;
                }
             }
             else{
                document.querySelector(".message").textContent="💥 Lost the game";  
                document.querySelector(".score").textContent=0;
            }
    }
        
});

document.querySelector(".again").addEventListener("click",function(){
    document.querySelector(".message").textContent="Start guessing...";
    score=20;
    document.querySelector(".score").textContent=score;
    document.querySelector(".highscore").textContent=0;
    document.querySelector(".number").textContent="?";


    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
});