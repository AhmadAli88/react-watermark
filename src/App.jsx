import './App.css';
import Basic from './components/Basic';
import ComplexLayoutWithWatermark from './components/ComplexLayoutWithWatermark';
import CustomFontWatermark from './components/CustomFontWatermark';
import CustomStyleWatermark from './components/CustomStyleWatermark';
import DynamicWatermarkText from './components/DynamicWatermarkText';
import ImageWithWatermark from './components/ImageWithWatermark';
import TextWithWatermark from './components/TextWithWatermark';

function App() {
  return (
    <div>
      <Basic />
      <TextWithWatermark />
      <ImageWithWatermark/>
      <ComplexLayoutWithWatermark/>
      <CustomStyleWatermark/>
      <CustomFontWatermark/>
      <DynamicWatermarkText/>
    </div>
  );
}

export default App;
