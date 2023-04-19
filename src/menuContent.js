import './style.css';

function menuTop () {
  const menuTop = document.createElement('div');
  menuTop.classList.add('menuTop');
  menuTop.textContent = 'Hello';
  return menuTop;
}

function menuBottom () {
  const menuBottom = document.createElement('div');
  menuBottom.classList.add('menuBottom');
  menuBottom.textContent = 'HIIIHIHI';
  return menuBottom;
}

function menu (toAppend) {
  toAppend.appendChild(menuTop());
  toAppend.appendChild(menuBottom());
  return toAppend;
}

export {menu};