import { Link } from "react-router-dom";
import "./style.css";

const Item = ({ img, nombre, precio, id }) => {
  return (
    <Link to={`/${id}`} class="card">
      <img src={img} alt="" className="img" />
      <span class="nombre">{nombre}</span>
      <span class="precio">${precio}</span>
    </Link>
  );
};

export default Item;
