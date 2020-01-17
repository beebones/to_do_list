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

    gerarTarefa(valorDigitado, listaTarefas.length - 1);
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

function mostrarNaTela(listaTarefas) {
    // for(let item of listaTarefas) {
    //     gerarTarefa(item);
    // }
    board.innerHTML = "";
    listaTarefas.forEach(function(valor, posicao) {
        gerarTarefa(valor, posicao);
    })
}

function gerarTarefa(valorDigitado, posicao) {
    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa');
    tarefa.setAttribute('posicao',posicao);

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

    imgCheck.onclick = function(e) {
        // let tarefaPai = event.target.parentNode.parentNode;
        // tarefaPai.remove();

        let posicaoTarefa = tarefa.getAttribute('posicao');
        listaTarefas = listaTarefas.filter(function(valor, posicao) {
            return posicao != posicaoTarefa;
        });
        mostrarNaTela(listaTarefas);
        localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
        tarefa.remove();
    }

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
}

//remover

function remove() {
    let botaoClickado = event.target
    let parent = target.parentElement;

}