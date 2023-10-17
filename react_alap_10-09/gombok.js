let jsgomb=document.getElementById('js-gomb');

let gomb=document.createElement('button');
gomb.textContent="Javascript gomb";

gomb.onclick=function(){
    alert("Javascript gomb");
}

jsgomb.appendChild(gomb);


const rgomb=React.createElement('button',{
    onClick:function(){
        alert("React gomb");
    }    

},"React gomb");

const kontener=React.createElement('div',{
    style:{
        width:"200px",
        height:"200px",
        backgroundColor:"green"
    }
},rgomb,rgomb,rgomb,rgomb,rgomb,rgomb);

ReactDOM.render(kontener,document.getElementById('react-gomb'));