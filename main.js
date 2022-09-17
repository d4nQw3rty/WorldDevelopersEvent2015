const programInfo = [
  {
    id: 1,
    img: 'img/icons/program_icon_01.png',
    h2: 'Lecture',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    img: 'img/icons/program_icon_02.png',
    h2: 'Exhibition',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    img: 'img/icons/program_icon_03.png',
    h2: 'Forum',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    img: 'img/icons/program_icon_04.png',
    h2: 'Workshop',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 5,
    img: 'img/icons/program_icon_05.png',
    h2: 'Ignite',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const program = document.querySelector('#programs');
programInfo.forEach((e) => {
  const programResume = document.createElement('div');
  programResume.classList.add('progResume');
  programResume.setAttribute('id', e.id);
  program.appendChild(programResume);

  const programImg = document.createElement('img');
  programImg.classList.add('flexItem1');
  programImg.classList.add('progImgSize');
  programImg.setAttribute('src', e.img);
  programResume.appendChild(programImg);

  const programH2 = document.createElement('h2');

  programH2.classList.add('progH2');
  programH2.classList.add('flexItem1');
  programH2.textContent = e.h2;
  programResume.appendChild(programH2);

  const programP = document.createElement('p');

  programP.classList.add('progP');
  programP.classList.add('flexItem2');
  programP.textContent = e.p;
  programResume.appendChild(programP);
});

const expositorInfo = [
  {
    id: 'speaker1',
    img: 'img/speakers/speaker_01.png',
    h2: 'Yochai Benkler',
    h3: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'speaker2',
    img: 'img/speakers/speaker_02.png',
    h2: 'Kilnam Chon',
    h3: '',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus orci ac auctor augue.',

  },
  {
    id: 'speaker3',
    img: 'img/speakers/speaker_03.png',
    h2: 'SohYeong Noh',
    h3: 'Director of Art Centre Nabi and a board member of CC Korea',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'speaker4',
    img: 'img/speakers/speaker_04.png',
    h2: 'Julia Leda',
    h3: 'President of Young Pirates of Europe',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'speaker5',
    img: 'img/speakers/speaker_05.png',
    h2: 'Lila Tretikov',
    h3: 'Executive Director of the Wikimedia Foundation',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'speaker6',
    img: 'img/speakers/speaker_06.png',
    h2: 'Ryan Merkley',
    h3: 'CEO of Creative Commons, ex COO of the Mozilla foundation',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const expo = document.querySelector('#exponents');
expositorInfo.forEach((e) => {
  const expositor = document.createElement('div');
  expositor.classList.add('expositor');
  expositor.setAttribute('id', e.id);
  expo.appendChild(expositor);

  const expositorImg = document.createElement('div');
  expositorImg.classList.add('expositorImg');
  expositor.appendChild(expositorImg);

  const expositorImgImg = document.createElement('img');
  expositorImgImg.setAttribute('src', e.img);
  expositorImg.appendChild(expositorImgImg);

  const expositorTxt = document.createElement('div');
  expositorTxt.classList.add('expositorTxt');
  expositor.appendChild(expositorTxt);

  const expositorH2 = document.createElement('h2');
  expositorH2.classList.add('expositorH2');
  expositorH2.textContent = e.h2;
  expositorTxt.appendChild(expositorH2);

  const expositorH3 = document.createElement('h3');
  expositorH3.classList.add('expositorH3');
  expositorH3.textContent = e.h3;
  expositorTxt.appendChild(expositorH3);

  const expositorP = document.createElement('p');
  expositorP.classList.add('expositorP');
  expositorP.textContent = e.p;
  expositorTxt.appendChild(expositorP);
});

const seeMore = document.querySelector('#seeMore');
const exponentSample = document.querySelector('#exponentSample');
const hideExponents = document.querySelector('#exponents');

seeMore.addEventListener('click', () => {
  exponentSample.style.display = 'none';
  hideExponents.style.display = 'flex';
  seeMore.style.display = 'none';
});

const btnImg = document.querySelector('#btnImg');
const menu = document.querySelector('#menu');
const menuClose = document.querySelectorAll('.menuClose');
btnImg.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menuClose.forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
