const projects = [
  {
    image: ['./images/coordinate.png',],
    title: 'Redux Coordinate Fetch App',
    languages: ['REACT', 'REDUX', 'CSS3'],
    details: "Redux Coordinate Fetch App is a website working with the real live data from AccuWeather API to build a web application for the use of general public that provide general info services. This application will allow users to view the coordinates of their required province.",
    liveVersion: 'https://react-coordinate-app.onrender.com/',
    linkSource: 'https://github.com/ehmaddd/react-coordinate-app',
  },
  {
    image: ['./images/space.png',],
    title: 'Space Travelers Hub',
    languages: ['REACT', 'REDUX', 'CSS3'],
    details: "Space Traveler's Hub is a website that working with the real live data from SpaceX API to build a web application for a company that provides commercial and scientific space travel services. This application will allow users to book rockets and join selected space missions.",
    liveVersion: 'https://react-redux-group-project-green.vercel.app/',
    linkSource: 'https://github.com/ehmaddd/space-travelers-hub',
  },
  {
    image: ['./images/math.png',],
    title: 'Math Magician',
    languages: ['REACT', 'ES6', 'CSS3'],
    details: "Math Magician is a Single Page Application which allows the user to have a real-time virtual interface of scientific calculator. It will allow the users to perform basic mathematical functions with the ease of quick access.",
    liveVersion: 'https://math-magician-k8i5.onrender.com/',
    linkSource: 'https://github.com/ehmaddd/math-magician',
  },
  {
    image: ['./images/book.png'],
    title: 'Bookstore',
    languages: ['REACT', 'CSS3', 'HTML5'],
    details: "Book Store is a Single Page Application which allows the user to have a detailed information about a book library as well as the book reading status. It allows user to keep track of a book read by anyone and also change the particulars and also deleting the book.",
    liveVersion: 'https://book-store-modj.onrender.com/',
    linkSource: 'https://github.com/ehmaddd/bookstore',
  },
  {
    image: ['./images/movie.png'],
    title: 'Movie Show',
    languages: ['ES6', 'CSS3', 'HTML5'],
    details: "A website that allows users to interact with movies show information by extracting it from an API, like or comment them. We achieved that by using JavaScript objects , arrays and API. We also dynamically modified the DOM and added basic events",
    liveVersion: 'https://ehmaddd.github.io/Movie-Show-API-Based/dist/',
    linkSource: 'https://github.com/ehmaddd/Movie-Show-API-Based',
  },
  {
    image: ['./images/budget.png'],
    title: 'Budget App',
    languages: ['RAILS', 'CSS3', 'ES6'],
    details: "This app is actually food budget management app, in which you can add the categories on which you want to spend and then deals can also be added into it mentioning the amount to spend on each deal individually. On the main page, you can also see the total spend amount of that category.",
    liveVersion: 'https://budgetapp-6l76.onrender.com/',
    linkSource: 'https://github.com/ehmaddd/BudgetApp',
  },
];

let worksUl;
const modalUl = document.querySelector('#myModal ul');

// Populating Portfolio

const works = document.querySelectorAll('.work-sample');
for (let a = 0; a < works.length; a += 1) {
  document.querySelectorAll('.work-sample img')[a].src = projects[a].image[0];

  document.querySelectorAll('.work-sample h4')[a].innerHTML = projects[a].title;
  worksUl = document.querySelectorAll('.work-sample ul');

  for (let b = 0; b < projects[a].languages.length; b += 1) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(projects[a].languages[b]));
    li.setAttribute('id', 'element4');
    worksUl[a].appendChild(li);
  }
}

// Populting Modal
const modal = document.getElementById('myModal');
const btn = document.getElementsByClassName('see-project-btn');
const span = document.getElementsByClassName('close')[0];
const modalInterval = [];

for (let a = 0; a < btn.length; a += 1) {
  btn[a].addEventListener('click', () => {
    modal.style.display = 'block';

    document.querySelector('#myModal img').src = projects[a].image[0];

    document.querySelector('#myModal p').innerHTML = projects[a].details;
    document.querySelector('#myModal h4').innerHTML = projects[a].title;

    while (modalUl.firstChild) {
      modalUl.removeChild(modalUl.firstChild);
    }

    for (let b = 0; b < projects[a].languages.length; b += 1) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(projects[a].languages[b]));
      modalUl.appendChild(li);
    }

    document.querySelector('#see-live').href = projects[a].liveVersion;
    document.querySelector('#see-live').target = '_blank';

    document.querySelector('#see-source').href = projects[a].linkSource;
    document.querySelector('#see-source').target = '_blank';
  });
}

span.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Accordion setting
const acc = document.querySelector('#accordion');
const panel = document.querySelector('#panel');

acc.addEventListener('click', () => {
  acc.classList.toggle('change');

  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'block';
  }
});

// Hide panel when link clicked
const panelLinks = document.querySelectorAll('.drop-link');

for (let i = 0; i < panelLinks.length; i += 1) {
  panelLinks[i].addEventListener('click', () => {
    panel.style.display = 'none';
    acc.classList.toggle('change');
  });
}

// Performing desktop form validation
const deskButton = document.querySelector('#touch-btn');
deskButton.addEventListener('click', () => {
  const em = document.querySelector('#desktop-form #email');
  if (em.value === String(em.value).toLowerCase()) {
    document.querySelector('#desktop-form').action = 'https://formspree.io/f/moqzdnpo';
    document.querySelector('#desktop-form').method = 'post';
    document.querySelector('#desktop-form').submit();
  } else {
    document.querySelector('#desktop-validation').innerHTML = "<span class='material-symbols-outlined'>cancel</span><h3>e-mail should be in lower case. Please try again after correction</h3>";
  }
});

// Performing mobile form validation
const mobileButton = document.querySelector('#mob-touch-btn');
mobileButton.addEventListener('click', () => {
  const em = document.querySelector('#mobile-form #email');
  if (em.value === String(em.value).toLowerCase()) {
    document.querySelector('#mobile-form').action = 'https://formspree.io/f/moqzdnpo';
    document.querySelector('#mobile-form').method = 'post';
    document.querySelector('#mobile-form').submit();
  } else {
    document.querySelector('#mobile-validation').innerHTML = "<span class='material-symbols-outlined'>cancel</span><h3>e-mail should be in lower case. Please try again after correction</h3>";
  }
});
