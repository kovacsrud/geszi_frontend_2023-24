let nevek=["Éva","Géza","Jenő","Péter"];
let nevek2=["Ubul","Elek","Miklós"];

nevek=[...nevek,"Jolán"];

let nevek3=[...nevek,...nevek2];

console.log(...nevek);
console.log(nevek);

let szemely={
    vezeteknev:"Kovács",
    keresztnev:"Péter",
    lakhely:{
        helyseg:"Orosháza",
        utca:"Petőfi",
        házszám:35
    }
};

console.log(szemely.vezeteknev);
console.log(szemely["keresztnev"]);
console.log(szemely.lakhely.helyseg);

szemely.szuletesiev=2001;

szemely.szuletesiev=2003;

szemely.sportok=["futás","kézilabda","kosárlabda"];

console.log(szemely.sportok[1]);
