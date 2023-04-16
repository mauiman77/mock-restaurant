import './style.css';

const mainSection = document.getElementById('content');
const subSections = {
  home: 'hidden',
  menu: 'hidden',
  contact: 'active'
}

function generateContent() {
  const homeContent = document.createElement('div');
  if (subSections.home === 'active') {
    homeContent.classList.add('home-content');
  
    return homeContent;
  }
  else if (subSections.menu === 'active') {
    homeContent.classList.add('menu-content');

    return homeContent;
  }
  else if (subSections.contact === 'active') {
    homeContent.classList.add('contact-content');

    return homeContent;
  }
  else {
    console.log('error')
    return homeContent.classList.add('home-content');
  }
}

function headerSection () {
  const siteHeader = document.createElement('div');
  siteHeader.classList.add('header');
  siteHeader.appendChild(headerSectionTitle());
  siteHeader.appendChild(headerSectionButtons())

  return siteHeader;
}

function headerSectionTitle () {
  const headerTitle = document.createElement('div');
  headerTitle.classList.add('title')
  headerTitle.textContent = 'Aye-ce Creams';

  return headerTitle;
}

function headerSectionButtons () {
  const headerButtons = document.createElement('div');
  headerButtons.classList.add('buttons');
  const btnTexts = ['Home', 'Menu', 'Contact'];
  for (let i = 0; i < 3; i++) {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    const textToAdd = btnTexts[i];
    btn.textContent = textToAdd;
    headerButtons.appendChild(btn)
  }

  return headerButtons;
}

function bodySection () {
  const bodyContent = document.createElement('div');
  bodyContent.classList.add('main');
  bodyContent.appendChild(generateContent());

  return bodyContent;
}

function footerSection () {
  const footerContent = document.createElement('div');
  footerContent.classList.add('footer');
  footerContent.textContent = 'Credit to https://www.pexels.com/@goumbik/';

  return footerContent;
}

mainSection.appendChild(headerSection());
mainSection.appendChild(bodySection());
mainSection.appendChild(footerSection());