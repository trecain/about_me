'use strict';
//prompt user for name
let visitorsName = prompt(
  'Hello, welcome to my site. If you don\'t mind could I please get your name?'
);
console.log('visitor name: ', visitorsName);

//adding even handler
const button = document.getElementById('myBtn');
button.addEventListener('click', event => {
  event.preventDefault();

  //initial variables
  let questionsArray = [
    'Question 1: Do I like sippin coronas on a hot summer night?',
    'Question 2: When playing video games do I cheat?',
    'Question 3: Do I even know how to turn my computer on?',
    'Question 4: If a wood chuck could chuck wood, would the wood chuck chuck wood?',
    'Question 5: If I had a dollar for every semi-colon I forgot could I buy a porche?'
  ];
  let answersCharArray = ['y', 'n', 'n', 'y', 'y'];
  let answersWordArray = ['yes', 'no', 'no', 'yes', 'yes'];
  let numberOfCorrectAnswers = 0;
  console.log('correct number of guesses: ', numberOfCorrectAnswers);

  //setting variables and asking first five questions
  let setResponseArray = arr => {
    arr.forEach((el, index) => {
      let userAnswer = prompt(el).toLowerCase();
      console.log(userAnswer);
      console.log(typeof userAnswer);
      let validatingArray = answersCharArray + answersWordArray;

      while (
        validatingArray.includes(userAnswer) === false ||
        userAnswer === ''
      ) {
        alert('Sorry that is incorrect, please try again');
        userAnswer = prompt(el).toLowerCase();
        console.log(userAnswer);
        console.log(typeof userAnswer);
      }
      console.log('answer array: ', answersCharArray[index]);
      console.log('user answer: ', userAnswer);
      if (validatingArray.includes(userAnswer) === true) {
        alert(
          'My dawg! ' + visitorsName + ' you know me better than I know myself.'
        );
        numberOfCorrectAnswers++;
        console.log('correct number of guesses: ', numberOfCorrectAnswers);
      } else {
        alert(
          'Keep it pushing ' + visitorsName + ' you ain\'t got a friend in me.'
        );
      }
    });
  };

  //asking number question to user
  let numberQuestion = () => {
    let count = 1;
    while (count < 5) {
      let numberToGuess = parseInt(
        prompt(
          'Question 6: How many sons do I have? you have five chances to get it correct.'
        )
      );
      if (isNaN(numberToGuess)) {
        alert('That is not a number. You lose a turn');
      } else if (numberToGuess === 2) {
        alert('Yes, ' + visitorsName + ' you got it right!');
        return;
      } else if (numberToGuess > 2) {
        alert('You guessed to high.');
      } else if (numberToGuess < 2) {
        alert('You guessed to low.');
      } else {
        alert('That is incorrect, please try again');
      }
      count++;
      console.log('count variable: ', count);
    }
    alert('Sorry, ' + visitorsName + ' you guessed incorrectly');
  };

  //asking question with multiple answers to user
  let multipleQuestion = () => {
    let multiArray = ['new york', 'california', 'texas'];
    let count = 1;
    while (count < 7) {
      let userMultiAnwser = prompt(
        'Ouestion 7: Try to guess one of my favorite states i\'ve visited, you have seven chances to get it correct.'
      ).toLowerCase();
      if (!isNaN(userMultiAnwser)) {
        alert('Sorry that is an incorrect value, you lose a turn.');
      } else if (multiArray.includes(userMultiAnwser) === true) {
        alert(
          visitorsName +
            ' you were correct, all possible answers were ' +
            multiArray[0] +
            ', ' +
            multiArray[1] +
            ', ' +
            multiArray[2]
        );
        numberOfCorrectAnswers++;
        console.log('correct number of guesses: ', numberOfCorrectAnswers);
        return;
      } else {
        alert('Incorrect, try again');
        count++;
      }
    }
    alert(
      visitorsName +
        ' you were incorrect, all possible answers were ' +
        multiArray[0] +
        ', ' +
        multiArray[1] +
        ', ' +
        multiArray[2]
    );
  };

  //displaying the number of correct answer to the user
  const printNumberOfCorrectAnswers = () => {
    console.log('correct number of guesses: ', numberOfCorrectAnswers);
    alert(
      visitorsName + ' you scored ' + numberOfCorrectAnswers + ' out of 7 yo!'
    );
  };

  //invoking functions
  const main = () => {
    setResponseArray(questionsArray);
    numberQuestion();
    multipleQuestion();
    printNumberOfCorrectAnswers();
  };

  //calling main invoked function
  main();
});
