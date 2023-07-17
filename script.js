// random no 

let x = Math.floor((Math.random()*6)+1)
let y = Math.floor((Math.random()*6)+1)

document.querySelector(".img1").setAttribute("src",getRandomImage(x))
document.querySelector(".img2").setAttribute("src",getRandomImage(y))

checkResult(x,y);


function checkResult(x,y)
{
    if(x > y) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
    }

    else if (x < y) {
        document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
    }

    else {
        document.querySelector("h1").innerHTML = "Draw"
    }
}


function getRandomImage(x)
{
    if (x == 1)
    {
        img_path = "./images/dice1.png"
    }
    else if (x == 2)
    {
        img_path = "./images/dice2.png"
    }
    else if (x == 3)
    {
        img_path = "./images/dice3.png"
    }
    else if (x == 4)
    {
        img_path = "./images/dice4.png"
    } 
    else if (x == 5)
    {
        img_path = "./images/dice5.png"
    }
    else 
    {   
        img_path = "./images/dice6.png"
    }

    return img_path
}
