'use strict';

const bookTitles = {
  oryx_and_crake: {
    title: 'Oryx and Crake',
    author: 'Margaret Atwood',
    language: 'English',
    year_published: 2003,
    genre: 'Fiction',
    description: `NATIONAL BESTSELLER The first volume in the internationally acclaimed MaddAddam trilogy is at once an unforgettable love story and a compelling vision of the future-from the bestselling author of The Handmaid's Tale and The Testaments.`,
    about: 'about',
  },
  year_of_the_flood: {
    title: 'Year of the Flood',
    author: 'Margaret Atwood',
    language: 'English',
    year_published: 2009,
    genre: 'Fiction',
    description: `NATIONAL BESTSELLER From the bestselling author of The Handmaid's Tale and The Testaments-the second book of the internationally celebrated MaddAddam trilogy, set in the visionary world of Oryx and Crake, is at once a moving tale of lasting friendship and a landmark work of speculative fiction.`,
    about: 'about',
  },
  maddaddam: {
    title: 'MaddAddam',
    author: 'Margaret Atwood',
    language: 'English',
    year_published: 2013,
    genre: 'Fiction',
    description: `NATIONAL BESTSELLER From the bestselling author of The Handmaid's Tale and The Testamants-this final volume of the internationally celebrated MaddAddam trilogy "has brought the previous two books together in a fitting and joyous conclusion that's an epic not only of an imagined future but of our own past" (The New York Times Book Review).`,
    about: 'about',
  },
  sapiens: {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    language: 'English',
    year_published: 2014,
    genre: 'Non-Fiction',
    description: `NEW YORK TIMES BESTSELLER From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution a #1 international bestseller that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be "human."`,
    about: 'about',
  },
  homo_deus: {
    title: 'Homo Deus: A Brief History of Tomorrow',
    author: 'Yuval Noah Harari',
    language: 'English',
    year_published: 2016,
    genre: 'Non-Fiction',
    description: `NEW YORK TIMES BESTSELLER Yuval Noah Harari, author of the critically-acclaimed New York Times bestseller and international phenomenon Sapiens, returns with an equally original, compelling, and provocative book, turning his focus toward humanity's future, and our quest to upgrade humans into gods.`,
    about: 'about',
  },
  amusing_ourselves_to_death: {
    title: 'Amusing Ourselves to Death: Public Discourse in the Age of Show Business',
    author: 'Neil Postman',
    language: 'English',
    year_published: 1985,
    genre: 'Non-Fiction',
    description: `Television has conditioned us to tolerate visually entertaining material measured out in spoonfuls of time, to the detriment of rational public discourse and reasoned public affairs. In this eloquent, persuasive book, Neil Postman alerts us to the real and present dangers of this state of affairs, and offers compelling suggestions as to how to withstand the media onslaught. Before we hand over politics, education, religion, and journalism to the show business demands of the television age, we must recognize the ways in which the media shape our lives and the ways we can, in turn, shape them to serve out highest goals.`,
    about: 'about',
  },
  conscientious_objections: {
    title: 'Conscientious Objections: Stirring Up Trouble About Language, Technology and Education',
    author: 'Neil Postman',
    language: 'English',
    year_published: 1988,
    genre: 'Non-Fiction',
    description: `In a series of feisty and ultimately hopeful essays, one of America's sharpest social critics casts a shrewd eye over contemporary culture to reveal the worst - and the best - of our habits of discourse, tendencies in education, and obsessions with technological novelty. Readers will find themselves rethinking many of their bedrock assumptions: Should education transmit culture or defend us against it? Is technological innovation progress or a peculiarly American addiction? When everyone watches the same television programs - and television producers don't discriminate between the audiences for Sesame Street and Dynasty - is childhood anything more than a sentimental concept? Writing in the traditions of Orwell and H.L. Mencken, Neil Postman sends shock waves of wit and critical intelligence through the cultural wasteland.`,
    about: 'about',
  },
  brave_new_world: {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    language: 'English',
    year_published: 1932,
    genre: 'Fiction',
    description: `Brave New World is a dystopian social science fiction novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist.`,
    about: 'about',
  },
  born_a_crime: {
    title: 'Born a Crime: Stories From a South African Childhood',
    author: 'Trevor Noah',
    language: 'English',
    year_published: 2016,
    genre: 'Non-Fiction',
    description: `Born a Crime is the story of a mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist. It is also the story of that young man's relationship with his fearless, rebellious, and fervently religious mother-his teammate, a woman determined to save her son from the cycle of poverty, violence, and abuse that would ultimately threaten her own life.`,
    about: 'about',
  },
  animal_farm: {
    title: 'Animal Farm',
    author: 'George Orwell',
    language: 'English',
    year_published: 1945,
    genre: 'Fiction',
    description: `All the animals were looking forward to the new, happy lives they would lead when Mr Jones's rule over them came to an end. When the animals get rid of Mr. Jones and take over the farm, they are excited by their new freedom. But can they run the farm with tools that are designed for humans? Will they be able to harvest the food that they need for the winter? The farmers decide to band together to win back the farm for Mr. Jones. Will the animals be able to fight them off? Can life on Animal Farm be as wonderful as they had all hoped for, or will new dangers threaten their happiness?`,
    about: 'about',
  },
};

