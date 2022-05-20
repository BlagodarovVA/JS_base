const div = document.createElement('div');
const header = document.createElement('h1');
header.innerText = 'Василий!';
header.classList.add('test');
const a = document.createElement('a');
a.href = 'https://learn.javascript.ru/';
a.innerText = 'Современный учебник JS';

div.appendChild(header);
div.appendChild(a);
document.body.appendChild(div);


const aTag = document.querySelector('a');
console.log(aTag);

aTag.addEventListener('click', function (e) {
    e.preventDefault();
    window.location = 'https://learn.javascript.ru/';
    console.log('test');
});

const pTags = document.querySelectorAll('p');
pTags.forEach(pTag => {
    pTag.addEventListener('click', function () {
        console.log('TEST!!');
    });
});

