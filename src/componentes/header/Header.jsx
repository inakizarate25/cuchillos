import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h2>Logo</h2>

      <nav>
        <Link href="/" className="Link">
          Inicio
        </Link>
        <Link href="/contacto" className="Link">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;
