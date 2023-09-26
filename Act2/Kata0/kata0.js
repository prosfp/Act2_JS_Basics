export default function sumatorio(num) {
  let sumatorio = 0;
  let valorActual = num;
  while (valorActual !== 0) {
    sumatorio = valorActual + sumatorio;
    valorActual = valorActual - 1;
  }
  //opción alternativa mas compleja pero a tener en cuenta
  //Ex: "return num ? num + sumatorio(num-1) : 0"

  //console.log(sumatorio);
  return sumatorio;
}
