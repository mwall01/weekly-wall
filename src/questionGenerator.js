const questions = [
  'What is your favourite holiday destination?',
  'What is your favourite way to spend a weekend?',
  'What is your favourite book or author?',
];

// Functionality

function getRandomQuestionFromArray(questionArray) {
  const randomIndex = Math.floor(Math.random() * questionArray.length);
  return questionArray[randomIndex];
}

function handleButtonClick(questionArray) {
  displayLoading();
  setTimeout(() => {
    const randomQuestion = getRandomQuestionFromArray(questionArray);
    displayQuestion(randomQuestion);
  }, 3000);
}

function displayLoading() {
  const questionContainer = document.getElementById('questionContainer');
  questionContainer.innerHTML = '<p id="loadingText">Building</p>';
  const loadingText = document.getElementById('loadingText');
  animateLoading(loadingText, 0);
}

function animateLoading(element, count) {
  setTimeout(() => {
    const dots = '...'.substring(0, count % 4);
    element.textContent = 'Building' + dots;
    animateLoading(element, count + 1);
  }, 500);
}

function displayQuestion(question) {
  const questionContainer = document.getElementById('questionContainer');
  questionContainer.innerHTML = ''; // Clear content
  const questionElement = document.createElement('p');
  questionElement.textContent = question;
  questionContainer.appendChild(questionElement);
}

//hide the generate question button at the start
document.getElementById('generateButton').style.display = 'none';

//brick animation below//
const brickContainer = document.getElementById('brick-container');
const brickContent = [ '&#129521', '&#x1F9F1', ];

const random = (num) => {
  return Math.floor(Math.random() * num);
};

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
};

const createBrick = (num) => {
  for (let i = num; i > 0; i--) {
    let brick = document.createElement('div');
    brick.className = 'brick';
    brick.style.cssText = getRandomStyles();
    brick.innerHTML = brickContent[random(2)];
    brickContainer.append(brick);
  }
};

const removeBrick = () => {
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

const buttonMappings = [
  { buttonId: 'generateButton', questionArray: questions }
];

buttonMappings.forEach(({ buttonId, questionArray }) => {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', () => handleButtonClick(questionArray));
});


//Video Player Lightbox
const greetingsButton = document.getElementById('greetingsButton');
greetingsButton.addEventListener('click',  () => {
  lightbox_open();
});

const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click',  () => {
  handleButtonClick();
});

const closeLightboxButton = document.getElementById('boxclose');
closeLightboxButton.addEventListener('click',  () => {
  lightbox_close();
});

function lightbox_open() {
  const lightBoxVideo = document.getElementById('video');
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  const lightBoxVideo = document.getElementById('video');
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  document.getElementById('greetingsButton').style.display='none';
  document.getElementById('generateButton').style.display = 'block';
  lightBoxVideo.pause();
}
