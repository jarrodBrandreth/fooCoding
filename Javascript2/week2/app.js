'use strict';

const bookTitles = {
  oryx_and_crake: {
    title: 'Oryx and Crake',
    author: 'Margaret Atwood',
    language: 'English',
    year_published: 2003,
    genre: 'Fiction',
  },
  year_of_the_flood: {
    title: 'Year of the Flood',
    author: 'Margaret Atwood',
    language: 'English',
    year_published: 2009,
    genre: 'Fiction',
  },
  maddaddam: {
    title: 'MaddAddam',
    author: 'Margaret Atwood',
    language: 'English',
    year_published: 2013,
    genre: 'Fiction',
  },
  sapiens: {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    language: 'English',
    year_published: 2014,
    genre: 'Non-Fiction',
  },
  homo_deus: {
    title: 'Homo Deus: A Brief History of Tomorrow',
    author: 'Yuval Noah Harari',
    language: 'English',
    year_published: 2016,
    genre: 'Non-Fiction',
  },
  amusing_ourselves_to_death: {
    title: 'Amusing Ourselves to Death: Public Discourse in the Age of Show Business',
    author: 'Neil Postman',
    language: 'English',
    year_published: 1985,
    genre: 'Non-Fiction',
  },
  conscientious_objections: {
    title: 'Conscientious Objections: Stirring Up Trouble About Language, Technology and Education',
    author: 'Neil Postman',
    language: 'English',
    year_published: 1988,
    genre: 'Non-Fiction',
  },
  brave_new_world: {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    language: 'English',
    year_published: 1932,
    genre: 'Fiction',
  },
  born_a_crime: {
    title: 'Born a Crime: Stories From a South African Childhood',
    author: 'Trevor Noah',
    language: 'English',
    year_published: 2016,
    genre: 'Non-Fiction',
  },
  animal_farm: {
    title: 'Animal Farm',
    author: 'George Orwell',
    language: 'English',
    year_published: 1945,
    genre: 'Fiction',
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
  //console.log(e.composedPath()[1].children);
  //console.log(e.path[1].children);
  for (let i = 1; i < para.length - 2; i++) {
    para[i].classList.add('appear');
  }
  e.target.removeEventListener('click', showBookInfo);
  e.target.addEventListener('click', removeBookInfo);
};

const removeBookInfo = (e) => {
  const para = e.composedPath()[1].children;
  for (let i = 1; i < para.length - 2; i++) {
    para[i].classList.remove('appear');
  }
  e.target.removeEventListener('click', removeBookInfo);
  e.target.addEventListener('click', showBookInfo);
};

/*
 * Creating the DOM
 */
const pageContainer = document.querySelector('.page-container');
pageContainer.appendChild(createBooksList(bookTitles));
addCoverImg(bookImgSrc);
addLinks(goodReadsLink);
const bookCoverContainer = document.querySelectorAll('.book-cover-container');

bookCoverContainer.forEach((cover) => {
  cover.addEventListener('click', showBookInfo);
});
