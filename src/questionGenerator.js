const questions = [
  'What is the last movie you watched?',
  'What is your favorite ice cream flavor? Do you prefer a cone or a cup?',
  'What is your favourite podcast?',
  'You can only have one, would you rather have a cook or a maid?',
  'What is your favourite kitchen appliance?',
  'Irish Lottery - would you rather win 3 million or the 20k a month prize for 30 years?',
  'What is your favorite cereal?',
  'What song lyrics best represent you?',
  'Whats a Movie you can watch on repeat?',
  'Top 3 ice cream flavors?',
  'Type of music you were raised on',
  'Would you rather live in a place where it is always hot or always cold?',
  'Would you rather explore space or the ocean?',
  'What is your favorite app on your phone?',
  'What is your favorite childhood TV show or cartoon?',
  'Death Row last meal - any meal, any restaurant in the world',
  'What is your favourite month?',
  'Which Muppet represents you the best?',
  'Its the 90s, which Spice Girl are you taking a bullet for?',
  'Would you rather, give up Coffee or give up Pizza?',
];

// const used = [
//   'Window seat or aisle seat?',
//   'Which movie do you think has the best soundtrack?',
//   'What is your go-to breakfast? Is it sweet or savory?',
//   'Where would you like to go on your next trip?',
//   'What is your most-used emoji?',
//   'What is your go-to meal when you have to cook something quick?',
//   'If you could only have one sandwich for the rest of your life, what would it be?',
//   'What is something interesting about where you grew up?',
//   'Guilty TV or Movie pleasure, share with the class?',
//   'What is something interesting about where you grew up?',
// ];

function getRandomQuestion () {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function handleButtonClick() {
  displayLoading();
  setTimeout(() => {
    const randomQuestion = getRandomQuestion();
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

const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', handleButtonClick);

//brick animation below//

const brickContainer = document.getElementById("brick-container")

const brickContent = [ '&#129521', '&#x1F9F1', ]

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

const createBrick = (num) => {
  for (let i = num; i > 0; i--) {
    let brick = document.createElement("div");
    brick.className = "brick";
    brick.style.cssText = getRandomStyles();
    brick.innerHTML = brickContent[random(2)]
    brickContainer.append(brick);
  }
}

const removeBrick = () => {
  brickContainer.style.opacity = "0";
  setTimeout(() => {
    brickContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBrick(30)
  setTimeout(removeBrick, (1000 * 60))
});

window.addEventListener("click", () => {
  removeBrick()
});

window.addEventListener("load", () => {
  createBrick(30)
});
