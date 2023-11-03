import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/header/Header";
import Home from "./pags/home/Home";
import ItemDetail from "./pags/itemDetail/ItemDetail";
import Footer from "./componentes/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" />
        <Route path="/:id" element={<ItemDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
