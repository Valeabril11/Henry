'use strict'

function BinarioADecimal(num) {
//num=[1,0,1,0,1,1,1,0,0,1]
var suma = 0;
num = num.toString().split("").reverse().join("")
for (let item in num){
  if(num[item] !=0){
    suma += Math.pow(2,item);
  }}
return suma;
  // tu codigo aca
}

function DecimalABinario(num) {
  // tu codigo aca
let result = []
do {
  if (num%2 == 0){
    num = num/2;
    result.unshift(0);
  }else{
    result.unshift(1);
    num = Math.floor(num/2);
  }
} while (num >= 1);
return result.join("")


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}