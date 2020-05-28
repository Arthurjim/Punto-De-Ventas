/* eslint-disable eol-last */
/* eslint-disable camelcase */
// eslint-disable-next-line import/prefer-default-export
import Producto from '../models/Productos';
// import Inventario from '../models/Inventario';
// import Categoria from '../models/Categoria';
// eslint-disable-next-line import/prefer-default-export
export async function getTodosProd(req, res) {
  try {

    const producto = await Producto.findAll();

    return res.status(200).json({ data: producto, ticket: [] }).toString();

  } catch (error) {
    console.log(error);
  }

};

//create new product

export async function createProducto(req, res) {
  const { cod_pro, nombre, cantidad, precio, tipo, inventario_prod } = req.body;
  console.log(req.body.toString());

  try {
    const newProducto = await Producto.create({
      cod_pro,
      nombre,
      cantidad,
      precio,
      tipo,
      inventario_prod,
    }, {
      fields: ['cod_pro', 'nombre', 'cantidad', 'precio', 'tipo', 'inventario_prod'],
    });
    if (newProducto) {
      return res.redirect('/ventas');
    }
  } catch (error) {
    /*next(error);*/
    console.log(error);
    res.status(500).json({
      message: 'Something Goes Wrong. Try Again.',
      data: {},
    });
  }
};

//delete producto
export async function getDelete(req, res) {

  const { cod_pro } = req.params;
  try {
    const prod = await Producto.findByPk(cod_pro);
    await Producto.destroy({
      where: {
        cod_pro,
      },

    });
    console.log('borrado');
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Delete Failed.',
      data: {},
    });
  }
};

//update

export async function updateProducto(req, res) {
  const { cod_pro } = req.params;
  const { nombre, cantidad, precio, tipo, inventario_prod } = req.body;

  const producto = Producto.update({
    nombre: nombre,
    cantidad: cantidad,
    precio: precio,
    tipo: tipo,
    inventario_prod: inventario_prod,
  }, {
    where: {
      cod_pro: cod_pro
    }
  })
    .then(producto => res.json({
      error: false,
      message: 'todo has been updated.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
};

// export async function updateProject(req, res) {
//   const { cod_pro } = req.params;
//   const { nombre, cantidad, precio, tipo, inventario_prod } = req.body;
//   console.log(req.body.toString());
//   try {
//     const productos = await Producto.findAll({
//       atributes: ['cod_pro', 'nombre', 'cantidad', 'precio', 'tipo', 'inventario_prod'],
//       where: {
//         cod_pro,
//       },
//     });
//     if (productos.length > 0) {
//       productos.forEach(async (Producto) => {
//         await Producto.update({
//           // name: name ? name : project.name,
//           nombre,
//           cantidad,
//           precio,
//           tipo,
//           inventario_prod,
//         });
//       });
//       return res.json({
//         message: 'Project Updated',
//         data: productos,
//       });
//     }
//   } catch (e) {
//     res.json({
//       message: 'Cannot update this Project.',
//       data: {},
//     });
//   }
// };