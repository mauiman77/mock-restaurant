import './style.css';


  function title () {
    const titleTop = document.createElement('div');
    titleTop.classList.add('titleContainer');
    const titleText = document.createElement('h1');
    titleText.classList.add('title');
    titleText.textContent = 'Welcome to Aye-ce Creams!'
    titleTop.appendChild(titleText)
    return titleTop
  }


export {title}