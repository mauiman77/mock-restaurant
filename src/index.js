import './style.css';
import { title } from './homeContent';
import { menu } from './menuContent';

const mainSection = document.getElementById('content');

const subSections = {
  home: 'active',
  menu: 'hidden',
  contact: 'hidden'
}

function clearContent () {
  const toClear = document.querySelector('.main');
  toClear.innerHTML = '';
  return toClear;
}

function changeContent () {
  const mainAppend = clearContent()
  const menuContent = document.createElement('div');
  menuContent.className = contentIdentifier();
  mainAppend.appendChild(menuContent)
  // title(homeContent);
  menu(menuContent)
}

function generateContent (contentToAdd) {
  if (contentToAdd === 'home') {

  }
}

function contentIdentifier () {
  if (subSections.home === 'active') {
    return 'home-content';
  }
  else if (subSections.menu === 'active') {
    return 'menu-content';
  }
  else if (subSections.contact === 'active') {
    return 'contact-content';
  }
  else {
    return 'home-content';
  }
}

function getObjectKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

function switchContent (id) {
  const toChange = getObjectKey(subSections, 'active')
  subSections[toChange] = 'hidden'
  subSections[id] = 'active'
  changeContent()
  contentIdentifier()
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
  const btnIds = ['home', 'menu', 'contact']
  for (let i = 0; i < 3; i++) {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.setAttribute('id', btnIds[i]);
    btn.addEventListener('click', (e) => switchContent(e.target.id))
    const textToAdd = btnTexts[i];
    btn.textContent = textToAdd;
    headerButtons.appendChild(btn)
  }

  return headerButtons;
}

function bodySection () {
  const bodyContent = document.createElement('div');
  bodyContent.classList.add('main');

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