import './style.css';



function titleTop () {
  const titleTop = document.createElement('div');
  titleTop.classList.add('titleContainer');
  const titleText = document.createElement('h1');
  titleText.classList.add('title');
  titleText.textContent = 'Welcome to Aye-ce Creams!'
  titleTop.appendChild(titleText)
  return titleTop
}

function bulletPointText (toAppend) {
  const ulAppend = document.createElement('ul');
  toAppend.appendChild(ulAppend)
  const texts = ['The #1 Ice Cream store in Isnyreilshire', 'We have 100 penguins making your deserts with love', 'Working hard since 1877', 'And lying since I stared this project!'];
  for (let i = 0; i < 4; i++) {
    const liAppend = document.createElement('li');
    liAppend.textContent = `${texts[i]}`;
    ulAppend.appendChild(liAppend);
  }
  return toAppend;
}

function titleBottom () {
  const titleBottom = document.createElement('div');
  titleBottom.classList.add('titleContainerBottom');
  const bulletPointSection = document.createElement('div');
  bulletPointSection.classList.add('bulletPointsSection');
  const visitUs = document.createElement('div');
  visitUs.classList.add('visitUs');

  bulletPointText(bulletPointSection);
  visitUs.textContent = 'Visit us or shop online!'

  titleBottom.appendChild(bulletPointSection);
  titleBottom.appendChild(visitUs);

  return titleBottom
}

function title (toAppend) {
  toAppend.appendChild(titleTop());
  toAppend.appendChild(titleBottom());
  return toAppend;
}

export {title}