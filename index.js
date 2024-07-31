

function rolldice(){
    const numberOfDiceInput = document.getElementById("numberOfDice");
    const numberOfDice = parseInt(numberOfDiceInput.value, 10); 
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");

    const diceResults = [];
    const diceImages = [];

    if (numberOfDice > 6 || numberOfDice < 1){
        diceResult.textContent = "Number not valid, it has to be 1-6";
    }else{
        diceResult.textContent = "";
        for (let i = 0; i < numberOfDice ; i++){
            let randomNum = Math.floor(Math.random() * 6) + 1;
            diceResults.push(randomNum);
            diceImages.push(`<img src="folderDiceImg/dice-six-faces-${randomNum}.svg" alt="dice value: ${randomNum}">`);
        }
        diceResult.textContent = `${diceResults.join(", ")}`;
        diceImg.innerHTML = diceImages.join("");
    }
}