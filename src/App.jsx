import Footer from "./components/Footer";
import Header from "./components/Header";
import Productos from "./components/Productos";
import ProductoDetalle from "./components/ProductoDetalle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Productos />}
        />

        <Route
          path="/productos/:id"
          element={<ProductoDetalle />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;