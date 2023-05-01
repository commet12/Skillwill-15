import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';
import About from './About';
import Facts from './Facts';
import Params from './Params';




function App() {
  
  return (
    <>
       <Navbar/>
       <div className="App">
         <Routes>
           <Route path='/' element={<Main/>}/> 
           <Route path='About' element={<About/>}/>
           <Route path='Facts/:FactId' element={<Facts/>}/>
           <Route path='Params/:tedFacts' element={<Params/>}/>
         </Routes>
       </div>
    </>
  );
  
}

export default App;
