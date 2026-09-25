import minishaver from "../../assets/minishaver.png";
import ecopin from "../../assets/ecopin.png"
import razor from "../../assets/razor.png"
import perros from "../../assets/perros.png"
import hidro from "../../assets/hidro.png"
import sellador from "../../assets/sellador.png"
import mano from "../../assets/mano.png"
import portatil from "../../assets/portatil.png"


const productos = [
  {
    id: 1,
    nombre: "Mini Shaver -Afeitadora Facial",
    precio: 98000,
    precioAnterior: 130000,
    imagen: minishaver,
    categoria: "Electro"
  },
  {
    id: 2,
    nombre: "Echopin - Grabá cada instante",
    precio: 240000,
    precioAnterior: 300000,
    imagen: ecopin,
    categoria: "Electro"
  },
  {
    id: 3,
    nombre: "Afeitadora Corporal - AntiCortes",
    precio: 95000,
    precioAnterior: 110000,
    imagen: razor,
    categoria: "Electro"
  },
  {
    id: 4,
    nombre: "Aspiradora para Mascotas",
    precio: 150000,
    precioAnterior: 195000,
    imagen: perros,
    categoria: "Electro"
  },
  {
    id: 5,
    nombre: "Hidrolavadora-Portátil",
    precio: 175400,
    precioAnterior: 350000,
    imagen: hidro,
    categoria: "Electro"
  },
  {
    id: 6,
    nombre: "Sellador al Vacío- Portatil",
    precio: 98800,
    precioAnterior: 125000,
    imagen: sellador,
    categoria: "Electro"
  },
   {
    id: 7,
    nombre: "Aspiradora Swift - Alta potencia",
    precio: 70000,
    precioAnterior: 138000,
    imagen: mano,
    categoria: "Electro"
  },
   {
    id: 8,
    nombre: "Aspiradora Inalámbrica - 3 en 1 ",
    precio: 135000,
    precioAnterior: 194000,
    imagen: portatil,
    categoria: "Electro"
  },
];

export default productos;