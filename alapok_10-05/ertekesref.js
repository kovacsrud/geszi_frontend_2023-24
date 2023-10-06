
console.log("Érték és referencia típusok");

let a=20;
let b=a;

console.log(b);
b=25;
console.log(a,b);

let szamok=[1,2,3,4,5];
let szamok2=szamok;
let szamok3=[5,10,15];

szamok2[0]=10;

console.log(szamok);
console.log(szamok2);

szamok[1]=15;

console.log(szamok);
console.log(szamok2);