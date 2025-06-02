import getConnection from "./../db/database.js";

const getProductos = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT ProductoID, ProductoNombre, Imagen, Descripcion, Precio FROM productos"
    );
    res.json(result);
  } catch (error) {
    console.error("ERROR 500");
  }
};

const postProductos = async (req, res) => {
  try {
    const { ProductoNombre, Imagen, Descripcion, Precio, CategoriaID, ProveedorID } = req.body;
    const producto = { ProductoNombre, Imagen, Descripcion, Precio, CategoriaID, ProveedorID };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO productos SET ?",
      producto
    );
    res.json(result);
  } catch (error) {
    console.error("ERROR 500");
  }
};

const getProductoById = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT ProductoID, ProductoNombre, Imagen, Descripcion, Precio FROM productos WHERE ProductoID = ?",
      id
    );
    res.json(result);
  } catch (error) {
    console.error("ERROR 500");
  }
};

const deleteProducto = async (req, res) => {
  try {
    console.log("ID de producto a borrar", req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM productos WHERE ProductoID = ?",
      id
    );
    res.json(result);
  } catch (error) {
    console.error("ERROR 500");
  }
};

const updateProducto = async (req, res) => {
  try {
    const {id} = req.params
    const { ProductoNombre, Imagen, Descripcion, Precio, CategoriaID, ProveedorID } = req.body;
    const producto = { ProductoNombre, Imagen, Descripcion, Precio, CategoriaID, ProveedorID };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE productos SET ? WHERE ProductoID = ?",
      [producto, id]
    );
    res.json(result);
  } catch (error) {
    console.error("ERROR 500");
  }
};

export const methodHTTP = {
  getProductos,
  postProductos,
  getProductoById,
  deleteProducto,
  updateProducto,
};
