'use strict';

let footerSort = 'all';
let TODOITEMSCONTAINER = document.querySelector('.todo-items-container');
let TODOITEMS = [
    {text: 'Slap AbdulQudus', timeStamp: Date.now(), isCompleted: true},
    {text: 'Have Breakfast', timeStamp: Date.now(), isCompleted: false},
    {text: 'Read Mechanics', timeStamp: Date.now(), isCompleted: false},
    {text: 'Listen to Music', timeStamp: Date.now(), isCompleted: true},
    {text: 'I\'m siting on the throne', timeStamp: Date.now(), isCompleted: false},
    {text: 'Be grateful', timeStamp: Date.now(), isCompleted: true},
]

document.addEventListener('DOMContentLoaded', () => {
    buildTodoItemsArea(TODOITEMS, footerSort);
});

document.querySelector('.theme-switcher').addEventListener('click', e => {
    let image = e.currentTarget.querySelector('img');
    e.preventDefault();
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
        image.src = image.src.replace('sun', 'moon');
    }else{
        document.body.classList.add('dark');
        image.src = image.src.replace('moon', 'sun');
    }
});

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    TODOITEMS.unshift({text: e.currentTarget.querySelector('input').value, timeStamp: Date.now(), isCompleted: false});
    buildTodoItemsArea(TODOITEMS, 'all');
    e.currentTarget.querySelector('input').value = '';
}

function sortListItems(items, operation){
    let validTodoItems = [];

    switch (operation) {
        case 'all':
            validTodoItems = items;
            break;
        case 'completed':
            validTodoItems = items.filter(element => element.isCompleted);
            break;
        case 'active':
            validTodoItems = items.filter(element => !element.isCompleted);
            break;
        case 'clear':
            TODOITEMS = items.filter(element => !element.isCompleted);
            validTodoItems = TODOITEMS;
            break;
        default:
            TODOITEMS = items.filter(element => operation[operation.length - 1] != TODOITEMS.indexOf(element));
            validTodoItems = TODOITEMS;
    }
    footerSort = operation;
    return validTodoItems;
}

function buildTodoItemsArea(TODOS, sort, isFirstBuild){
    let todoContainerHTML = '';
    const FOOTER_HTML = (sort) => `
    <footer>
        <div><span class = 'items-remaining'>2</span> items left</div>
        <ul>
            <li data-sort="all" class = ${sort === 'all' && 'active'}>All</li>
            <li data-sort="active"class = ${sort === 'active' && 'active'}>Active</li>
            <li style = 'margin: 0;' data-sort="completed" class = ${sort === 'completed' && 'active'}>Completed</li>
        </ul>
        <div>
            <li style = 'margin: 0;' data-sort="clear">Clear Completed</li>
        </div>
    </footer>`;

    const ITEM_GENERATOR = (item, index) =>
    `<div class="todo-item inputDiv ${item.isCompleted && 'done'}" data-index = "${'item-'+index}">
        <div class="custom-checkbox-container"> 
        <div class="custom-checkbox ${item.isCompleted && 'checked'}">
            <input type="checkbox" name="" id="" checked = ${item.isCompleted}>
            <img src="./images/icon-check.svg" alt="">
        </div>
        </div>
        <p>${item.text}</p>
        <div class = 'remove-todo-icon-container'>
            <img class= 'remove-todo-icon' src = './images/icon-cross.svg' alt = 'remove todo item'/>
        </div>
    </div>`;

    TODOS.forEach((item, index) => todoContainerHTML += ITEM_GENERATOR(item, index));

    TODOITEMSCONTAINER.innerHTML = todoContainerHTML + FOOTER_HTML(sort);
    
    document.querySelector('.items-remaining').textContent = TODOITEMS.filter(a => !a.isCompleted).length.toString();
    document.querySelectorAll('.custom-checkbox-container').forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            var checkboxindex = checkbox.parentElement.dataset.index[checkbox.parentElement.dataset.index.length - 1];
            TODOS[checkboxindex].isCompleted = !TODOS[checkboxindex].isCompleted;
            buildTodoItemsArea(TODOS, false, footerSort);
        });
    });

    functionButtons('footer li');
    if(isFirstBuild){
        functionButtons('.mobile-only li');
    }

    document.querySelectorAll('.remove-todo-icon').forEach(icon => icon.onclick = () => {
        var todoElementIndex = icon.parentElement.parentElement.dataset.index[icon.parentElement.parentElement.dataset.index.length - 1];
        var validTodoItems = sortListItems(TODOITEMS, 'remove'+todoElementIndex);
        buildTodoItemsArea(validTodoItems, footerSort);
    })

    function functionButtons(string) {
        document.querySelectorAll(string).forEach(listItem => {
            listItem.addEventListener('click', () => {
                let validTodoItems = sortListItems(TODOITEMS, listItem.dataset.sort);
                console.log(validTodoItems);
                buildTodoItemsArea(validTodoItems, false, footerSort);
            });
        });
    }
}