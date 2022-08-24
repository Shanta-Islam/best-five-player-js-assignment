document.getElementById("calculateBtn").addEventListener("click", function () {
    const perPlayerCost = getValueFromInputField("perPlayer");
    const playerNumber = document.querySelectorAll("#playerList li");
  
    const totalPlayerCost = playerNumber.length * perPlayerCost;
    setValueInTextField("totalPlayerCost", totalPlayerCost);
  })
  document.getElementById("totalCostBtn").addEventListener("click", function () {
    const totalPlayerCost = getValueFromTextField("totalPlayerCost");
    const managerCost = getValueFromInputField("managerCost");
    const coachCost = getValueFromInputField("coachCost");
  
    const totalCost = totalPlayerCost + managerCost + coachCost;
    setValueInTextField("totalCost", totalCost);
  })