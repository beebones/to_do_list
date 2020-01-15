let board = document.getElementById('board');
let buttonAdd = document.getElementById('add');
let inputAdd = document.getElementById('novaTarefa');
let listaTarefas = [];

if(localStorage.getItem('listaTarefas')) {
    listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
} else {
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}
mostrarNaTela(listaTarefas);

buttonAdd.onclick = function() {
    let valorDigitado = inputAdd.value;
    listaTarefas.push(valorDigitado);

    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa');

    let titulo = document.createElement('div');
    titulo.setAttribute('class', 'col-md-8');
    titulo.textContent = valorDigitado;

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class', 'col-md-2');
    buttonCheck.textContent = "check";

    let imgCheck = document.createElement('img');
    imgCheck.setAttribute('class','icon');
    imgCheck.setAttribute('src', 'img/check-mark.png');

    buttonCheck.appendChild(imgCheck);

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

function mostrarNaTela(listaTarefas) {
    for(let item of listaTarefas) {
        gerarTarefa(item);
    }
}

function gerarTarefa(valorDigitado) {
    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa');

    let titulo = document.createElement('div');
    titulo.setAttribute('class', 'col-md-8');
    titulo.textContent = valorDigitado;

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class', 'col-md-2');
    buttonCheck.textContent = "check";

    let imgCheck = document.createElement('img');
    imgCheck.setAttribute('class','icon');
    imgCheck.setAttribute('src', 'img/check-mark.png');

    buttonCheck.appendChild(imgCheck);

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
}