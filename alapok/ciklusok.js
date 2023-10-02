let nevek=["Imre","Zénó","Ágnes","Ella","Dániel","Éva"];

//let root=document.getElementById('root');
let h2=document.createElement('h2');
h2.textContent="Névsor";
root.appendChild(h2);

let ol=document.createElement('ol');

for (let i = 0; i < nevek.length; i++) {
    let li=document.createElement('li');
    li.textContent=nevek[i];
    ol.appendChild(li);    
}

root.appendChild(ol);

//while ciklus
let start=0;
while (start<nevek.length) {
    let li=document.createElement('li');
    li.textContent=nevek[start];
    ol.appendChild(li);    
    start++;
}

root.appendChild(ol);

for (const i of nevek) {
    console.log(i);
}