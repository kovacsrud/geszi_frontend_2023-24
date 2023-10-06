
let keres=new XMLHttpRequest();
var valasz="";

let root=document.getElementById('root');

keres.open('GET','https://jsonplaceholder.typicode.com/posts',true);

keres.onload=function(){
    valasz=JSON.parse(this.response);
    

    valasz.forEach(elem => {
        let p=document.createElement('p');
        p.textContent=elem.title+"<BR>"+elem.body;

        root.appendChild(p);
    });
}

//keres.send();

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(valasz=>{
    if(Array.isArray(valasz)){
        valasz.forEach(elem=>{
            let p=document.createElement('p');
    
            p.textContent=elem.title;
    
            root.appendChild(p);
        });
        } else {
            let p=document.createElement('p');
            p.textContent="Adat nem található!"
            root.appendChild(p);
        }
})
.catch(err=>console.log(err));

//console.log(adatok);

async function letoltes(){
    
    try {
        let keres=await fetch('https://jsonplaceholder.typicode.com/posts');
        let valasz=await keres.json();

        if(Array.isArray(valasz)){
        valasz.forEach(elem=>{
            let p=document.createElement('p');
    
            p.textContent=elem.title;
    
            root.appendChild(p);
        });
        } else {
            let p=document.createElement('p');
            p.textContent="Adat nem található!"
            root.appendChild(p);
        }
        
    } catch (error) {
        let p=document.createElement('p');
        p.textContent=error;
        root.appendChild(p);
    }
    




    
    //console.log(valasz);
}

//letoltes();