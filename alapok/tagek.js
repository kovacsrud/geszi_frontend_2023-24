let root=document.getElementById('root');

let cimsor=document.createElement('h1');

cimsor.textContent="Javascript";
root.appendChild(cimsor);

let ul=document.createElement('ul');
let li_1=document.createElement('li');
let li_2=document.createElement('li');
let li_3=document.createElement('li');

li_1.textContent=1;
li_2.textContent=2;
li_3.textContent=3;

ul.appendChild(li_1);
ul.appendChild(li_2);
ul.appendChild(li_3);

root.appendChild(ul);
