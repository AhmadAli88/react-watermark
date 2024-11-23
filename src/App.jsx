import './App.css';
import Basic from './components/Basic';
import ImageWithWatermark from './components/ImageWithWatermark';
import TextWithWatermark from './components/TextWithWatermark';

function App() {
  return (
    <div>
      <Basic />
      <TextWithWatermark />
      <ImageWithWatermark/>
    </div>
  );
}

export default App;
