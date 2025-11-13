const questions: string[] = [
  'What is the most random celebrity encounter you have had?',
  'What is your favorite item in McDonalds',
  'What is your favourite horror film/show?',
  'Would you prefer to communicate only through dramatic whispers, or only through incredibly loud singing'
];

function getRandomQuestionFromArray(questionArray: string[]): string {
  const randomIndex = Math.floor(Math.random() * questionArray.length);
  return questionArray[randomIndex];
}

function handleButtonClick(questionArray: string[] = questions): void {
  displayLoading();
  setTimeout(() => {
    const randomQuestion = getRandomQuestionFromArray(questionArray);
    displayQuestion(randomQuestion);
  }, 3000);
}

function displayLoading(): void {
  const questionContainer = document.getElementById('questionContainer') as HTMLDivElement | null;
  if (!questionContainer) return;
  questionContainer.innerHTML = '<p id="loadingText">Building</p>';
  const loadingText = document.getElementById('loadingText') as HTMLElement | null;
  if (loadingText) {
    animateLoading(loadingText, 0);
  }
}

function animateLoading(element: HTMLElement, count: number): void {
  setTimeout(() => {
    const dots = '...'.substring(0, count % 4);
    element.textContent = 'Building' + dots;
    animateLoading(element, count + 1);
  }, 500);
}

function displayQuestion(question: string): void {
  const questionContainer = document.getElementById('questionContainer') as HTMLDivElement | null;
  if (!questionContainer) return;
  questionContainer.innerHTML = '';
  const questionElement = document.createElement('p');
  questionElement.textContent = question;
  questionContainer.appendChild(questionElement);
}

// hide the generate question button at the start
{
  const generateButton = document.getElementById('generateButton') as HTMLElement | null;
  if (generateButton) {
    generateButton.style.display = 'none';
  }
}

// brick animation below
const brickContainer = document.getElementById('brick-container') as HTMLDivElement | null;
const brickContent: string[] = [ '&#129521', '&#x1F9F1', ];

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

const createBrick = (num: number): void => {
  if (!brickContainer) return;
  for (let i = num; i > 0; i--) {
    const brick = document.createElement('div');
    brick.className = 'brick';
    brick.style.cssText = getRandomStyles();
    brick.innerHTML = brickContent[random(2)];
    brickContainer.append(brick);
  }
};

const removeBrick = (): void => {
  if (!brickContainer) return;
  brickContainer.style.opacity = '0';
  setTimeout(() => {
    brickContainer.remove();
  }, 500);
};

window.addEventListener('load', () => {
  createBrick(30);
  setTimeout(removeBrick, (1000 * 60));
});

window.addEventListener('click', () => {
  removeBrick();
});

window.addEventListener('load', () => {
  createBrick(30);
});

const buttonMappings: Array<{ buttonId: string; questionArray: string[] }> = [
  { buttonId: 'generateButton', questionArray: questions }
];

buttonMappings.forEach(({ buttonId, questionArray }) => {
  const button = document.getElementById(buttonId) as HTMLButtonElement | null;
  if (!button) return;
  button.addEventListener('click', () => handleButtonClick(questionArray));
});

// Video Player Lightbox
const greetingsButton = document.getElementById('greetingsButton') as HTMLButtonElement | null;
if (greetingsButton) {
  greetingsButton.addEventListener('click', () => {
    lightbox_open();
  });
}

const generateButton = document.getElementById('generateButton') as HTMLButtonElement | null;
if (generateButton) {
  generateButton.addEventListener('click', () => {
    handleButtonClick();
  });
}

const closeLightboxButton = document.getElementById('boxclose') as HTMLButtonElement | null;
if (closeLightboxButton) {
  closeLightboxButton.addEventListener('click', () => {
    lightbox_close();
  });
}

function lightbox_open(): void {
  const lightBoxVideo = document.getElementById('video') as HTMLVideoElement | null;
  window.scrollTo(0, 0);
  const light = document.getElementById('light') as HTMLDivElement | null;
  const fade = document.getElementById('fade') as HTMLDivElement | null;
  if (light) light.style.display = 'block';
  if (fade) fade.style.display = 'block';
  if (lightBoxVideo) lightBoxVideo.play();
}

function lightbox_close(): void {
  const lightBoxVideo = document.getElementById('video') as HTMLVideoElement | null;
  const light = document.getElementById('light') as HTMLDivElement | null;
  const fade = document.getElementById('fade') as HTMLDivElement | null;
  const greetingsBtn = document.getElementById('greetingsButton') as HTMLButtonElement | null;
  const generateBtn = document.getElementById('generateButton') as HTMLButtonElement | null;
  if (light) light.style.display = 'none';
  if (fade) fade.style.display = 'none';
  if (greetingsBtn) greetingsBtn.style.display = 'none';
  if (generateBtn) generateBtn.style.display = 'block';
  if (lightBoxVideo) lightBoxVideo.pause();
}


