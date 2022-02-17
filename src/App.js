import { Imagenes } from './components/Body/Imagenes';
import { EmpleadosLista } from './components/EmpleadosLista/EmpleadosLista';
import { Footer } from './components/Footer/Footer';
import Barra1 from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>

        <Barra1/>
        <Slider/> 
        
            <Routes>
              <Route path="/" element= {<Imagenes/> }/>
              <Route path="/empleados" element= { <EmpleadosLista/> }/>
            </Routes>

        <Footer/>

    </BrowserRouter> 
  );
}

export default App;
