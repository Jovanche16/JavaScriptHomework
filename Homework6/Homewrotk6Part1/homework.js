
let h1Elements = document.querySelectorAll('h1');
for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].innerText = 'I changed the H1s';
}

let h3Elements = document.querySelectorAll('h3');
for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].innerText = 'I changed the H3s too!';
}

let pElements = document.querySelectorAll('p');
for (let i = 0; i < pElements.length; i++) {
    pElements[i].innerText = 'I didn\'t forget to change the paragraphs either.';
}
