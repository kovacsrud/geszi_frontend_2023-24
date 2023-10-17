let p1=new Promise((reject,resolve)=>{
    resolve(100);
});

p1.then(adat=>console.log(adat)).catch(err=>console.log(err));

let p2=function(a,b){
    return new Promise((reject,resolve)=>{
        if(a>b){
            resolve(a);
        } else {
            reject("A a értéke nem nagyobb b-nél.");
        }
    });
}

p2(5,10).then(ertek=>console.log(ertek)).catch(err=>console.log(err));

//Több promise-t is összeköthetünk.
p2(10,5).then(ertek=>p2(p1,ertek)).then(ertek=>console.log(ertek)).catch(err=>console.log(err));

async function promiseok(){
    try {
        let adat1=await p1;    
        let adat2=await p2(adat1,10);

        console.log("Async:"+adat2);
    } catch (error) {
        console.log(error);
    }

    
}

promiseok();