const projects = [
  {
    image: ['./images/proj-1-1.png', './images/proj-1-2.png', './images/proj-1-3.png', './images/proj-1-4.png'],
    title: 'Global Summit 2015',
    languages: ['HTML5', 'CSS3', 'ES6'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io/online-conference/',
    linkSource: 'https://github.com/ehmaddd/online-conference',
  },
  {
    image: './images/proj-2.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-3.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-4.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-5.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-6.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
];

let worksUl;
const modalUl = document.querySelector('#myModal ul');

// Populating Portfolio

const works = document.querySelectorAll('.work-sample');
for (let a = 0; a < works.length; a += 1) {
  if (a === 0) {
    let count = 0;
    setInterval(() => {
      document.querySelectorAll('.work-sample img')[a].src = projects[a].image[count];
      if (count < 3) {
        count += 1;
      } else {
        count = 0;
      }
    }, 2000);
  } else {
    document.querySelectorAll('.work-sample img')[a].src = projects[a].image;
  }

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

for (let a = 0; a < btn.length; a += 1) {
  btn[a].addEventListener('click', () => {
    modal.style.display = 'block';

    //document.querySelector('#myModal img').src = projects[a].image;
    //------------------
    if (a === 0) {
      let count = 0;
      setInterval(() => {
        document.querySelector('#myModal img').src = projects[a].image[count];
        if (count < 3) {
          count += 1;
        } else {
          count = 0;
        }
      }, 2000);
    } else {
      document.querySelector('#myModal img').src = projects[a].image;
    }
    //------------------

    document.querySelector('#myModal p').innerHTML = projects[a].details;
    document.querySelector('#myModal h4').innerHTML = projects[a].title;

    while (modalUl.firstChild) {
      modalUl.removeChild(modalUl.firstChild);
    }

    for (let b = 0; b < projects[a].languages.length; b += 1) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(projects[a].languages[b]));
      // li.setAttribute("id", "element4");
      modalUl.appendChild(li);
    }

    document.querySelector('#see-live').href = projects[a].liveVersion;
    document.querySelector('#see-source').href = projects[a].linkSource;
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