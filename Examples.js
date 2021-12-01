//Object
Person = {
    name: "Natty",
    age: 23,
    country: Ethiopia,
}

//Function
    function logData() {
        console.log(Person.name + " is " + Person.age + " years old and lives in " + Person.country)
    }
logData()

//If else statement
Age =15
if (Age < 6) {
    console.log("Free")
} else if (Age >= 6 && Age < 17) { //else if (Age < 18)
    console.log("Child discount")
} else if (Age >= 18 && Age < 26) { //else if (Age < 27)
    console.log("Student discount")
}else if (Age >= 27 && Age < 66) { //else if (Age < 67)
    console.log("Full price")
} else {
    console.log("Senior citizens discount")
}

//For loop
LargeCountry = ["China", "India", "USA", "Indonesia", "Pakistan",]
for (let i = 0; index < LargeCountry.length; index++) {
    console.log("The 5 largest countries in the world:")
    console.log("- " + LargeCountry[i])
}

//Rock, Paper, Scissor game
Hands = ["Rock", "Paper", "Scissor"]
function winner() {
    RandomHand = Math.floor(Math.random() * 3)
    return Hands[RandomHand]
}
console.log(winner())