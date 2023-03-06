let contador = 0;
let alturaTotalHomens = 0;
let quantidadeMulheres = 0;
let maiorAltura = 0;
let menorAltura = Infinity;

while (contador < 15) {
  let altura = parseInt(prompt("Quanto você tem de altura em centimentros?"));
  let sexo = prompt("Qual o seu sexo? (M ou F)").toUpperCase();

  // menor e maior altura
  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
  if (altura < menorAltura) {
    menorAltura = altura;
  }

  // calcula a média de altura entre os homens
  if (sexo === "M") {
    alturaTotalHomens += altura;
  }

  // quantidade de mulheres
  if (sexo === "F") {
    quantidadeMulheres++;
  }

  contador++;
}

let mediaAlturaHomens = alturaTotalHomens / (contador - quantidadeMulheres);

alert(`A maior altura é ${maiorAltura} cm.`);
alert(`A menor altura é ${menorAltura} cm.`);
alert(`A média de altura entre os homens foi de ${mediaAlturaHomens.toFixed(2)} cm.`);
alert(`A quantidade de mulheres é ${quantidadeMulheres}.`);