import './App.css';
import {Route, Switch} from 'react-router-dom'; //Importo ROUTE y SWITCH;
import LandingPage from './renderizado/LandingPage.jsx';
import AllCards from './renderizado/AllCards.jsx';
import Descripcion from './renderizado/Descripcion';
import Formulario from './renderizado/Formulario';
// import Prueba from './components/Prueba';



function App() {
  return (
      <div>        
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/home" component={AllCards}/>
          <Route exact path="/descripcion" component={Descripcion}/>
          <Route exact path="/createVideogame" component={Formulario}/>
        </Switch>
      </div>   
      // <Prueba/>
  );
}

export default App;
