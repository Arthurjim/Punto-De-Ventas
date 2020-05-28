import React from 'react';

import '../assets/styles/components/Inventario.scss';

const TablaInventario = ({ children }) => (
  <div className="invent">
    <table>
      <tbody>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>cantidad</th>
          <th>Precio</th>
          <th>Tipo</th>
          <th>Codigo Inventario</th>
          <th>Eliminar/Actualizar</th>
        </tr>
      </tbody>
      {children}
    </table>

  </div>
);

export default TablaInventario;