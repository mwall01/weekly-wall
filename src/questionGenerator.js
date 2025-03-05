const questions = [
  'Whats a Movie you can watch on repeat?',
  'Top 3 ice cream flavors?',
  'Would you rather explore space or the ocean?',
  'What is your favorite childhood TV show or cartoon?',
  'Would you rather be able to speak any language fluently or speak with animals?',
  'If you were invisible for a day, what would you do?',
  'Would you rather live in a big city or the middle of nowhere for the rest of your life?',
  'What is something that you cannot live without?',
  'What is your favourite cocktail?',
  'What\'s the best dish you can cook?',
  'If you could have any animal for a pet, what would it be?',
  'If you were the CEO for a day, what would you get for lunch?',
  'If you could live anywhere in the world for a year, where would it be?',
  'Favourite pastry?',
  'What sport would you perform in if you were to take part in the Olympics?',
  'Do you believe in the power of a curse?',
  'Do you have a pet?',
  'Can you remember the tallest man you have ever seen?',
  'How much money would it take to get you to spend a night in a cemetary',
  'Do you have a sweet tooth?',
  'Planning any trips soon?',
  'You are hosting the team for a dinner party. What dish do you make that knocks it out of the park every time?',
  'What is the first CD/Tape/Record you ever purchased?'
];
const paddyQuestions = [
  'Guinness, Murphy\'s or Beamish?',
  'What is your favourite pub?',
  'What is your favourite Irish dish?',
  'What is your favourite Irish song?',
  'What is your favourite Irish movie?',
  'Who is your favourite Irish actor/actress?',
  'Favourite place you have visited in Ireland?',
];
const easterQuestions = [
  'What is your favourite Easter Egg?',
  'What is your favourite chocolate bar?',
  'Favourite way to eat eggs? (Scrambled, poached, fried, boiled, etc.)',
  'What is your favourite pancake topping?',
];
const summerQuestions = [
  'What is your favourite summer drink?',
  'What is your favourite summer food?',
  'What is your favourite summer activity?',
  'What is your favourite summer song?',
  'What is your favourite hot country to travel to?',
];
const halloweenQuestions = [
  'What is your favourite Halloween movie?',
  'What is the best costume you have ever seen?',
  'Would you spend a night alone in the Hellfire club for 50k?',
  'If this team had to do a team costume, what would it be?',
];
const xmasQuestions = [
  'What is your favourite Christmas movie?',
  'What is your favourite Christmas song?',
  'What is your favourite Christmas food?',
  'What is your favourite Christmas drink?',
  'What was your favourite toy you got as a child?',
  'Favourite Christmas tradition?',
  'Have you ever regifted a present, and if so, what was it?',
  'What is your favourite part of Christmas dinner?',
  'What is the best Christmas party you have ever been to? The worst?',
  'When do you think it the best time to put up your decorations'
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
document.getElementById('generatePaddyButton').style.display = 'none';
document.getElementById('generateEasterButton').style.display = 'none';
document.getElementById('generateSummerButton').style.display = 'none';
document.getElementById('generateHalloweenButton').style.display = 'none';
document.getElementById('generateXmasButton').style.display = 'none';

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
  { buttonId: 'generateButton', questionArray: questions },
  { buttonId: 'generatePaddyButton', questionArray: paddyQuestions },
  { buttonId: 'generateEasterButton', questionArray: easterQuestions },
  { buttonId: 'generateSummerButton', questionArray: summerQuestions },
  { buttonId: 'generateHalloweenButton', questionArray: halloweenQuestions },
  { buttonId: 'generateXmasButton', questionArray: xmasQuestions },
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

const generatePaddyButton = document.getElementById('generatePaddyButton');
generatePaddyButton.addEventListener('click',  () => {
  handlePaddyButtonClick();
});

const generateEasterButton = document.getElementById('generateEasterButton');
generateEasterButton.addEventListener('click',  () => {
  handleEasterButtonClick();
});

const generateSummerButton = document.getElementById('generateSummerButton');
generateSummerButton.addEventListener('click',  () => {
  handleSummerButtonClick();
});

const generateHalloweenButton = document.getElementById('generateHalloweenButton');
generateHalloweenButton.addEventListener('click',  () => {
  handleHalloweenButtonClick();
});

const generateXmasButton = document.getElementById('generateXmasButton');
generateXmasButton.addEventListener('click',  () => {
  handleXmasButtonClick();
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
  document.getElementById('generatePaddyButton').style.display = 'block';
  document.getElementById('generateEasterButton').style.display = 'block';
  document.getElementById('generateSummerButton').style.display = 'block';
  document.getElementById('generateHalloweenButton').style.display = 'block';
  document.getElementById('generateXmasButton').style.display = 'block';
  lightBoxVideo.pause();
}
