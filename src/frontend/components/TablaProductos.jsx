import React from 'react';
import '../assets/styles/components/TablaProductos.scss';

const TablaProductos = ({ children }) => (
  <div className="prod">
    <table>
      <tbody>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>cantidad</th>
          <th>$precio</th>
          <th>tipo</th>
          <th>codInventario</th>
          <th>Comprar </th>
        </tr>
      </tbody>
      {children}
    </table>

  </div>
);

export default TablaProductos;