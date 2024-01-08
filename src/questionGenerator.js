// Array of questions
const questions = [
  'Where would you like to go on your next trip?',
  'What is your go-to meal when you have to cook something quick?',
  'What is the last movie you watched?',
  'What is your go-to breakfast? Is it sweet or savory?',
  'Which movie do you think has the best soundtrack?',
  'If you could only have one sandwich for the rest of your life, what would it be?',
  'What is your favorite ice cream flavor? Do you prefer a cone or a cup?',
  'What is your favorite fast food place?',
  'Window seat or aisle seat?',
  'How many unread emails are there in your inbox?',
  'What is something interesting about where you grew up?',
  'What is your favourite podcast?',
  'What is your favourite kitchen appliance?',
  'Irish Lottery - would you rather win 3 million or the 20k a month prize for 30 years?',
  'What is your favorite cereal?',
  'Whats a Movie you can watch on repeat?',
  'Top 3 ice cream flavors?',
  'What is your most-used emoji?',
  'Guilty TV or Movie pleasure, share with the class?'
];

// Function to generate a random question
function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to handle button click
function handleButtonClick() {
  const randomQuestion = getRandomQuestion();
  // alert(randomQuestion); // Can replace this with any other way of displaying the question
  displayQuestion(randomQuestion);

  // Add the 'animate' class to the body
  document.body.classList.add('animate');

  // Remove the 'animate' class after the animation duration
  setTimeout(() => {
    document.body.classList.remove('animate');
  }, 2000); // Adjust the duration (in milliseconds) to match the animation duration  
}

function displayQuestion(question) {
  const questionContainer = document.getElementById('questionContainer');
  questionContainer.innerHTML = ''; // Clear content
  const questionElement = document.createElement('p');
  questionElement.textContent = question;
  questionContainer.appendChild(questionElement);
}

// Get the button element
const generateButton = document.getElementById('generateButton');

// Add a click event listener to the button
generateButton.addEventListener('click', handleButtonClick);