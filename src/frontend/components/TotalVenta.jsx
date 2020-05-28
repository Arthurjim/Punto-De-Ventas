import React from 'react';

const TotalVenta = (props) => {
  const { Total } = props;
  return (
    <>
      <h3>Total Venta</h3>
      <div>{Total}</div>
    </>
  );
};

export default TotalVenta;