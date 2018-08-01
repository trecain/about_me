'use strict';
let visitorsName = prompt(
  'Hello, welcome to my site. If you don\'t mind could I please get your name?'
);
console.log('visitor name: ', visitorsName);
const button = document.getElementById('myBtn');
button.addEventListener('click', event => {
  event.preventDefault();
  let questionsArray = [
    'Do I like sippin coronas on a hot summer night?',
    'When playing video games do I cheat?',
    'Do I even know how to turn my computer on?',
    'If a wood chuck could chuck wood, would the wood chuck chuck wood?',
    'If I had a dollar for every semi-colon I forgot could I buy a porche?'
  ];
  let answersCharArray = ['y', 'n', 'n', 'y', 'y'];
  let answersWordArray = ['yes', 'no', 'no', 'yes', 'yes'];
  let setResponseArray = arr => {
    arr.forEach((el, index) => {
      let userAnswer = prompt(el).toLowerCase();
      console.log('answer array: ', answersCharArray[index]);
      console.log('user answer: ', userAnswer);
      if (userAnswer === answersCharArray[index] || userAnswer === answersWordArray[index]) {
        alert(
          'My dawg! ' + visitorsName + ' you know me better than I know myself.'
        );
      } else {
        alert(
          'Keep it pushing ' + visitorsName + ' you ain\'t got a friend in me.'
        );
      }
    });
  };
  setResponseArray(questionsArray);
});