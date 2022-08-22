

let cards = []
let Sum =  0
let msg = ""
let imLiv = false
let hasBlack = false





let a = document.getElementById('box')
let b = document.getElementById('cards')
let c = document.getElementById('sum')
let d = document.querySelector("#bns")
let v = document.querySelector("#rslt")
let n = document.querySelector("#bns2")
let x = document.querySelector("#ccv")


                    let player = {

                        chips : getRandom() * 100  ,
                        name : "Hossam, "

                    }

                     x.textContent += player.name + "  "+ player.chips



////////////////////


function startGame() {

    
    reset()

    if ( imLiv === false && hasBlack === false) {

    let firstCard = getRandom()
    let secondCard = getRandom()
    Sum =  firstCard + secondCard
    cards.push(firstCard,secondCard)
    imLiv = true
   

            if ( Sum < 21)  { msg = "PicK  CarD" } 

                else if ( Sum === 21)   {msg = " you WON " , hasBlack === true} 

                else if (Sum > 21)  {msg = "LOOOOSER" , imLiv === false}


    a.textContent += msg + " "
    c.textContent += Sum
    b.textContent += cards

                if ( Sum === 21){
                    player.chips += 100
                    x.textContent = "Player's Stats : " + player.name + player.chips
                } else if (Sum > 21){
                    player.chips -= 100
                    x.textContent = "Player's Stats : " + player.name + player.chips
                }


             



    
}
}
//////////////////////////////////



function newCard(){

    

    if( imLiv === true && hasBlack === false){

let extra = getRandom()
    cards.push(extra)
    Sum += extra
    c.textContent =  "Sum : " +Sum
    d.textContent += extra + ","
    n.textContent += cards + ","
    b.textContent += "," + extra
    cards = []

                    if (Sum > 21){ v.textContent+= "LOST" , imLiv = false }
                    
                    else if ( Sum < 21){v.textContent+="PICK , "}

                    else if (Sum === 21) {v.textContent += "WINNER", hasBlack = true }

                                setStats()


                        }
    


}

//////////////////////////////////////////



function setStats(){


                    if (imLiv === false){
                        player.chips -= 100
                        x.textContent = "Player's Stats : " + player.name + player.chips
                        }else if 
                        (hasBlack === true){
                    player.chips += 100
                        x.textContent = "Player's Stats : " + player.name + player.chips
                        }

                        if (player.chips === 0){
                            alert("BROKE")
                            
                        }


}

/////////////////////////////////////////////

function reset(){


     


                msg = ""
                secondCard = 0
                firstCard = 0
                extra = 0
                cards= []
                a.textContent = " Your Result : "
                b.textContent = "Your Cards :"
                c.textContent = "Sum :"
                d.textContent = "Extra Card :"
                v.textContent = "Your Result After Drawing :"
                n.textContent = "ALL Cards : "
                Sum = 0
                imLiv = false
                hasBlack = false
                






}

///////////////////////////////

function getRandom(){


let rando = Math.floor(Math.random()*13)

                    if (rando > 10){
                        return 10
                    } else if ( rando === 1 ){
                        return 11
                    } else 
                        return rando

 

}





