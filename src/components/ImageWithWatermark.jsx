import { Watermark } from '@hirohe/react-watermark';
import image from '../assets/pic.jpg'; // Replace with your image path

const ImageWithWatermark = () => (
  <Watermark text="Watermarked Image" opacity={0.3} fontSize={40} rotate={-45}>
    <img src={image} alt="Watermarked" style={{ width: '300px', height: '300px' }} />
  </Watermark>
);

export default ImageWithWatermark;
