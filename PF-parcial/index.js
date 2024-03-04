class User{
  constructor(name = "", installments = 0, debt = 0.0, totalInstallments = []){
    this.name = name;
    this.installments = installments;
    this.debt = debt;
    this.totalInstallments = totalInstallments;
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
  getTotalInstallments(){
    return this.totalInstallments;
  }
  calculate(){
    switch (this.installments) {
      case 2:
        alert("Resultado: " + this.debt/2);
        this.totalInstallments.push({nInstallment: 2, installments: this.debt/2});
        break;
      case 3:
        alert("Resultado: " + this.debt/3);
        this.totalInstallments.push({nInstallment: 3, installments: this.debt/3});
        break;
      case 4:
        alert("Resultado: " + this.debt/4);
        this.totalInstallments.push({nInstallment: 4, installments: this.debt/4});
        break;
      case 5:
        alert("Resultado: " + this.debt/5);
        this.totalInstallments.push({nInstallment: 5, installments: this.debt/5});
        break;
      case 6:
        alert("Resultado: " + this.debt/6);
        this.totalInstallments.push({nInstallment: 6, installments: this.debt/6});
        break;
      default:
        alert(this.name + ", o número mínimo de parcelas é 2 e o máximo é 6! Por favor, insira um número de parcelas válido.");
    }
  }
}

let client = new User();
const interestRate = 0.05;

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

function computeInterestRate(debt = 0, installments = 0){
  return debt * Math.pow(1 + interestRate, installments);
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
  // alert(computeInterestRate(1000, 5));
  // alert(
  //   client.totalInstallments.forEach(
  //     (o) => {
  //       if(o.installments > 3){
  //         computeInterestRate(o.debt, o.installments); 
  //       }
  //     }
  //   )
  // );
  client.totalInstallments.forEach(
    (o) => {
      alert(
        "Total: " + client.debt +
        "\nParcelas: " + o.nInstallment + 
        "\nValor mensal: " + o.installments
      )
    }  
  );
}
