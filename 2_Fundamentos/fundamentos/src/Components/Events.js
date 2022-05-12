const Events = () => {
    const handleMyEvent = (e) => {
        console.log("Ativou meu evento");
        console.log(e);
    }

const renderSomething = (x) => {
    if(x) {
       return <h1>Renderizando verdadeiro</h1>;
    }
    else{
      return  <h2>Renderizando Falso</h2>;
    }
}   ;

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
                <p></p>
                <button onClick={() => console.log('Segundo click')}>Clique aqui também</button>
                <p></p>
                <button onClick={() => { 
                    if(true){
                        console.log("terceiro click")
                    }
                }}>Terceiro Click</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}            
        </div>
    );
}



export default Events;