
import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import ImageSlider from './Components/ImageSlider';

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
       <Home images={images} />
    </div>
  );
}

export default App;
