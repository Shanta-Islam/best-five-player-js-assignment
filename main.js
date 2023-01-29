const buttons = document.getElementsByClassName('select-btn');
for(const button of buttons){
    button.addEventListener('click', function(event){ 
        const ul = document.getElementById('playerList');
        const createList = document.createElement('li');
        createList.classList.add('list');
        createList.innerText = event.target.previousElementSibling.previousElementSibling.innerText;
        ul.appendChild(createList);

        if(ul.children.length <= 5){
            event.target.disabled  = true;
            event.target.style.backgroundColor = '#aba3a3';
        }
        else{
            ul.removeChild(createList);
            alert('cannot select more than five player');
        }

        // set this 'no player selected' display none
        const noPlayer = document.getElementById('noPlayerListMsg');
        noPlayer.style.display = 'none';
    })
}


function getInputValueById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputElementString = inputElement.value;
    if(isNaN(inputElementString)){
        alert ('please type number');
    }
    else{
        const inputElementNum = parseInt(inputElementString);
        return inputElementNum;
    }
}

function getElementValueById(elementId, newValue){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue;
}

document.getElementById('calculateBtn').addEventListener('click', function(){
    const ul = document.getElementById('playerList');
    const listCountInsideUl = ul.children.length;

    const perPlayerInput = getInputValueById('perPlayer');

    const totalCostCount = listCountInsideUl * perPlayerInput;

    getElementValueById('totalPlayerCost', totalCostCount);

})

document.getElementById('totalCostBtn').addEventListener('click', function(){
    const managerInput = getInputValueById('managerCost');

    const coachCostInput = getInputValueById('coachCost');

    const totalPlayer = document.getElementById('totalPlayerCost');
    const totalPlayerCostString = totalPlayer.innerText;
    const totalPlayerCost = parseInt(totalPlayerCostString);
   

    const totalCostCal = managerInput + coachCostInput + totalPlayerCost;

    getElementValueById('totalCost', totalCostCal);

})