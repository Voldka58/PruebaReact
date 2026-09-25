import { Link } from "react-router-dom";
import productos from "./data/productos";

function Productos() {
  return (
    <section className="productos-seccion">


      <div className="productos">
        {productos.map((producto) => (
          <Link
            to={`/productos/${producto.id}`}
            className="producto"
            key={producto.id}
          >
            <img src={producto.imagen} alt={producto.nombre} />

            <div className="producto-info">
              <h3>{producto.nombre}</h3>

              <p className="precio">
                ${producto.precio}
              </p>

              {producto.precioAnterior && (
                <p className="precio-anterior">
                  ${producto.precioAnterior}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Productos;