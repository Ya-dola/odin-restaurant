import {resetContent} from "./content";
import displayHome from "./home";
import displayContact from "./contact";

const NAVPAGES = Object.freeze({
                                   Home: {id: 'Home', name: 'Home'},
                                   Menu: {id: 'Menu', name: 'Menu'},
                                   Contact: {id: 'Contact', name: 'Contact Us'}
                               });

const VISIBLEATTR = Object.freeze('visible');

function displayHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    header.appendChild(displayLeftDiv());
    header.appendChild(displayNavLinks());

    return header;
}

function displayLeftDiv() {
    const divLeft = document.createElement('div');
    divLeft.classList.add('left');

    const icon = document.createElement('div');
    icon.classList.add('icon');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Thicc' Crispies";

    divLeft.appendChild(icon);
    divLeft.appendChild(title);

    return divLeft;
}

function displayNavLinks() {
    const navLinks = document.createElement('nav');
    navLinks.classList.add('nav-links');

    navLinks.appendChild(displayNavGroup(NAVPAGES.Home));
    navLinks.appendChild(displayNavGroup(NAVPAGES.Menu));
    navLinks.appendChild(displayNavGroup(NAVPAGES.Contact));

    return navLinks;
}

function displayNavGroup(navPage) {
    const navGroup = document.createElement('div');
    navGroup.classList.add('nav-group');

    const btnLink = document.createElement('button');
    btnLink.id = `btn${navPage.id}`;
    btnLink.classList.add('link');
    btnLink.textContent = navPage.name;

    // Add Event Listener to Load Accordingly

    btnLink.addEventListener('click', (evt) => {
        // Do Nothing if the Btn is already Clicked
        if (evt.target.nextElementSibling.classList.contains(VISIBLEATTR)) return;

        setActiveNavGroup(btnLink);
        loadContent(navPage);
    });

    const symbol = document.createElement('span');
    symbol.id = `sym${navPage.id}`;
    symbol.classList.add('active-symbol');

    navGroup.appendChild(btnLink);
    navGroup.appendChild(symbol);

    return navGroup;
}

function setActiveNavGroup(activeBtn) {
    const btns = document.querySelectorAll('.link');

    btns.forEach((btn) => {
        const btnSymClassList = btn.nextElementSibling.classList;
        btnSymClassList.toggle(VISIBLEATTR, btn === activeBtn && !btnSymClassList.contains(VISIBLEATTR));
    });
}

function loadContent(navPage) {
    resetContent();

    switch (navPage) {
        case NAVPAGES.Menu:
            // displayMenu();
            break;
        case NAVPAGES.Contact:
            displayContact();
            break;
        default:
            displayHome();
            break;
    }
}

export default displayHeader;
export {setActiveNavGroup};