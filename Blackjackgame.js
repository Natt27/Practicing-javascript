Cards = []
Sum = 0
HasBlackjack = false
IsAlive = false
Message = ""

MessageEl = document.getElementById("message-el")
//console.log(MessageEl)
SumEl = document.getElementById("sum-el")
//SumEl = document.querySelector("#sum-el") //another way of selecting HTML element 
CardsEl = document.getElementById("cards-el")

Player = {
    name: "John",
    chips: 145
}
PlayerEl = document.getElementById("player-status")
PlayerEl.textContent = Player.name + ": $" + Player.chips

function GetRandomCard() {
    RandomNo = Math.floor(Math.random()*13) + 1
    if (RandomNo > 10) {
        return 10
    } 
    else if (RandomNo === 1) {
        return 11
    }
    else {
        return RandomNo
    }
}

function StartGame() {
    IsAlive = true
    FirstCard = GetRandomCard()
    SecondCard = GetRandomCard()
    Cards = [FirstCard, SecondCard]
    Sum = FirstCard + SecondCard
    
    RenderGame()
}
function RenderGame() {
    
    CardsEl.textContent = "Cards: "

    for (let i = 0; i < Cards.length; i++) {
        CardsEl.textContent += Cards[i] + " "
    }

    SumEl.textContent = "Sum: " + Sum

    if (Sum <= 20) {
        Message = "Do you want to draw a new card?"
    }
    else if (Sum === 21){
        Message = "you've got Blackjack!"
        HasBlackjack = true
    }
    else {
        Message = "You're out of the game!"
        IsAlive = false
    }
    MessageEl.textContent = Message
}
function NewCard() {
    if (IsAlive === true && HasBlackjack === false ) {
        Card = GetRandomCard()
        Sum += Card
        Cards.push(Card)
        RenderGame()
    }
} //3:58