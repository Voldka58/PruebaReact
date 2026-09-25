import logo from "../assets/logo.png";
import flayer from "../assets/flayer.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>

<div className="cartelera">
      <div className="cartelera-track">
        
        <div className="cartelera-grupo">
          <span>10% OFF Abonando en transferencia</span>
          <span>3 Cuotas sin interes</span>
          <span>Envio Gratis a todo el pais</span>
        </div>

        <div className="cartelera-grupo">
          <span>10% OFF Abonando en transferencia</span>
          <span>3 Cuotas sin interes</span>
          <span>Envio Gratis a todo el pais</span>
        </div>

      </div>
    </div>

<div className="logo">
  <Link to="/">
    <img src={logo} alt="Logo" />
  </Link>
</div>

<div className="presentacion">
  <img src={flayer} alt="Productos" />
</div>

<div className="titulo_presentacion">
  <h2>
    Nuestros productos más <span>vendidos🥇 </span>
  </h2>
</div>


    </>
  );
}

export default Header;