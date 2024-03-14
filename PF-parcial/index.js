class User{
  constructor(name = "", installments = 0, debt = 0.0, totalInstallments = [], maxInstallments = 10){
    this.minInstallments = 2;
    this.minInstallmentsFreeTax = 3;
    this.maxInstallments = maxInstallments;
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
    if(this.installments < this.minInstallments || this.installments > this.maxInstallments){
      alert(this.name + 
        ", o número mínimo de parcelas é " + 
        this.minInstallments + 
        " e o máximo é " + 
        this.maxInstallments + 
        "! Por favor, insira um número de parcelas válido."
      );
    }else{
      alert("Resultado: " + this.debt/this.installments);
      this.totalInstallments.push(
        {
          nInstallment: this.installments,
          installments: this.debt/this.installments,
          debtWithInterest: null,
          installmentWithInterest: null
        }
      );
    }
  }
}

let client = new User();
const interestRate = 0.05;

function dados() {
  let text = "";
  let name = prompt("Por favor, insira seu nome: ", "Coder Estudante");
  client.setName(name);
  if (client.name == "") {
    alert("Usuário cancelou a simulação.");
  } else {
    alert("Olá, " + client.name + "! " + "Vamos iniciar a simulação das parcelas. ");
  }
  document.getElementById("text").innerHTML = text;
}

function computeInstallmentWithInterest(debt = 0, {nInstallment}){
  if((debt ?? "Nullish") || (nInstallment ?? "Nullish")){
    return (debt * Math.pow(1 + interestRate, nInstallment));
  }
  return null
}

// function getStandardDeviation (array) {
//   const n = array.length
//   const mean = array.reduce((a, b) => a + b) / n
//   return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
// }

function parcelas() {
  client.setName(client?.name == "" ? "Coder Estudante" : client?.name);
  let installments = "";
  let debt = parseFloat(prompt("Inserir o valor total a ser dividido: "));
  client.setDebt(debt);

  do {
    installments = prompt("Em quantas vezes deseja parcelar (min " + client.minInstallments + ", max. " + client.maxInstallments + ")?: \nOBS: Digite 'sair' para cancelar a operação.");
    if(installments != "sair"){
      client.setInstallments(installments);
      client.installments = parseFloat(client.installments);
      client.calculate();
      console.log(client.installments);
    }
  }while (installments != "sair");

  let clientDebt = client?.debt
  let allInstallments = []; 
  client?.totalInstallments.forEach( o => {
    if(o.nInstallment > client.minInstallmentsFreeTax){ // Cobra juros se o número de parcelas for maior que o minimo sem juros
      o.debtWithInterest = computeInstallmentWithInterest(clientDebt, o);
      o.installmentWithInterest = o.debtWithInterest/o.nInstallment;
      alert(
        "Total: " + client.debt +
        "\nNúmero de Parcelas: " + o.nInstallment + 
        "\nParcela: " + o.installments +
        "\nTotal com juros: " + o.debtWithInterest.toFixed(2) +
        "\nParcela com juros: " + o.installmentWithInterest.toFixed(2) +
        "\n\nOBS: Para número de parcelas acima de " + client.minInstallmentsFreeTax + ", será acrescido de " + interestRate*100 + "% ao mês!"
      )
      allInstallments.push(o.debtWithInterest.toFixed(2));
    }else{
      alert(
        "Total: " + clientDebt +
        "\nNúmero de Parcelas: " + o.nInstallment + 
        "\nParcela: " + o.installments
      )
      allInstallments.push(o.installments.toFixed(2));
    }
  });
  alert(
    "+ Valores simulados: " +
    "\nMenor valor devido: " + client.debt +
    "\nMaior valor devido: " + Math.max(...allInstallments)
  );
}