const bookImgSrc = {
  oryx_and_crake: './book_covers/oryx_and_crake.jpg',
  year_of_the_flood: './book_covers/year_of_the_flood.jpg',
  maddaddam: './book_covers/maddaddam.jpg',
  sapiens: './book_covers/sapiens.jpg',
  homo_deus: './book_covers/homo_deus.jpg',
  amusing_ourselves_to_death: './book_covers/amusing_ourselves_to_death.jpg',
  conscientious_objections: './book_covers/conscientious_objections.jpg',
  brave_new_world: './book_covers/brave_new_world.jpg',
  born_a_crime: './book_covers/born_a_crime.jpg',
  animal_farm: './book_covers/animal_farm.jpg',
};

const goodReadsLink = {
  oryx_and_crake:
    'https://www.goodreads.com/book/show/46756.Oryx_and_Crake?from_search=true&from_srp=true&qid=ko3XYg2xLd&rank=1',
  year_of_the_flood:
    'https://www.goodreads.com/book/show/6080337-the-year-of-the-flood?from_search=true&from_srp=true&qid=tj2pWhYclR&rank=2',
  maddaddam:
    'https://www.goodreads.com/book/show/17262203-maddaddam?from_search=true&from_srp=true&qid=tj2pWhYclR&rank=3',
  sapiens:
    'https://www.goodreads.com/book/show/23692271-sapiens?from_search=true&from_srp=true&qid=JP4ocTkiXD&rank=2',
  homo_deus:
    'https://www.goodreads.com/book/show/31138556-homo-deus?from_search=true&from_srp=true&qid=nCaPJlyEQr&rank=1',
  amusing_ourselves_to_death:
    'https://www.goodreads.com/book/show/74034.Amusing_Ourselves_to_Death?ref=nav_sb_ss_1_14',
  conscientious_objections:
    'https://www.goodreads.com/book/show/96444.Conscientious_Objections?ref=nav_sb_ss_1_14',
  brave_new_world: 'https://www.goodreads.com/book/show/5129.Brave_New_World?ref=nav_sb_ss_1_12',
  born_a_crime: 'https://www.goodreads.com/book/show/29780253-born-a-crime?ref=nav_sb_ss_1_11',
  animal_farm: 'https://www.goodreads.com/book/show/170448.Animal_Farm?ref=nav_sb_ss_1_11',
};

