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