import Boton from "./Components/Boton/Boton";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Imagenes from "./Components/Imagen/Imagen";
import Navbar from "./Components/Navbar/Navbar";
import TItulo from "./Components/TItulo/Titulo";
import Texto from "./Components/Texto/Texto";

function App() {
  const navbarLinks = ["Home", "New", "Popular", "Treding", "Categoria"];
  return (
    <>
      <Navbar links={navbarLinks} />
      <Header />
      <TItulo />
      <Texto />
      <Boton />
      <Card />
      <Imagenes valor={23} />
    </>
  );
}

export default App;
