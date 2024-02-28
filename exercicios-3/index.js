class User{
  constructor(name = "", installments = 0, debt = 0.0){
    this.name = name;
    this.installments = installments;
    this.debt = debt;
  }
  setName(name){
    this.name = name;
  }
  setInstallments(installments){
    this.installments = installments;
  }
  setDebt(debt){
    this.debt = debt;
  }
  calculate(){
    switch (this.installments) {
      case 2:
        alert("Resultado: " + this.debt/2);
        break;
      case 3:
        alert("Resultado: " + this.debt/3);
        break;
      case 4:
        alert("Resultado: " + this.debt/4);
        break;
      case 5:
        alert("Resultado: " + this.debt/5);
        break;
      case 6:
        alert("Resultado: " + this.debt/6);
        break;
      default:
        alert(this.name + ", o número máximo de parcelas é 6! Por favor, insira um número de parcelas válido.");
    }
  }
}

let client = new User();

function dados() {
  let text = "";
  let name = prompt("Por favor, insira seu nome: ", "Coder Estudante");
  client.setName(name);

  if (client.name == null || client.name == "") {
    text = "Usuário cancelou a simulação.";
  } else {
    text = "Olá, " + client.name + "! " + "Vamos iniciar a simulação das parcelas. ";
    document.getElementById("text").innerHTML = text;
  }
}

function parcelas() {
  if(client.name == ""){
    // Validação para não quebrar a mensagem default do switch.
    client.setName("Coder Estudante");
  }

  let installments = "";
  let debt = parseFloat(prompt("Inserir o valor total a ser dividido: "));
  client.setDebt(debt);

  do {
    installments = prompt("Em quantas vezes deseja parcelar (min 2, max. 6x)?: \nOBS: Digite 'sair' para cancelar a operação.");
    if(installments != "sair"){
      client.setInstallments(installments);
      client.installments = parseFloat(client.installments);
      client.calculate();
      console.log(client.installments);
    }
  }while (installments != "sair");
}
