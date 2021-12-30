function App(){

    const [Name,setName]=React.useState({
        firstname:"Manaswini",
        lastname:"RP"
    })

    let update=()=>{
        setName({
            ...Name,
            firstname:"Jain"
        })
    }

    return <div>
        <h1>FirstName:{Name.firstname},lastname:{Name.lastname}</h1>
        <button onClick={update}>Update</button>
    </div>
}

ReactDOM.render(<App/>,document.getElementById('container'))