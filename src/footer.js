function displayFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const div = document.createElement('div');
    const textNode = document.createTextNode('Copyright \u00A9 The Odin Project - ');

    const gitLink = document.createElement('a');
    gitLink.href = 'https://github.com/Ya-dola';
    gitLink.textContent = 'Aadil Edition';

    div.appendChild(textNode);
    div.appendChild(gitLink);

    footer.appendChild(div);

    return footer;
}

export default displayFooter;
