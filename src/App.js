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
import { Footer } from './components/Footer/Footer';
import { Capacitaciones } from './components/pages/Capacitaciones';
import { Rma } from './components/pages/Rma';

import { MapAru } from './components/ApiMarcas/Aruba/MapAru';
import { MapEvg } from './components/ApiMarcas/Evga/MapEvg';
import { MapApc } from './components/ApiMarcas/Apc/MapApc';
import { MapCM } from './components/ApiMarcas/Cambium/MapCM';
import { MapGra } from './components/ApiMarcas/Grandstream/MapGra';
import { MapHPS } from './components/ApiMarcas/HP/HPS/MapHPS';
import { MapTSS } from './components/ApiMarcas/HP/TSS/MapTSS';
import { MapHSS } from './components/ApiMarcas/HP/HSS/MapHSS';
import { MapHua } from './components/ApiMarcas/Huawei/MapHua';
import { MapJab } from './components/ApiMarcas/Jabra/MapJab';
import { MapLen } from './components/ApiMarcas/Lenovo/MapLen';
import { MapMER } from './components/ApiMarcas/Mercusys/MapMER';
import { MapMik } from './components/ApiMarcas/Mikrotik/MapMik';
import { MapQnp } from './components/ApiMarcas/Qnap/MapQnp';
import { MapSds } from './components/ApiMarcas/Samsung/SDS/MapSds';
import { MapSMO } from './components/ApiMarcas/Samsung/SMO/MapSMO';
import { MapTpl } from './components/ApiMarcas/TPLINK/MapTpl';
import { MapUbi } from './components/ApiMarcas/Ubiquiti/MapUbi';
import { MapYea } from './components/ApiMarcas/Yealink/MapYea';
import { MapYes } from './components/ApiMarcas/Yeastar/MapYes';

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
              
              <Route path="/marcas/ARUBA-NETWORK-WIRED" element= { <MapAru/>}/>
              <Route path="/marcas/EVGA" element= { <MapEvg/>}/>
              <Route path="/marcas/APC" element= { <MapApc/>}/>
              <Route path="/marcas/CAMBIUM-NETWORKS" element= { <MapCM/>}/>
              <Route path="/marcas/GRANDSTREAM" element= { <MapGra/>}/>
              <Route path="/marcas/HSS" element= { <MapHSS/>}/>
              <Route path="/marcas/HPS" element= { <MapHPS/>}/>
              <Route path="/marcas/TSS" element= { <MapTSS/>}/>
              <Route path="/marcas/HUAWEI" element= { <MapHua/>}/>
              <Route path="/marcas/JABRA" element= { <MapJab/>}/>
              <Route path="/marcas/LENOVO" element= { <MapLen/>}/>
              <Route path="/marcas/MERCUSYS" element= { <MapMER/>}/>
              <Route path="/marcas/MIKROTIK" element= { <MapMik/>}/>
              <Route path="/marcas/QNAP" element= { <MapQnp/>}/>
              <Route path="/marcas/SAMSUNG-DISPLAY" element= { <MapSMO/>}/>
              <Route path="/marcas/SAMSUNG-MONITORS" element= { <MapSds/>}/>
              <Route path="/marcas/TP-LINK" element= { <MapTpl/>}/>
              <Route path="/marcas/UBIQUITI" element= { <MapUbi/>}/>
              <Route path="/marcas/YEALINK" element= { <MapYea/>}/>
              <Route path="/marcas/YEASTAR" element= { <MapYes/>}/>

            </Routes>

        <Footer/>

    </BrowserRouter> 
  );
}

export default App;