/*
 * Takes object(the book) and string of what element you want to use for a heading and other elements (eg "h2","p") as arguments
 * takes first object key and creates element from headingElement argument
 * loops through the rest of the keys creates element from otherElementType argument
 * returns a list of elements created from that object
 */
const createBookElement = (obj, headingElement, otherElementType) => {
  const keyValueArr = Object.entries(obj);
  const elementsArray = [];
  const heading = document.createElement(headingElement);
  heading.innerText = keyValueArr[0][1];
  heading.classList.add(keyValueArr[0][0]);
  elementsArray.push(heading);

  for (let i = 1; i < keyValueArr.length; i++) {
    const element = document.createElement(otherElementType);
    element.innerText = keyValueArr[i][1];
    element.classList.add(keyValueArr[i][0]);
    elementsArray.push(element);
  }

  return elementsArray;
};

/*
 * helper function that appends a list of elements in an array to the parent
 */
const appendElements = (parent, elements) => {
  elements.forEach((element) => parent.appendChild(element));
};

/*
 * Takes an object(bookTitles) with its properties as objects(thebooks) and creates a ul and appends that object(bookTitles) properties(the books) to li elements
 */
const createBooksList = (obj) => {
  const bookShelf = document.createElement('ul');
  bookShelf.classList.add('bookshelf');

  for (const key in obj) {
    const book = document.createElement('li');
    book.setAttribute('id', key);
    const bookInfo = createBookElement(obj[key], 'h2', 'p');
    appendElements(book, bookInfo);
    bookShelf.appendChild(book);
  }
  return bookShelf;
};

const addCoverImg = (obj) => {
  Object.keys(obj).forEach((key) => {
    const img = document.createElement('img');
    img.setAttribute('src', obj[key]);
    img.setAttribute('alt', `${key.replaceAll('_', ' ')} book cover`);
    const figure = document.createElement('figure');
    figure.classList.add('book-cover-container');
    figure.appendChild(img);
    const location = document.getElementById(key);
    location.appendChild(figure);
  });
};

const addLinks = (obj) => {
  Object.keys(obj).forEach((key) => {
    const link = document.createElement('a');
    link.setAttribute('href', obj[key]);
    link.setAttribute('target', '_blank');
    link.classList.add('goodreads-link');
    link.innerText = 'Read More at Goodreads';
    const location = document.getElementById(key);
    location.appendChild(link);
  });
};

const showBookInfo = (e) => {
  const para = e.composedPath()[1].children;
  para[5].classList.add('slide-in');
  for (let i = 1; i < para.length - 4; i++) {
    para[i].classList.add('appear');
  }
  e.target.removeEventListener('click', showBookInfo);
  e.target.addEventListener('click', removeBookInfo);
};

const removeBookInfo = (e) => {
  const para = e.composedPath()[1].children;
  para[5].classList.remove('slide-in');
  for (let i = 1; i < para.length - 4; i++) {
    para[i].classList.remove('appear');
  }
  e.target.removeEventListener('click', removeBookInfo);
  e.target.addEventListener('click', showBookInfo);
};

const createBookShelf = () => {
  const pageContainer = document.querySelector('.page-container');
  while (pageContainer.firstChild) {
    pageContainer.removeChild(pageContainer.firstChild);
  }
  pageContainer.appendChild(createBooksList(bookTitles));
  addCoverImg(bookImgSrc);
  addLinks(goodReadsLink);
  const aboutTab = document.querySelectorAll('.about');
  aboutTab.forEach((tab) => {
    tab.addEventListener('click', showBookInfo);
  });
};

