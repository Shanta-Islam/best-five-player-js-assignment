document.getElementById("calculateBtn").addEventListener("click", function () {
    const perPlayerCost = getValueFromInputField("perPlayer");
    const playerNumber = document.querySelectorAll("#playerList li");
  
    const totalPlayerCost = playerNumber.length * perPlayerCost;
    setValueInTextField("totalPlayerCost", totalPlayerCost);
  })