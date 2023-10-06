
function decToHex(red,green,blue){

    return "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    
}

//console.log(decToHex(255,255,255));

function kattint(e){
 let elem=e.target;
 let selected=document.getElementById('selected');
 selected.setAttribute('style','background-color:'+elem.style.backgroundColor);
 selected.textContent=elem.textContent;
}

let root=document.getElementById('root');

for (let i = 0; i < 100; i++) {
    let negyzet=document.createElement('div');
    negyzet.textContent=decToHex(255,255,i);
    negyzet.setAttribute('class','negyzet');
    negyzet.setAttribute('style','background-color:'+decToHex(255,i,i));
    negyzet.addEventListener('click',kattint);
    root.appendChild(negyzet);

    
}