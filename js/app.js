'use strict';
let visitorsName = prompt('Hello, welcome to my site. If you don\'t mind could I please get your name?');
console.log('visitor name:', visitorsName);
const button = document.getElementById('myBtn');
button.addEventListener("click", (event) => {
    event.preventDefault();
    let questionsArray = ['Do I like sippin coronas on a hot summer night? please enter y or n', 
                          'When playing video games do I cheat? please enter y or n' , 
                          'Do I even know how to turn my computer on? please enter y or n', 
                          'If a wood chuck could chuck wood, would the wood chuck chuck wood? please enter y or n', 
                          'If I had a dollar for every semi-colon I forgot could I buy a porche? please enter y or n'
                        ];
    let answersArray = ['y', 'n', 'n', 'y', 'y'];
    let setResponseArray = arr => {
        questionsArray.forEach((el, index) => {
            let userAnswer = prompt(el).toLowerCase();
            console.log('answer array: ', answersArray[index]);
            console.log('user answer: ', userAnswer);
            if (userAnswer === answersArray[index]) {
                alert('My dawg! ' + visitorsName + ' you know me better than I know myself.');
            } else {
                alert('Keep it pushing ' + visitorsName + ' you ain\'t got a friend in me.');
            }
        });
    }
    setResponseArray(questionsArray);
});


