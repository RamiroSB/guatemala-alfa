import { Imagenes } from './components/Body/Imagenes';
/* import { EmpleadosLista } from './components/EmpleadosLista/EmpleadosLista'; */
import { Footer } from './components/Footer/Footer';
import Barra1 from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';




function App() {
  return (
    <div>
        <Barra1/>
        <Slider/>
        <Imagenes/>
        <Footer/>
{/*         <EmpleadosLista/> */}
    </div>
  );
}

export default App;
