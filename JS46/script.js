//console.log(document.body);
//console.log(document.documentElement);

// Узлы, которые являются детьми у body
//console.log(document.body.childNodes);

//получение первого и последнего ребёнка ноду
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

//получаем родительский узел
//console.log(document.querySelector('#current').parentNode);
//console.log(document.querySelector('#current').parentNode.parentNode);

//получение атрибута из HTML. Следующий сосед - нода
//console.log(document.querySelector('[data-current="3"]').nextSibling);

//получение атрибута из HTML. Предыдущий сосед - нода
//console.log(document.querySelector('[data-current="3"]').previousSibling);

//получение атрибута из HTML. Следующий сосед - элемент
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

//получаем родительский Элемент
//console.log(document.querySelector('#current').parentElement);

//получение первого и последнего ребёнка элемент
//console.log(document.body.firstElementChild);
//console.log(document.body.lastElementChild);

//перебор дочерних нод и отбор только элементов
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}