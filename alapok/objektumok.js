
let szemely={
    vezeteknev:"Nagy",
    keresztnev:"Endre",
    szuletesiEv:1987,
    kor() {
        return 2023-1987;
    }
};

console.log(szemely);
console.log(szemely.keresztnev);
console.log(szemely.kor());

class Szemely {
    constructor(vezeteknev,keresztnev,szuletesiEv){
        this.vezeteknev=vezeteknev,
        this.keresztnev=keresztnev,
        this.szuletesiEv=szuletesiEv
    }
    kor(){
        return 2023-this.szuletesiEv;
    }
}

let endre=new Szemely("Nagy","Endre",1995);

console.log(endre.vezeteknev);
console.log(endre.kor());

