import { Imagenes } from './components/Body/Imagenes';
import { EmpleadosLista } from './components/EmpleadosLista/EmpleadosLista';
import Barra1 from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Newsletter } from './components/pages/Newsletter';
import { NuestraEmpresa } from './components/pages/NuestraEmpresa';
import { TrabajaConNosotros } from './components/pages/TrabajaConNosotros';
import { Contacto } from './components/pages/Contacto';
import { StockLista } from './components/StockLista/StockLista'
import { FooterTest } from './components/Footer/FooterTest';
import { Capacitaciones } from './components/pages/Capacitaciones';
import { Rma } from './components/pages/Rma';


function App() {
  return (

    <BrowserRouter>

        <Barra1/>
        <Slider/> 
        
            <Routes>
              <Route path="/" element= {<Imagenes/> }/>
              <Route path="/empleados" element= { <EmpleadosLista/> }/>
              <Route path="/empleados/:catId" element= { <EmpleadosLista/> }/>
              <Route path='/newsletter' element= {<Newsletter/>}/>
              <Route path='/nuestraempresa' element= {<NuestraEmpresa/>}/>
              <Route path='trabajaconnosotros' element= { <TrabajaConNosotros/> } />
              <Route path='contacto' element= { <Contacto/> } />
              <Route path='capacitaciones' element= { <Capacitaciones/> } />
              <Route path='rma' element= { <Rma/> } />
              <Route path='*' element= { <Navigate to ="/" /> } />
              <Route path="/marcas/:catId" element= { <StockLista/> }/>
            </Routes>

        <FooterTest/>

    </BrowserRouter> 
  );
}

export default App;
