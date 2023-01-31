function run(){
    let random1 = Math.ceil(Math.random()*6);
    let random2 = Math.ceil(Math.random()*6);
    
    let dice1 = "./images/dice"+random1+".png";
    let dice2 = "./images/dice"+random2+".png";
    document.querySelector(".img1").setAttribute("src", dice1);
    document.querySelector(".img2").setAttribute("src", dice2);

    if(random1>random2){
        document.querySelector("h1").innerHTML = "<i class='fa fa-flag' aria-hidden='true'></i> Player1 Wins!";
    }
    else if(random1<random2){
        document.querySelector("h1").innerHTML = "Player2 Wins! <i class='fa fa-flag' aria-hidden='true'></i>";
    }
    else {
        document.querySelector("h1").innerText = "Draw!!!";
    }
}