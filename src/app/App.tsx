// Componentes de complementación
import Menu from "../components/primary/Menu";
import Main from "../components/primary/Main";
import Footer from "../components/primary/Footer";

// Componente principal de exportación
export default function App(): JSX.Element{
  return (
    <>
      <Menu/>
      <Main/>
      <Footer/>
    </>
  )
}
