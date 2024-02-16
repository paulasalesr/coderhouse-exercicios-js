function dados() {
  let cliente = prompt("Por favor, insira seu nome: ", "Coder Estudante");
  let text;
  if (cliente == null || cliente == "") {
    text = "Usuário cancelou a simulação.";
  } else {
    text =
      "Olá, " + cliente + "! " + "Vamos iniciar a simulação das parcelas. ";
    document.getElementById("text").innerHTML = text;
  }
}

function parcelas() {
  let nParcelas = "";
  let montante = parseInt(prompt("Inserir o valor total a ser dividido: "));
  do {
    nParcelas = prompt("Em quantas vezes deseja parcelar (max. 6x)?: \nOBS: Digite 'sair' para cancelar a operação.");
    if(nParcelas != "sair"){
      nParcelas = parseInt(nParcelas);
      switch (nParcelas) {
        case 2:
          console.log(nParcelas);
          alert("Resultado: " + montante/2);
          break;
        case 3:
          alert("Resultado: " + montante/3);
          break;
        case 4:
          alert("Resultado: " + montante/4);
          break;
        case 5:
          alert("Resultado: " + montante/5);
          break;
        case 6:
          alert("Resultado: " + montante/6);
          break;
        default:
          alert("O número máximo de parcelas é 6! Insira um nParcelas válido.");
          break;
      }
    }
  }while (nParcelas != "sair");
}
