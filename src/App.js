
import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import ImageSlider from './Components/ImageSlider';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Product from './Components/Product';

function App() {
  const images = [
    'Images/slider1.webp',
    'Images/slider2.webp'
  ];
  useEffect(() => {
    document.title="Microsoft"
  }, [])
  
  return (
    <div className="App">
     
    
      <Routes>
			<Route path="/" element={<Home images={images}/>}/>
      <Route path='/product' element ={<Product/>}/>
     </Routes>
    
       {/* <Home images={images} /> */}
    </div>
  );
}

export default App;
