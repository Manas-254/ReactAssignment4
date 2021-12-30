function App(){

    const [fruits,setfruits]=React.useState(['Butterfruit','Lichi','DragonFruit','Mango'])

    let removeKTM=()=>{
        let indexOfKTM = fruits.indexOf('Lichi')
        console.log(indexOfLichi);

        if(indexOfLichi>=0){
            fruits.splice(indexOfLichi,1)
            setfruits(
                [...fruits]
            )
        }
    }

    return <div>
        {
        fruits.map((fruit,idx)=>{
            return <p key={idx+fruit}>{fruit}</p>
        })
    }
        <button onClick={removeLichi}>removeLichi</button>
    </div>
}

ReactDOM.render(<App/>,document.getElementById('container'))