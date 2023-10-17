function App(){
    return (
        <div>
            <h1>Babel fordító</h1>
            <p>React alapok</p>
            <Box felirat={"Első box"} kezdo={1} hatterszin={"yellow"}/>
            <Box felirat={"Második box"} kezdo={5} hatterszin={"green"}/>
        </div>
    )
}

function Box({hatterszin,felirat,kezdo}){
    const [szamlalo,setSzamlalo]=React.useState(kezdo);

    const onClick=()=>{
        setSzamlalo(prev=>prev+1);
    }

    return(
        <div onClick={onClick} className="p-2 m-3 rounded" style={{backgroundColor:hatterszin}}>
            <h3>{felirat}</h3>
            <h4>Számláló:{szamlalo}</h4>

        </div>
    )
}

ReactDOM.render(React.createElement(App),document.getElementById('root'));