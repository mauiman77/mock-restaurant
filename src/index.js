const mainBit = document.getElementById('content')

function component() {
    const siteHeader = document.createElement('div');
    siteHeader.className = 'header'
 
    siteHeader.textContent = 'Test!';
 
    return siteHeader;
}

mainBit.appendChild(component());