const generateUserBookForm = () => {
  const userForm = document.createElement('div');
  userForm.classList.add('user-form');

  const heading = document.createElement('h2');
  heading.innerText = 'Insert Your Own Book';
  userForm.appendChild(heading);

  const propStrings = ['title', 'author', 'language', 'year', 'genre', 'description'];
  for (let i = 0; i < propStrings.length; i++) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    switch (propStrings[i]) {
      case 'title':
        input.setAttribute('placeholder', 'eg. Harry Potter');
        break;
      case 'author':
        input.setAttribute('placeholder', 'eg. Jane Doe');
        break;
      case 'language':
        input.setAttribute('placeholder', 'eg. English');
        break;
      case 'year':
        input.setAttribute('placeholder', 'eg. 2022');
        break;
      case 'genre':
        input.setAttribute('placeholder', 'eg. Fiction');
        break;
      default:
        break;
    }
    label.setAttribute('for', `user-${propStrings[i]}`);
    label.innerText = propStrings[i];
    input.setAttribute('id', `user-${propStrings[i]}`);
    input.setAttribute('name', `user-${propStrings[i]}`);
    input.setAttribute('type', 'text');
    userForm.appendChild(label);
    userForm.appendChild(input);
  }
  const buttons = ['add', 'remove'];
  for (let i = 0; i < buttons.length; i++) {
    const button = document.createElement('button');
    button.setAttribute('id', `${buttons[i]}-button`);
    button.innerText = buttons[i];
    userForm.appendChild(button);
  }
  const removeInput = document.createElement('input');
  removeInput.setAttribute('id', 'remove-title');
  removeInput.setAttribute('type', 'text');
  removeInput.setAttribute('placeholder', 'insert title to remove eg. animal farm');
  userForm.appendChild(removeInput);

  const formContainer = document.querySelector('.form-container');
  formContainer.appendChild(userForm);
};

const createNewBook = () => {
  //refactor with loop
  let bookTitle = document.getElementById('user-title').value;
  let bookAuthor = document.getElementById('user-author').value;
  let bookLanguage = document.getElementById('user-language').value;
  let bookYear = document.getElementById('user-year').value;
  let bookGenre = document.getElementById('user-genre').value;
  let bookDescription = document.getElementById('user-description').value;
  if (!bookTitle) bookTitle = 'Hello World';
  if (!bookAuthor) bookAuthor = 'Jane Doe';
  if (!bookLanguage) bookLanguage = 'English';
  if (!bookYear) bookYear = '2022';
  if (!bookGenre) bookGenre = 'Fiction';
  if (!bookDescription)
    bookDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Gravida neque convallis a cras semper. Pharetra sit amet aliquam id. At auctor urna nunc id. Ac tincidunt vitae semper quis lectus nulla. Ac turpis egestas sed tempus urna et pharetra pharetra. Adipiscing tristique risus nec feugiat in fermentum posuere. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Platea dictumst quisque sagittis purus sit.`;
  const objKey = bookTitle.replaceAll(' ', '_');
  const newBook = {
    title: `${bookTitle}`,
    author: `${bookAuthor}`,
    language: `${bookLanguage}`,
    year_published: `${bookYear}`,
    genre: `${bookGenre}`,
    description: `${bookDescription}`,
    about: 'about',
  };

  bookTitles[`${objKey}`] = newBook;
  bookImgSrc[`${objKey}`] = './book_covers/generic_book.png';
  goodReadsLink[`${objKey}`] = 'https://www.goodreads.com/';

  const userFormInputs = document.querySelector('.user-form').getElementsByTagName('input');
  for (let i = 0; i < userFormInputs.length; i++) {
    userFormInputs[i].value = '';
  }

  createBookShelf();
};

const removeBook = () => {
  let removeValue = document.getElementById('remove-title').value;
  const prop = removeValue.toLowerCase().replaceAll(' ', '_');
  if (bookTitles.hasOwnProperty(prop)) {
    delete bookTitles[prop];
    delete bookImgSrc[prop];
    delete goodReadsLink[prop];
    createBookShelf();
  } else {
    alert('no title by that name check spelling');
  }
};

createBookShelf();
generateUserBookForm();
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', createNewBook);
const removeButton = document.getElementById('remove-button');
removeButton.addEventListener('click', removeBook);
