import './style.css';

const mainSection = document.getElementById('content');

function headerSection () {
  const siteHeader = document.createElement('div');
  siteHeader.classList.add('header');
  siteHeader.textContent = 'Test!Test!';

  return siteHeader;
}

function bodySection () {
  const bodyContent = document.createElement('div');
  bodyContent.classList.add('main');
  bodyContent.textContent = 'Hello!!'

  return bodyContent;
}

function footerSection () {
  const footerContent = document.createElement('div');
  footerContent.classList.add('footer');
  footerContent.textContent = 'Footer footer!';

  return footerContent;
}

mainSection.appendChild(headerSection());
mainSection.appendChild(bodySection());
mainSection.appendChild(footerSection());