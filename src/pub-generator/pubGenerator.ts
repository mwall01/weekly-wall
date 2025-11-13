// pint animation below

const pintContainer = document.getElementById("pint-container") as HTMLDivElement | null;

const pintContent: string[] = [ '&#x1F3F0', '&#x1F37A', ];

const random = (num: number): number => {
  return Math.floor(Math.random() * num);
};

const getRandomStyles = (): string => {
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
};

const createpint = (num: number): void => {
  if (!pintContainer) return;
  for (let i = num; i > 0; i--) {
    const pint = document.createElement("div");
    pint.className = "pint";
    pint.style.cssText = getRandomStyles();
    pint.innerHTML = pintContent[random(2)];
    pintContainer.append(pint);
  }
};

const removepint = (): void => {
  if (!pintContainer) return;
  pintContainer.style.opacity = "0";
  setTimeout((): void => {
    pintContainer.innerHTML = '';
    pintContainer.style.opacity = "1";
  }, 500);
};

// Decision Tree below
const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    createpint(30);
    setTimeout(removepint, (1000 * 60));
    const cosyRadio = document.querySelector('input[name="cosy"]:checked') as HTMLInputElement | null;
    const foodRadio = document.querySelector('input[name="food"]:checked') as HTMLInputElement | null;
    const outdoorsRadio = document.querySelector('input[name="outdoors"]:checked') as HTMLInputElement | null;
    const fireplaceRadio = document.querySelector('input[name="fireplace"]:checked') as HTMLInputElement | null;
    const guinnessRadio = document.querySelector('input[name="guinness"]:checked') as HTMLInputElement | null;
    const outputText = document.getElementById('output-text') as HTMLParagraphElement | null;

    if (cosyRadio && foodRadio && outdoorsRadio && fireplaceRadio && guinnessRadio && outputText) {
      const cosyValue = cosyRadio.value as 'cosy' | 'buzzy';
      const foodValue = foodRadio.value as 'yes' | 'no';
      const outdoorsValue = outdoorsRadio.value as 'yes' | 'no';
      const fireplaceValue = fireplaceRadio.value as 'yes' | 'no';
      const guinnessValue = guinnessRadio.value as 'Top Crême' | 'Good Crême';

      interface PubSelection {
        cosy: 'cosy' | 'buzzy';
        food: 'yes' | 'no';
        outdoors: 'yes' | 'no';
        fireplace: 'yes' | 'no';
        guinness: 'Top Crême' | 'Good Crême';
        pub: string;
      }

      const pubSelections: PubSelection[] = [
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

      const selectedPub = pubSelections.find((selection: PubSelection) =>
        selection.cosy === cosyValue &&
        selection.food === foodValue &&
        selection.outdoors === outdoorsValue &&
        selection.fireplace === fireplaceValue &&
        selection.guinness === guinnessValue
      );

      if (selectedPub) {
        outputText.textContent = `You selected: ${selectedPub.pub}!`;
      }
    } else if (outputText) {
      outputText.textContent = 'Please answer all the questions.';
    }
  });
}


