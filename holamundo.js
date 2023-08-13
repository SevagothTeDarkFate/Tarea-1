
//solicitar edad
let edad = prompt("Ingrese su edad:");

edad = parseInt(edad);

if (edad === 18) {
    alert("Tienes 18 años");
}
else if (edad >1 && edad <18){
    alert("Eres menor de edad")
}
else if (edad >18 && edad <99){
    alert("Eri mayor de edad")
}
else if (edad >= 100){
    alert("eres una persona centenaria")
}
else if (edad <=0){
    alert("Valor invalido")
}0




//contador del 1 al 100 (leer en la consola)
let numero=1;
while (numero <=100){
    console.log (numero)
    numero++
}


//estp aparecera en la consola 

const numeroUsuario = parseFloat(prompt("Ingrese un número:"));
if (isNaN(numeroUsuario)) {
  console.log("Por favor, ingrese un número válido.");
} else {
  const multiplos = [];
  for (let i = 1; i <= 10; i++) {
    multiplos.push(numeroUsuario * i);
  }
  console.log(`Número ingresado: ${numeroUsuario}`);
  console.log(`Sus primeros 10 múltiplos:`);
  for (let i = 0; i < multiplos.length; i++) {
    console.log(`${numeroUsuario} x ${i + 1} = ${multiplos[i]}`);
  }
}
