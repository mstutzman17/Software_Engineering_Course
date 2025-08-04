// Task 1

const task1 = document.getElementById("task1");

task1.innerText = "ATTENTION: The content of this paragraph has been changed.";

// Task 2

const task2 = document.getElementById('task2');

if (task2) {

    task2.innerHTML = '<form action="#" method="post"><button type="submit">Submit</button></form>'
}

// Task 3

document.body.style.backgroundColor = '#232323';

// Task 4

const items = document.querySelectorAll('.item');

items.forEach(item => {

    item.style.border = '1px solid black';
})

// Task 5

document.getElementById('task5').href = 'https://www.springboard.com/'

// Task 6

document.getElementById('task6').value = 'DOM Master';

// Task 7

document.getElementById('task7').classList.add('new-class');

// Task 8

const task8 = document.getElementById('task8')

const newButton = document.createElement('button');

newButton.textContent = 'New Button';

task8.appendChild(document.createElement('br'));

task8.appendChild(newButton);

// task8.insertAdjacentElement('afterend', newButton);

// Task 9

const task9 = document.getElementById('task9');
task9.remove();

// Extra Task (for readability)

document.body.style.color = '#e5e5e5'