const prompt = require('prompt-sync')({ sigint: true });

const nome = prompt("Forneça seu nome: ");

let idade = prompt("Forneça sua idade: ");
idade = parseInt(idade, 10);

const nome_idade = nome + idade;

console.log("Seu nome é:     " + nome);
console.log("Sua idade é:    " + idade);
console.log("Seu nickname é: " + nome_idade);