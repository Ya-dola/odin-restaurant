const CONTENTATTR = Object.freeze('content');

function displayContent() {
    const content = document.createElement('main');
    content.id = 'content';
    content.classList.add(CONTENTATTR);

    return content;
}

function resetContent() {
    const content = document.getElementById('content');
    content.className = CONTENTATTR;
    content.innerHTML = '';
}

export default displayContent;
export {resetContent};
