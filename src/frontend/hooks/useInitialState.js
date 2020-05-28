import { useState, useEffect } from 'react';

const useInitialState = () => {
  const [prod, setProductos] = useState({
    data: [],
    ticket: [],
    preciototal: [],

  });

  useEffect(() => {
    fetch('http://127.0.0.1:3000/todos')
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  return prod;
};

export default useInitialState;