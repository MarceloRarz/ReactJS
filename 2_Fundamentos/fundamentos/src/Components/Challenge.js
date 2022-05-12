const Challenge = () => {
    const x = 10;
    const y = 20;

    const soma = () => {
        return console.log('Resultado da soma:', x + y)            
      // //<h2>Resulttado da soma:{x + y}</h2>  
    }
    
    return(
        <div>
            <h1>Valor de x:{x}</h1>
            <h1>Valor de y:{y}</h1>
            <button onClick={soma}>Clique aqui para somar</button>
        </div>
    );
}

export default Challenge;