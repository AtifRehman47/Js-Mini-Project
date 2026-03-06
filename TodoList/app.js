let input = document.querySelector('.input');
let ul = document.querySelector('.ul')

function add() {
    let li = document.createElement('li')
    li.innerHTML = input.value 

    ul.appendChild(li)

    input.value = ''
}