import {setActiveNavGroup} from "./header";

function displayHome() {
    const content = document.getElementById('content');
    content.classList.add('home-bg');

    const divHome = document.createElement('div');
    divHome.classList.add('home');

    const divBlurCard = document.createElement('div');
    divBlurCard.classList.add('blur-card');

    const h1Cta = document.createElement('h1');
    h1Cta.textContent = 'Craving the perfect crunch?';

    const h2Txt = document.createElement('h2');
    h2Txt.textContent = 'Look no further!';

    const h1FollowUp = document.createElement('h1');
    h1FollowUp.textContent = 'The Juiciest of Meals are HERE!!!';

    divBlurCard.appendChild(h1Cta);
    divBlurCard.appendChild(h2Txt);
    divBlurCard.appendChild(h1FollowUp);

    const btn = document.createElement('button');
    btn.classList.add('action');
    btn.textContent = 'Check Menu Out';

    btn.addEventListener('click', () => {
        const btnMenu = document.getElementById('btnMenu');

        setActiveNavGroup(btnMenu);
        // displayMenu();
    });

    divHome.appendChild(divBlurCard);
    divHome.appendChild(btn);

    content.appendChild(divHome);
}

export default displayHome;
