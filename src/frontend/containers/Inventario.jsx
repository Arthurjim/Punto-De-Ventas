import React from 'react';
import { connect } from 'react-redux';
import ContInvenario from '../components/ContInventario';
import TablaInventario from '../components/TablaInventario';
import ContentNuevo from '../components/ContentNuevo';
import Header from '../components/Header';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/components/Inventario.scss';
const API = 'http://localhost:3000/todos';

const Inventario = () => {
  const prod = useInitialState(API);
  return (
    <>
      <Header />
      <div className="containerTodos">
        <>
          {prod.data.length > 0 && (
            <>
              <TablaInventario>
                {prod.data.map(item =>
                  <ContInvenario key={item.cod_pro}{...item} />
                )}
              </TablaInventario>

            </>
          )}
        </>
        <div className="nuevoProd">
          <ContentNuevo />
        </div>
      </div>
    </>
  );
};
const mapStateToPorps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToPorps, null)(Inventario);