function getPlayerName(elementId) {
    const playerName = document.getElementById(elementId).innerText;
    return playerName;
  }
  
  function setPlayerName(playerName, btnId) {
    const playerNumber = document.querySelectorAll("#playerList li");
    if (playerNumber.length <= 4) {
      const msgElement = document.getElementById("noPlayerListMsg");
      msgElement.classList.add("hidden");
      const ul = document.getElementById("playerList");
      const li = document.createElement("li");
      li.innerText = playerName;
      ul.appendChild(li);
      const btnDisable = document.getElementById(btnId);
      btnDisable.classList.remove("button-color");
      btnDisable.classList.add("cursor-not-allowed", "bg-gray-500");
      btnDisable.disabled = "true";
    }
    else {
      alert("player");
    }
  }
  function getValueFromInputField(inputId) {
    const valueString = document.getElementById(inputId).value;
    if (!/\D/.test(valueString)) {
      const inputValue = parseFloat(valueString);
      return inputValue;
    }
  }
  
  
  function getValueFromTextField(inputId) {
    const valueString = document.getElementById(inputId).innerText;
    const inputValue = parseFloat(valueString);
    return inputValue;
  }
  
  function setValueInTextField(inputId, newText) {
    let getField = document.getElementById(inputId);
    if (isNaN(newText)) {
      getField.innerText = '0000';
    }
    else if (newText === 0) {
      getField.innerText = '0000';
    }
    else {
      getField.innerText = newText;
    }
  }  