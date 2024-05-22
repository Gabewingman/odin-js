function getComputedChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    prompt ("Rock, Paper or Sciccor?");
    let decide = ["Rock","Paper","Scissor"];

    if (getHumanChoice === "Rock") {
        console.log("Paper");
    } else if (getHumanChoice === "Paper") {
        console.log("Scissor");
    } 
}

console.log (getHumanChoice());