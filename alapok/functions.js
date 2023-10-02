//Függvények a javascriptben

function osszead(a,b,c){
    return a+b+c;
}

console.log(osszead(10,20,30));

function osszead2(a,b=10,c=15){
    return a+b+c;
}

console.log(osszead2(10,20,30));
console.log(osszead2(10,20));
console.log(osszead2(10));

//Arrow function

const szum=(a,b,c)=>a+b+c;

console.log(szum(1,2,3));

//Tetszőleges számú paraméter???
function sum(){
    let osszeg=0;
    for (let i = 0; i < arguments.length; i++) {
         osszeg+=arguments[i];
    }
    return osszeg;
}

console.log(sum(1,5,8));
console.log(sum(10,20,8,5,76,3));
console.log(sum(10,20,8,5,76,3,21,69,31));
