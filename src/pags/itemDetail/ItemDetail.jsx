import "./style.css";
import { cuchillos } from "../../data";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import Item from "../../componentes/item/Item";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const ItemDetail = () => {
  const { id } = useParams();
  const cuchillo = cuchillos.find((cuchillo) => cuchillo.id === parseInt(id));
  const [image, setImage] = useState(cuchillo.img);

  return (
    <section className="itemDetail">
      <div className="container">
        <img
          src={cuchillo.img}
          alt={cuchillo.nombre}
          className="img1"
          onClick={() => setImage(cuchillo.img)}
        />
        <img
          src={cuchillo.img2}
          alt={cuchillo.nombre}
          className="img2"
          onClick={() => setImage(cuchillo.img2)}
        />
        <img src={image} alt={cuchillo.nombre} className="selected" />
      </div>

      <aside className="infoProd">
        <h2>{cuchillo.nombre}</h2>
        <p>${cuchillo.precio}</p>
        <span>{cuchillo.desc}</span>
        <a href="#">Lo Quiero</a>
      </aside>
    </section>
  );
};

export default ItemDetail;
