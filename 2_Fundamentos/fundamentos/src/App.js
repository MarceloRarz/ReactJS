import './App.css';
import Challenge from './Components/Challenge';
import Events from './Components/Events';
import FirstComponent from './Components/FisrtComponent';
import TemplateExpressions from './Components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
