import Home from '../containers/Home';
import Ventas from '../containers/Ventas';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Inventario from  '../containers/Inventario';
//este archivo sirve para definir las turas pero en el lado del servidor

const routes = [
  {
    exact: true,
    path: '/',
    component: Login,
  },
  {
    exact: true,
    path: '/home',
    component: Home,
  },
  {
    exact: true,
    path: '/ventas',
    component: Ventas,
  },
  {
    exact: true,
    path: '/inventario',
    component: Inventario,
  },
  {
    exact: true,
    path: '/registro',
    component: Register,
  },
  {
    exact: false,
    component: NotFound,
  },
];

export default routes;