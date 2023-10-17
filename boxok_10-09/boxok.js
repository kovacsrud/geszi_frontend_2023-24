
function App(){
    return (
        React.createElement('div',{
            style:{
                width:"300px",
                backgroundColor:"green"
            }

        },"App",
        React.createElement(Box,{hatter:"red",felirat:"Box1:",kezdo:1}),
        React.createElement(Box,{hatter:"yellow",felirat:"Box2:",kezdo:2}),
        React.createElement(Box,{hatter:"blue",felirat:"Box3:",kezdo:11})
        )
    )
}

function Box({hatter,felirat,kezdo}){

    const[szamlalo,setSzamlalo]=React.useState(kezdo);

    return (
        React.createElement('div',{
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:hatter
            },
            className:"p-2 m-5 rounded",
            onClick:()=>setSzamlalo(prev=>prev+1)
        },felirat,szamlalo,React.createElement(Reset,{setSzamlalo:setSzamlalo}))
    )
}

function Reset({setSzamlalo}){
    return(
        React.createElement('button',{
            className:"btn btn-primary m-3",
            onClick:(e)=>{setSzamlalo(0);e.stopPropagation()}
        },"Reset")
    )
}

ReactDOM.render(React.createElement(App),document.getElementById('root'));