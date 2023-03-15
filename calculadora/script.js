function inserir(value) {
    document.getElementById("resultado").value += value;
}

function limpar(){
    document.getElementById("resultado").value = "";
}

function calcular() {
    var input = document.getElementById("resultado").value;
    var result = eval(input);
    document.getElementById("resultado").value = result;
}