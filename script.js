/*
    Tarefa de DOM
    Calculadora de Média de Notas

    Autor: Cláudio Pires Salgado
*/

// ----------------- Variáveis com Elementos HTML -----------------

// Tag <input> para a entrada da Nota
let input = document.querySelector(".grade-input");

// Tag <div> para ilustrar as Notas adicionadas
let showDiv = document.querySelector(".show-grades");

// Tag <button> para adicionar uma nova Nota
let btnAdd = document.querySelector(".btn-add");

// Tag <button> para calcular a média das Notas adicionadas
let btnCal = document.querySelector(".btn-calculate");

// Tag <p> para mostrar a média final calculada
let resultText = document.querySelector(".average-text")

// ----------------- Variáveis auxiliares -----------------
// Total de Notas inseridas 
let total = 0;

// Array com as Notas inseridas
let grades = []

// Função de Tratamento para o Botão de Adição de Notas
function addBtnTreat() {
    
    let entry = input.value.trim();

    // Tratanto tag <input> vazia (sem 'value')
    if (entry === "") {
        alert("Por favor, insira uma nota");
        return;
    }

    // Tratamento para aceitar Números com vírgula
    entry = entry.replace(",",".");
    entry = Number(entry);

    // Tratamento para Entradas inválidas
    if (Number.isNaN(entry) || (entry < 0 || entry > 10)) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }

    // Criação e Adição de um Elemento para ilustrar Nota adicionada
    let text = document.createElement("p");
    total++;
    text.innerText = "A nota " + total + " foi " + entry.toFixed(2) + "."
    showDiv.append(text)

    // Adição da Nota ao Array
    grades.push(entry)
}

// Função de Tratamento para o Botão de Cálculo da Média
function calcBtnTreat() {

    // Tratamento para o caso de não haver Notas para o Cálculo
    if (grades.length == 0) {
        alert("Insira ao menos 1 nota para poder calcular uma média")
    }

    else {

        // Cálculo da Média
        let media = grades.reduce((soma, numero) => soma + numero, 0) / grades.length;
        
        // Alterando o texto da tag <p> para mostrar a Média Final Calculada (Aproximada)
        resultText.innerText = "A média é: " + media.toFixed(2);;
    }
}

// ----------------- Adição dos Eventos aos Botões -----------------
// Botão de Adicionar Nota
btnAdd.addEventListener("click", () => (addBtnTreat()))

// Botão de Cálculo da Média
btnCal.addEventListener("click", () => (calcBtnTreat()))