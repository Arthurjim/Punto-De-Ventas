import React from 'react';

import Header from '../components/Header';
import Principal from '../components/Principal';
import PrincipalItem from '../components/PrincipalItem';
import '../assets/styles/App.scss';
/*
const App = () => {
  const [productos, setProductos ] = useState([]);

  useEffect(() => {
    fetch(API)//fetch  resive una api
      .then(response => response.json())// cuando esa api resuelva la infomraicon lo transorma a un objeto que se pueda utilizar
      .then(data => setProductos(data)); //en este se diec que a la ifnomracion que llego se la pasa a la funcion productos
  }, []);//useEffect resive otro parametro el cual se encarga de estar  escuchando una propiedad que pueda cambiar y asi volver a ejecutarse
  //Ahora se creara un custom hook en lugar de eso de arriba
  */
const Home = () => {
  return (
    <div className="App">
      <Header />
      <Principal>
        <PrincipalItem />
      </Principal>
    </div>
  );
};

export default Home;