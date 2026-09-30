import { useParams } from "react-router-dom";
import { useEffect } from "react";
import productos from "./data/productos";
import "./ProductoDetalle.css";

function ProductoDetalle() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const producto = productos.find(
    (producto) => producto.id === Number(id)
  );

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <section className="producto-detalle">

      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <div className="producto-info">

        <h1>{producto.nombre}</h1>

        <p className="descripcion">
          {producto.descripcion}
        </p>

        <p className="precio">
          ${producto.precio}
        </p>

        {producto.precioAnterior && (
          <p className="precio-anterior">
            ${producto.precioAnterior}
          </p>
        )}

        <a
          className="btn-comprar"
          href={producto.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar
        </a>

      </div>

    </section>
  );
}

export default ProductoDetalle;