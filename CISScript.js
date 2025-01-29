function commanderButtonFunction(event) {
  const imageSrc = event.target.closest('button').getAttribute('data-image');

  const imageContainer = document.getElementById('unit-card-display');

  imageContainer.innerHTML = '';

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = 'Commander Image';
  img.classList.add('selected-image');
  imageContainer.appendChild(img);
}

function onPlusButtonClick(event) {
  const buttonId = event.target.id;
  
  alert(`You clicked the button with ID: ${buttonId}`);

  const selectedImageContainer = document.getElementById("added-units");

  if (buttonId === "add-dooku") {
    selectedImageContainer.innerHTML = '<img src="Pictures/CountDookuUnitCard.jpg" alt="Count Dooku">';
  } else if (buttonId === "button-plus-2") {
    selectedImageContainer.innerHTML = '<img src="Pictures/GeneralGrievousUnitCard.jpg" alt="General Grievous">';
  }
}

window.onload = function() {
  const commanderButtons = document.querySelectorAll('.commander-button');
  commanderButtons.forEach(button => {
    button.addEventListener('click', commanderButtonFunction);
  });

  const plusButtons = document.querySelectorAll('.circle-button');
  plusButtons.forEach(button => {
    button.addEventListener('click', onPlusButtonClick);
  });
};


function splitUpgrades(upgradeList){
  const unitUpgradeSplitList = upgradeList.split(",");
  return unitUpgradeSplitList;
}

function separatistUnits(buttonContainer,unit){
  const unitButtonContainer = document.createElement('div');
  unitButtonContainer.classList.add('button-container');

  const commanderButton = document.createElement('button');
  commanderButton.classList.add('button', 'commander-button');
  commanderButton.setAttribute('data-image', `${unit.unitcard_image}`);
  commanderButton.setAttribute('data-name', unit.name);
  commanderButton.setAttribute('data-description', unit.description);
  commanderButton.setAttribute('data-points', unit.points);

  const buttonText = document.createElement('span');
  buttonText.classList.add('button-text');
  buttonText.textContent = unit.name;
  commanderButton.appendChild(buttonText);

  const buttonImage = document.createElement('img');
  buttonImage.src = `${unit.toy_image}`;
  buttonImage.alt = unit.name;
  buttonImage.classList.add('button-image');
  commanderButton.appendChild(buttonImage);

  const addButton = document.createElement('button');
  addButton.classList.add('button', 'circle-button');
  addButton.id = `add-${unit.id}`;
  addButton.textContent = '+';

  addButton.setAttribute('data-name', unit.name);
  addButton.setAttribute('data-description', unit.description);
  addButton.setAttribute('data-points', unit.points);

  unitButtonContainer.appendChild(commanderButton);
  unitButtonContainer.appendChild(addButton);

  buttonContainer.appendChild(unitButtonContainer);

  commanderButton.addEventListener('click', () => {
    const unitCardImage = commanderButton.getAttribute('data-image');
    const unitName = commanderButton.getAttribute('data-name');
    const unitDescription = commanderButton.getAttribute('data-description');
    const unitPoints = commanderButton.getAttribute('data-points');

    const unitCardDisplay = document.getElementById('unit-card-display');

    const unitImage = document.createElement('img');
    unitImage.src = unitCardImage;
    unitImage.alt = unitName;
    unitImage.classList.add('unit-card-image');

    unitCardDisplay.innerHTML = '';
    unitCardDisplay.appendChild(unitImage);
  });


  addButton.addEventListener('click', () => {
    const unitDetailsContainer = document.createElement('div');
    unitDetailsContainer.classList.add('unit-details-container');

    const name = document.createElement('p');
    name.textContent = `${addButton.getAttribute('data-name')}`;
    unitDetailsContainer.appendChild(name);

    const points = document.createElement('p');
    points.textContent = `Points: ${addButton.getAttribute('data-points')}`;
    unitDetailsContainer.appendChild(points);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('unit-buttons');

    const removeButton = document.createElement('button');
    removeButton.classList.add('button', 'remove-circle-button');
    removeButton.textContent = '-';

    removeButton.addEventListener('click', () => {
      unitDetailsContainer.remove();
      commanderCount--;
      document.getElementById('commander-count').textContent = commanderCount;
    });

    buttonContainer.appendChild(removeButton);
    
    unitDetailsContainer.appendChild(buttonContainer);

    const unitDetails = document.getElementById('added-units');
    unitDetails.appendChild(unitDetailsContainer);

    const upgradeButtonContainer = document.createElement('div');
    upgradeButtonContainer.classList.add('unit-buttons');

    const unitUpgradeSplitList = splitUpgrades(unit.upgrade_slots);
    console.log(unitUpgradeSplitList);

    for (let i = 0; i < unitUpgradeSplitList.length; i++) {
      const upgradeButton = document.createElement('button');
      upgradeButton.classList.add('button', 'upgrade-circle-button');

      const upgradeImage = document.createElement('img');
      upgradeImage.classList.add('upgrade-image');
      upgradeImage.src = `Pictures/upgrade_${unitUpgradeSplitList[i]}_icon.jpg`;

      upgradeButton.appendChild(upgradeImage);

      upgradeButton.addEventListener('click', () => {
          alert(`Upgrade ${unitUpgradeSplitList[i]} selected!`);
      });

      upgradeButtonContainer.appendChild(upgradeButton);
    }

    unitDetails.appendChild(upgradeButtonContainer);

    commanderCount++;
    document.getElementById('commander-count').textContent = commanderCount;
});
}