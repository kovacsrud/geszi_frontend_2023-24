
//let veletlenszam=Math.floor(Math.random()*(100-10))+10;

function veletlenszam(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

//console.log(veletlenszam(5,10));
//console.log(veletlenszam(50,100));

let vnev=["Kovács","Kósa","Kiss","Nagy"];
let knev=["Béla","Áron","Ágnes","Janka"];

for (let i = 0; i < 50; i++) {
    let veznev=vnev[veletlenszam(0,vnev.length)];
    let kernev=knev[veletlenszam(0,knev.length)];
    console.log(veznev+" "+kernev);    
}