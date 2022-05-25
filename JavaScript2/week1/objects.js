'use strict';
fetch('https://www.breakingbadapi.com/api/characters')
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    /*
    before you start, make sure to change the script src  in index.html
    to this file src = "objects.js"
    Do you code here
    put yourself some challenges and try to achieve them
    use console logs to see your results
     */

    //breaking bad characters only array
    const breakingBad = data.filter((obj) => {
      return obj['category'].includes('Breaking Bad');
    });

    //array the functions will use
    const myArray = [...breakingBad];

    /* -----element variables----- */
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const randomBtn = document.querySelector('.random');
    const seasonValue = document.getElementById('season-select');
    const statusRadioButtons = document.querySelectorAll('[name = "status"]');
    const startBtn = document.getElementById('start-game');
    const resetBtn = document.getElementById('reset-game');
    const nextQuestionBtn = document.querySelector('.next-question-button');
    let currentCard = 0;
    let score = 0;

    /* -----functions----- */
    const createIdCard = (object) => {
      const cardArray = ['img', 'name', 'nickname', 'birthday', 'status'];
      const card = document.createElement('ul');
      card.setAttribute('class', 'card');
      const listItem = cardArray.forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('class', `card-${item}`);
        if (item === 'img') {
          const img = document.createElement('img');
          img.setAttribute('src', object[item]);
          img.setAttribute('alt', ` a picture of ${object.name}`);
          li.appendChild(img);
          card.appendChild(li);
        } else {
          const key = document.createElement('span');
          key.setAttribute('class', 'key');
          key.innerText = `${item}:`;
          const value = document.createElement('span');
          value.setAttribute('class', 'value');
          value.innerText = object[item];
          li.appendChild(key);
          li.appendChild(value);
          card.appendChild(li);
        }
      });
      showCard(card); 
      
    };

    const showCard = (card) => {
      const cardContainer = document.querySelector('.card-container');
      while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
      }
      cardContainer.appendChild(card);
    };

    const displayPrevCard = () => {
      if (currentCard === 0) {
        currentCard = myArray.length - 1;
         createIdCard(myArray[currentCard]);
        
      } else {
        currentCard--;
        createIdCard(myArray[currentCard]);
        
      }
    };

    const displayNextCard = () => {
      //add condition to make sure not last card

      if (currentCard === myArray.length - 1) {
        currentCard = 0;
         createIdCard(myArray[currentCard]);
        
      } else {
        currentCard++;
        createIdCard(myArray[currentCard]);
        
      }
    };

    const displayRandomCard = () => {
      let randomNum = Math.floor(Math.random() * myArray.length);
      currentCard = randomNum;
       createIdCard(myArray[currentCard]);
    };

    const createActorList = (array) => {
      const actorList = [];
      array.forEach((actor) => {
        const container = document.createElement('li');
        const image = document.createElement('img');
        const name = document.createElement('div');
        container.setAttribute('class', 'actor');
        image.setAttribute('src', `${actor['img']}`);
        image.setAttribute('alt', ` portrait of ${actor['portrayed']}`);
        name.setAttribute('class', 'actor-name');
        name.innerText = actor['portrayed'];
        container.appendChild(image);
        container.appendChild(name);
        container.addEventListener('click', () => {
          createIdCard(actor);
        });
        actorList.push(container);
      });

      return actorList;
    };

    const showActorsList = (array) => {
      const listContainer = document.querySelector('.actors-list');
      while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
      }
      array.forEach((li) => {
        listContainer.appendChild(li);
      });
    };

    const filterAlive = (array) => {
      return array.filter((obj) => obj['status'] === 'Alive');
    };

    const filterDeceased = (array) => {
      return array.filter((obj) => obj['status'] !== 'Alive');
    };

    const filterBySeason = (array) => {
      const season = parseInt(seasonValue.value);
      return array.filter((obj) => obj['appearance'].includes(season));
    };

    const applyFilter = (list) => {
      const output = createActorList(list);
      showActorsList(output);
    };

    const listFilter = () => {
      let newList = [...myArray];

      if (statusRadioButtons[1].checked) {
        newList = filterAlive(newList);
      }
      if (statusRadioButtons[2].checked) {
        newList = filterDeceased(newList);
      }

      if (seasonValue.value) {
        newList = filterBySeason(newList);
      }

      applyFilter(newList);
    };

    const getRandomCharacter = (array) => {
      let randomNum = Math.floor(Math.random() * array.length);
      return array[randomNum];
    };

    const createRandomOption = (character) => {
      let option = getRandomCharacter(myArray);
      while (option['name'] === character['name']) {
        option = getRandomCharacter(myArray);
      }
      return option;
    };

    //takes a object "character" and returns random string of one of the occupations
    const pickRandomOccupation = (character) => {
      const occupationLength = character['occupation'].length;
      const randomNum = Math.floor(Math.random() * occupationLength);
      return character['occupation'][randomNum];
    };

    //event listener function
    const rightAnswerFunction = (e) => {
      e.target.classList.add('right-answer');
      score++;
      updateScore();
      e.target.removeEventListener('click', rightAnswerFunction);
      setTimeout(nextQuestion, 1000);
    };

    //function that sets event listener
    const setRightAnswer = (element) => {
      element.addEventListener('click', rightAnswerFunction);
    };


    //adds event listeners adds classes to wrong-answer
    const setWrongAnswer = (element) => {
      element.addEventListener('click', () => {
        element.classList.add('wrong-answer');
      });
    };

    //makes random question from array and fills with random character and random options
    const makeQuestion = (character) => {
      const questionArray = [
        `Which character had the occupation ${pickRandomOccupation(character)} ?`,
        `Who goes by the nickname "${character['nickname']}" ?`,
        `The actor ${character['portrayed']} plays which character ?`,
        `The character ${character['name']} is portrayed by which actor ?`,
      ];
      const answer = character;
      const option2 = createRandomOption(character);
      const option3 = createRandomOption(option2);
      const randomIndex = Math.floor(Math.random() * questionArray.length);
      const chosenQuestion = document.createElement('div');
      const answerDivOne = document.createElement('div');
      const answerDivTwo = document.createElement('div');
      const answerDivThree = document.createElement('div');
      const questionContainer = document.querySelector('.question-container');
      chosenQuestion.innerText = `${questionArray[randomIndex]}`;
      chosenQuestion.setAttribute('class', 'question');

      const answersObjArray = [answer, option2, option3];
      const answersDivArray = [answerDivOne, answerDivTwo, answerDivThree];

      for (let i = 0; i < answersObjArray.length; i++) {
        if (answersObjArray[i] === answer) {
          setRightAnswer(answersDivArray[i]);
          answersDivArray[i].classList.add("answer");
        } else {
          setWrongAnswer(answersDivArray[i]);
          answersDivArray[i].classList.add("answer");
        }

        if (randomIndex === questionArray.length - 1) {
          answersDivArray[i].innerText = `${answersObjArray[i]['portrayed']}`;
        } else {
          answersDivArray[i].innerText = `${answersObjArray[i]['name']}`;
        }
      }

      //first append question div
      questionContainer.appendChild(chosenQuestion);

      // Now we sort array into random order then loop to append answers
      answersDivArray.sort((a, b) => 0.5 - Math.random());

      for (let i = 0; i < answersDivArray.length; i++) {
        questionContainer.appendChild(answersDivArray[i]);
      }
    };

    const startGame = () => {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.style.visibility = "visible"; /* remove later */ 
      const questionContainer = document.querySelector('.question-container');
      const randomNum = Math.floor(Math.random() * myArray.length);
      while (questionContainer.firstChild) {
        questionContainer.removeChild(questionContainer.firstChild);
      }
      score = 0;
      updateScore();
      makeQuestion(myArray[randomNum]);
    };

    const resetGame = () => {
      const questionContainer = document.querySelector('.question-container');
      const randomNum = Math.floor(Math.random() * myArray.length);
      while (questionContainer.firstChild) {
        questionContainer.removeChild(questionContainer.firstChild);
      }
      score = 0;
      updateScore();
      makeQuestion(myArray[randomNum]);
    };

    const nextQuestion = () => {
      const questionContainer = document.querySelector('.question-container');
      const randomNum = Math.floor(Math.random() * myArray.length);
      while (questionContainer.firstChild) {
        questionContainer.removeChild(questionContainer.firstChild);
      }
      makeQuestion(myArray[randomNum]);
    };

    const updateScore = () => {
      const scoreElement = document.getElementById('score');
      scoreElement.innerText = score;
    };

    /* -----event listeners----- */

    nextBtn.addEventListener('click', displayNextCard);
    prevBtn.addEventListener('click', displayPrevCard);
    randomBtn.addEventListener('click', displayRandomCard);
    seasonValue.addEventListener('input', () => {
      listFilter();
    });
    for (let i = 0; i < statusRadioButtons.length; i++) {
      statusRadioButtons[i].addEventListener('input', () => {
        listFilter();
      });
    }
    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', resetGame);
    nextQuestionBtn.addEventListener('click', nextQuestion);

    createIdCard(myArray[0]);
    applyFilter(filterBySeason(myArray));


  });
