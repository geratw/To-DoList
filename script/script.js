document.querySelector("#buttonTask").onclick = function newElement() {

    var inputElement = document.querySelector('.newTask');
    var inputValue = inputElement.value;

    var listItem = document.createElement('li');
    listItem.classList.add('target');

    var labelElement = document.createElement('label');
    labelElement.classList.add('checkbox', 'style-d');

    var checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';

    var checkboxCheckmark = document.createElement('div');
    checkboxCheckmark.classList.add('checkbox__checkmark');

    var checkboxBody = document.createElement('div');
    checkboxBody.classList.add('checkbox__body');

    var textElement = document.createElement('p');

    textElement.classList.add('textTask');
    textElement.textContent = inputValue;

    var buttonElement = document.createElement('button');
    buttonElement.classList.add('buttonCross');
    buttonElement.id = 'buttonCross';

    var imgElement = document.createElement('img');
    imgElement.classList.add('cross');
    imgElement.addEventListener('click', eventHandler);
    imgElement.src = 'image/cross.png';
    imgElement.alt = 'X';

    labelElement.appendChild(textElement);
    labelElement.appendChild(checkboxInput);
    labelElement.appendChild(checkboxCheckmark);
    labelElement.appendChild(checkboxBody);
    buttonElement.appendChild(imgElement);

    listItem.appendChild(labelElement);
    listItem.appendChild(buttonElement);


    var list = document.getElementById('myUL');
    if (inputValue === '') {
        Swal.fire({
            title: 'You have to write something!',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    } else {
        list.appendChild(listItem);
    }
    document.getElementById("newTask").value = "";
}

//зачёркиваю текст, меняю фон
var listContainer = document.getElementById('myUL');
listContainer.addEventListener('change', function (event) {
    var target = event.target;

    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        var listItem = target.closest('li');
        var textElement = listItem.querySelector('.textTask');
        var buttonCross = listItem.querySelector('.buttonCross');
        if (target.checked) {
            textElement.style.textDecoration = 'line-through';
            listItem.style.backgroundColor = 'gray';
            buttonCross.style.backgroundColor = 'gray';
        } else {
            textElement.style.textDecoration = 'none';
            listItem.style.backgroundColor = '';
            buttonCross.style.backgroundColor = '';
        }
    }
});

// удаляю текущий li
const crossBtns = document.querySelectorAll('.cross');

function eventHandler(event) {
    const liElement = event.target.closest('li');
    if (liElement) {
        liElement.parentNode.removeChild(liElement);
    }
}

for (const btn of crossBtns) {
    btn.addEventListener('click', eventHandler);
}
