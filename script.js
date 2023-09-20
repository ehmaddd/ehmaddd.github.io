const projects = [
  {
    image: ['./images/coordinate.jpg',],
    title: 'Coordinate Fetch App',
    languages: ['REACT', 'REDUX', 'CSS3'],
    details: `<br><br>Redux Coordinate Fetch App is a website fetches data for major cities for the selected province.<br><br>The main features include :<br>&nbsp;&nbsp;&nbsp;* Working with live data from AccuWeather<br>&nbsp;&nbsp;&nbsp;* Use of API to fetch data<br>&nbsp;&nbsp;&nbsp;* Provides latitude and longitude info`,
    liveVersion: 'https://react-coordinate-app.onrender.com/',
    linkSource: 'https://github.com/ehmaddd/react-coordinate-app',
  },
  {
    image: ['./images/space.jpg',],
    title: 'Space Travelers Hub',
    languages: ['REACT', 'REDUX', 'CSS3'],
    details: `Space Traveler's Hub is a web application allows to book/cancel rockets and join/leave for space mission.<br><br>
    The key features are :<br>
    &nbsp;&nbsp;&nbsp;* Based on Rest API<br>
    &nbsp;&nbsp;&nbsp;* Data fetch from SpaceX APIspace travel services<br>
    &nbsp;&nbsp;&nbsp;* Local State management<br>`,
    liveVersion: 'https://react-redux-group-project-green.vercel.app/',
    linkSource: 'https://github.com/ehmaddd/space-travelers-hub',
  },
  {
    image: ['./images/math.jpg',],
    title: 'Math Magician',
    languages: ['REACT', 'ES6', 'CSS3'],
    details: `Math Magician is a Single Page Application which allows the the use of virtual calculator.<br>
    <br>The key features are :<br>
    &nbsp;&nbsp;&nbsp;* Performing Basic mathematical calculations<br>
    &nbsp;&nbsp;&nbsp;* Displaying quotation<br>
    &nbsp;&nbsp;&nbsp;* Based on Rest API`,
    liveVersion: 'https://math-magician-k8i5.onrender.com/',
    linkSource: 'https://github.com/ehmaddd/math-magician',
  },
  {
    image: ['./images/book.jpg'],
    title: 'Bookstore',
    languages: ['REACT', 'CSS3', 'HTML5'],
    details: `Book Store is a Single Page Application which allows the user to deal with the books in a library.<br>
    <br>
    The key features are :<br>
    &nbsp;&nbsp;&nbsp;* Getting information about a book<br>
    &nbsp;&nbsp;&nbsp;* Checking Book status<br>
    &nbsp;&nbsp;&nbsp;* Changing book particulars`,
    liveVersion: 'https://book-store-modj.onrender.com/',
    linkSource: 'https://github.com/ehmaddd/bookstore',
  },
  {
    image: ['./images/movie.jpg'],
    title: 'Movie Show',
    languages: ['ES6', 'CSS3', 'HTML5'],
    details: `The Movie Show app allows to get information about the latest movies and put an impression on them.<br>
    <br>
    The key features are :<br>
    &nbsp;&nbsp;&nbsp;* To show information<br>
    &nbsp;&nbsp;&nbsp;* Like<br>
    &nbsp;&nbsp;&nbsp;* Comment`,
    liveVersion: 'https://ehmaddd.github.io/Movie-Show-API-Based/dist/',
    linkSource: 'https://github.com/ehmaddd/Movie-Show-API-Based',
  },
  {
    image: ['./images/budget.jpg'],
    title: 'Budget App',
    languages: ['RAILS', 'CSS3', 'ES6'],
    details: `This app is budget management app, in which you can estimatate the monthly food budget.<br>
    <br>
    The key features are :<br>
    &nbsp;&nbsp;&nbsp;* Add the categories<br>
    &nbsp;&nbsp;&nbsp;* Add deals for each category<br>
    &nbsp;&nbsp;&nbsp;* Spent amount total`,
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
const form = document.querySelector('#desktop-form');
const fields = form.querySelectorAll('input, textarea');
let currentFieldIndex = 0; // Track the current field being validated

deskButton.addEventListener('click', (e) => {
  e.preventDefault();

  const field = fields[currentFieldIndex];
  const value = field.value.trim();

  // Check if the field is required and empty
  if (field.hasAttribute('required') && value === '') {
    alert(`Please fill in the ${field.getAttribute('placeholder')} field.`);
    field.focus();
    return; // Stop further validation
  }

  // Additional validation for specific fields
  if (field.id === 'email') {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(value)) {
      alert('Email should be in a valid format');
      field.focus();
      return; // Stop further validation
    }
  }

  // Move to the next field
  currentFieldIndex++;

  // If all fields have been validated, submit the form
  if (currentFieldIndex === fields.length) {
    form.action = 'https://formspree.io/f/moqzdnpo';
    form.method = 'post';
    form.submit();
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
