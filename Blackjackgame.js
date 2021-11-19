FirstCard = 10
SecondCard = 7
Sum = FirstCard + SecondCard
HasBlackjack = false
IsAlive = true
Message = ""

MessageEl = document.getElementById("message-el")
console.log(MessageEl)

function StartGame() {
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