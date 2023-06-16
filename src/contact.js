import locationPng from './imgs/location.png';

function displayContact() {
    const locationTxt = "62441 Military City Road, Khamis Mushait";

    const content = document.getElementById('content');
    content.classList.add('contact-bg');

    const contact = document.createElement('div');
    contact.classList.add('contact-us');

    const divBlurCard = document.createElement('div');
    divBlurCard.classList.add('blur-card');

    const divInfoHolder = document.createElement('div');
    divInfoHolder.classList.add('info-holder');

    divInfoHolder.appendChild(displayInfo('📞', '(+966)-50-219-4686'));
    divInfoHolder.appendChild(displayInfo('📌', locationTxt));

    const imgLocation = document.createElement('img');
    imgLocation.classList.add('location-img');
    imgLocation.alt = locationTxt;
    imgLocation.src = locationPng;

    divBlurCard.appendChild(divInfoHolder);
    divBlurCard.appendChild(imgLocation);

    contact.appendChild(divBlurCard);

    content.appendChild(contact);
}

function displayInfo(symbol, text) {
    const divInfo = document.createElement('div');
    divInfo.classList.add('info');

    const divSymbol = document.createElement('div');
    divSymbol.classList.add('symbol');
    divSymbol.textContent = symbol;

    const divText = document.createElement('div');
    divText.classList.add('txt');
    divText.textContent = text;

    divInfo.appendChild(divSymbol);
    divInfo.appendChild(divText);

    return divInfo;
}

export default displayContact;
