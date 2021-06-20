'use strict';

const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
console.log(taskList);
let html = document.createElement('div');
html.classList.add('task');

console.log(input);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask(e);
    }
});
button.addEventListener('click', addTask);


function addTask(e) {
    e.preventDefault();
    html.innerHTML = `<div class="task__title">
    ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>`;
    console.log(html);
    taskList.insertAdjacentHTML('beforeEnd', `<div class="task">
    <div class="task__title">
    ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`);
    input.value = '';
    const removeList = taskList.querySelectorAll('.task__remove');
    removeList[removeList.length - 1].addEventListener('click', function () {
        this.closest('.task').remove();
    })
}