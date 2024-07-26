const questions = [
  'What is the last movie you watched?',
  'What is your favourite podcast?',
  'What is your favourite kitchen appliance?',
  'What song lyrics best represent you?',
  'Whats a Movie you can watch on repeat?',
  'Top 3 ice cream flavors?',
  'Type of music you were raised on',
  'Would you rather explore space or the ocean?',
  'What is your favorite app on your phone?',
  'What is your favorite childhood TV show or cartoon?',
  'Death Row last meal - any meal, any restaurant in the world',
  'What is your favourite IDE?',
  'If you had to wear a shirt with one word on it for a year, what word would you choose?',
  'If animals could talk, which one do you think would be the rudest?',
  'Would you rather be able to speak any language fluently or speak with animals?',
  'Where do you see yourself in five years from now?',
  'What is your worst fear?',
  'Would you rather be an expert at only one thing or average at a lot of things?',
  'Who was your role model growing up?',
  'What is the happiest memory that you have?',
  'What in life are you most passionate about?',
  'Do you think it is possible to learn lessons without making mistakes first?',
  'If you were invisible for a day, what would you do?',
  'What makes you smile when you are having a bad day?',
  'What is the most spontaneous thing you have ever done?',
  'What was the best time of your life?',
  'If you got kidnapped, what would you do that would be so annoying that it would make your kidnappers return you?',
  'Would you rather live in a big city or the middle of nowhere for the rest of your life?',
  'If you were to spend a day spoiling yourself, what would you do?',
  'How much of your life would you guess you spend on your phone?',
  'What keeps you up at night?',
  'If you had to wear one outfit for the rest of your life, what would it be?',
  'If you had a big decision to make, who would you talk to first?',
  'What is one thing you wish you could change about yourself?',
  'What is a life skill that you always wanted to learn and have never been able to?',
  'Are there any lessons that you had to learn the hard way?',
  'What is something that you cannot live without?',
  'On a scale from one to ten; how would you rate this last week?',
  'Is there a time in your life when you worked harder than ever before, and loved every minute of it?',
  'Would you rather time-travel ten years into the future or 100 years into the past?',
  'What was the best thing before sliced bread?',
  'What is your favourite cocktail?',
  'What TV show are you watching atm?',
  'You have your own late night talk show, who do you invite as your first guest? (Past/Present)',
  'What\'s the best dish you can cook?',
  'Cat or dog person?',
  'Would you rather be able to run at 100 miles per hour or fly at 1 mile per hour?',
  'If the rest of the team visited your hometown, what local spot would you bring us to?',
  'If you could have any animal for a pet, what would it be?',
  'Beach vacation or mountain retreat?',
  'Sweet or savory?',
  'Pizza with pineapple or pizza without cheese?',
  'If you were the CEO for a day, what would you get for lunch?',
  'If you could live in any fictional world, which would it be?',
  'If you could live anywhere in the world for a year, where would it be?',
  'Favourite pastry?'
];

/*
const used = [
  'If your life was a movie, what would it be called?', 🤢🤢🤢🤢
 'You can only have one, would you rather have a cook or a maid?',
 'Would you rather live in a place where it is always hot or always cold?',
 'Irish Lottery - would you rather win 3 million or the 20k a month prize for 30 years?',
 'What is your favourite month?',
 'Window seat or aisle seat?',
 'Which movie do you think has the best soundtrack?',
 'What is your go-to breakfast? Is it sweet or savory?',
 'Where would you like to go on your next trip?',
 'What is your most-used emoji?',
 'What is your go-to meal when you have to cook something quick?',
 'If you could only have one sandwich for the rest of your life, what would it be?',
 'What is something interesting about where you grew up?',
 'Guilty TV or Movie pleasure, share with the class?',
 'What is something interesting about where you grew up?',
 'What is your favorite cereal?',
 'Which Muppet represents you the best?',
 'Would you rather give up Coffee or Pizza?,
 'Its the 90s, which Spice Girl are you taking a bullet for?',
 'What is your favorite ice cream flavor? Do you prefer a cone or a cup?',
 'Do you think there is any way that we are actually living in the Matrix?',
 'Would you rather live in the same place for the rest of your life, or have to move to a new country once a month for the next five years?'
 'Communicate only through interpretive dance or have your life narrated by Morgan Freeman?',
 'If you could eliminate one food so no one could eat it ever again, what would it be?',
];
*/

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
