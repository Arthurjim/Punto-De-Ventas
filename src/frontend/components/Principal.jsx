import React from 'react';
import '../assets/styles/components/Principal.scss';

const Principal = ({ children }) => (
  <div className="wrap">
    <div className="men">
      <h3>Bienvnenido</h3>
      <h5>Arturo Jiménez</h5>
    </div>
    <div className="products-list">
      {children}
    </div>
  </div>
);

export default Principal;