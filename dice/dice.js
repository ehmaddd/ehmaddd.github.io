function run(){
    let random1 = Math.ceil(Math.random()*6);
    let random2 = Math.ceil(Math.random()*6);
    
    let dice1 = "./images/dice"+random1+".png";
    let dice2 = "./images/dice"+random2+".png";
    document.querySelector(".img1").setAttribute("src", dice1);
    document.querySelector(".img2").setAttribute("src", dice2);

    let flag = "./images/flag.png";
    if(random1>random2){
        document.querySelector("#player1").setAttribute("src", flag);
        document.querySelector("h1").innerText = "Player1 Wins";
    }
    else if(random1<random2){
        document.querySelector("h1").innerText = "Player2 Wins";
        document.querySelector("#player2").setAttribute("src", flag);
    }
    else {
        document.querySelector("h1").innerText = "Tie";
        document.querySelector("h1").style.display = "block";
    }
}