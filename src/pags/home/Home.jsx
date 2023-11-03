import Baner from "../../componentes/banner/Baner";
import { cuchillos } from "../../data";
import Item from "../../componentes/item/Item";
import "./style.css";

const Home = () => {
  return (
    <section className="home">
      <Baner />
      <section className="productos">
        <h2>PRODUCTOS</h2>

        <div className="lista_productos">
          {cuchillos.map((cuchillo) => (
            <Item key={cuchillo.id} {...cuchillo} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
