import { Watermark } from '@hirohe/react-watermark';
import image from '../assets/pic.jpg';

const ComplexLayoutWithWatermark = () => (
  <Watermark text="Sample Watermark" opacity={0.25} fontSize={30} rotate={45}>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ width: '60%', backgroundColor: '#dcdcdc', padding: '20px' }}>
        <h2>Watermark on Complex Layout</h2>
        <p>This is an example of how to add a watermark to a complex layout.</p>
      </div>
      <img src={image} alt="Example" style={{ width: '35%', height: 'auto' }} />
    </div>
  </Watermark>
);

export default ComplexLayoutWithWatermark;
