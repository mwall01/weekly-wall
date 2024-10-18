document.getElementById('submit-btn').addEventListener('click', () => {
  const cosyRadio = document.querySelector('input[name="cosy"]:checked');
  const foodRadio = document.querySelector('input[name="food"]:checked');
  const outdoorsRadio = document.querySelector('input[name="outdoors"]:checked');
  const fireplaceRadio = document.querySelector('input[name="fireplace"]:checked');
  const guinnessRadio = document.querySelector('input[name="guinness"]:checked');
  const outputText = document.getElementById('output-text');

  if (cosyRadio && foodRadio && outdoorsRadio && fireplaceRadio && guinnessRadio) {
    const cosyValue = cosyRadio.value;
    const foodValue = foodRadio.value;
    const outdoorsValue = outdoorsRadio.value;
    const fireplaceValue = fireplaceRadio.value;
    const guinnessValue = guinnessRadio.value;

    const pubSelections = [
      { cosy: 'cosy', food: 'yes', outdoors: 'yes', fireplace: 'yes', guinness: 'Top Crême', pub: 'The Blue Light' },
      { cosy: 'buzzy', food: 'yes', outdoors: 'yes', fireplace: 'yes', guinness: 'Top Crême', pub: 'Fallon\'s' },
      { cosy: 'cosy', food: 'no', outdoors: 'yes', fireplace: 'yes', guinness: 'Top Crême', pub: 'The Swan' },
      { cosy: 'buzzy', food: 'no', outdoors: 'yes', fireplace: 'yes', guinness: 'Top Crême', pub: 'Kehoes' },
      { cosy: 'cosy', food: 'yes', outdoors: 'no', fireplace: 'yes', guinness: 'Top Crême', pub: 'Walshs' },
      { cosy: 'buzzy', food: 'yes', outdoors: 'no', fireplace: 'yes', guinness: 'Top Crême', pub: 'The Lord Edward' },
      { cosy: 'cosy', food: 'yes', outdoors: 'yes', fireplace: 'no', guinness: 'Top Crême', pub: 'Neary\'s' },
      { cosy: 'buzzy', food: 'yes', outdoors: 'yes', fireplace: 'no', guinness: 'Top Crême', pub: 'O\'Donoghues' },
      { cosy: 'cosy', food: 'yes', outdoors: 'yes', fireplace: 'yes', guinness: 'Good Crême', pub: 'No Name Bar' },
      { cosy: 'buzzy', food: 'yes', outdoors: 'yes', fireplace: 'yes', guinness: 'Good Crême', pub: 'Blackbird' },
      { cosy: 'cosy', food: 'no', outdoors: 'yes', fireplace: 'yes', guinness: 'Good Crême', pub: 'Dame Tavern' },
      { cosy: 'buzzy', food: 'no', outdoors: 'yes', fireplace: 'yes', guinness: 'Good Crême', pub: 'Idlewild' },
      { cosy: 'cosy', food: 'yes', outdoors: 'no', fireplace: 'yes', guinness: 'Good Crême', pub: 'O\'Neills (Suffolk St)' },
      { cosy: 'buzzy', food: 'yes', outdoors: 'no', fireplace: 'yes', guinness: 'Good Crême', pub: 'The Duke' },
      { cosy: 'cosy', food: 'yes', outdoors: 'yes', fireplace: 'no', guinness: 'Good Crême', pub: 'Mother Reillys' },
      { cosy: 'buzzy', food: 'yes', outdoors: 'yes', fireplace: 'no', guinness: 'Good Crême', pub: 'Grogan\'s' },
      { cosy: 'cosy', food: 'no', outdoors: 'no', fireplace: 'no', guinness: 'Top Crême', pub: 'The Long Hall' },
      { cosy: 'buzzy', food: 'no', outdoors: 'no', fireplace: 'no', guinness: 'Top Crême', pub: 'The Palace Bar' },
      { cosy: 'cosy', food: 'yes', outdoors: 'no', fireplace: 'no', guinness: 'Top Crême', pub: 'Gravediggers' },
      { cosy: 'buzzy', food: 'yes', outdoors: 'no', fireplace: 'no', guinness: 'Top Crême', pub: 'Devitts' },
      { cosy: 'cosy', food: 'no', outdoors: 'yes', fireplace: 'no', guinness: 'Top Crême', pub: 'J O\'Connells' },
      { cosy: 'buzzy', food: 'no', outdoors: 'yes', fireplace: 'no', guinness: 'Top Crême', pub: 'The Cobblestone' },
      { cosy: 'cosy', food: 'no', outdoors: 'no', fireplace: 'yes', guinness: 'Top Crême', pub: 'Arthurs' },
      { cosy: 'buzzy', food: 'no', outdoors: 'no', fireplace: 'yes', guinness: 'Top Crême', pub: 'McNeills (Capel St)' },
      { cosy: 'cosy', food: 'no', outdoors: 'no', fireplace: 'no', guinness: 'Good Crême', pub: 'McDaids' },
      { cosy: 'buzzy', food: 'no', outdoors: 'no', fireplace: 'no', guinness: 'Good Crême', pub: 'The Oval' },
      { cosy: 'cosy', food: 'yes', outdoors: 'no', fireplace: 'no', guinness: 'Good Crême', pub: 'The Brazen Head' },
      { cosy: 'buzzy', food: 'yes', outdoors: 'no', fireplace: 'no', guinness: 'Good Crême', pub: 'The Stag\'s Head' },
      { cosy: 'cosy', food: 'no', outdoors: 'yes', fireplace: 'no', guinness: 'Good Crême', pub: 'Toners' },
      { cosy: 'buzzy', food: 'no', outdoors: 'yes', fireplace: 'no', guinness: 'Good Crême', pub: 'Doheny & Nesbitt' },
      { cosy: 'cosy', food: 'no', outdoors: 'no', fireplace: 'yes', guinness: 'Good Crême', pub: 'Jack Nealons' },
      { cosy: 'buzzy', food: 'no', outdoors: 'no', fireplace: 'yes', guinness: 'Good Crême', pub: 'Mulligans' },
    ];

    const selectedPub = pubSelections.find(selection =>
      selection.cosy === cosyValue &&
      selection.food === foodValue &&
      selection.outdoors === outdoorsValue &&
      selection.fireplace === fireplaceValue &&
      selection.guinness === guinnessValue
    );

    if (selectedPub) {
      outputText.textContent = `You selected: ${selectedPub.pub}!`;
    }
  } else {
    outputText.textContent = 'Please answer all the questions.';
  }
});

// pint animation below

const pintContainer = document.getElementById("pint-container")

const pintContent = [ '&#x1F3F0', '&#x1F37A',]

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return ` 
top: -${top}%; 
left: ${left}%; 
font-size: ${size}px; 
animation-duration: ${dur}s; 
`;
} 

const createpint = (num) => {
  for (let i = num; i > 0; i--) {
    let pint = document.createElement("div");
    pint.className = "pint";
    pint.style.cssText = getRandomStyles();
    pint.innerHTML = pintContent[random(2)]
    pintContainer.append(pint);
  }
}

const removepint = () => {
  pintContainer.style.opacity = "0";
  setTimeout(() => {
    pintContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createpint(30)
  setTimeout(removepint, (1000 * 60))
});

window.addEventListener("click", () => {
  removepint()
});

window.addEventListener("load", () => {
  createpint(30)
});
