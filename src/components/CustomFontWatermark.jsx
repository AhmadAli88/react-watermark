import { Watermark } from '@hirohe/react-watermark';

const CustomFontWatermark = () => (
  <Watermark
    text="Custom Font"
    fontSize={50}
    opacity={0.15}
    rotate={-30}
    font="Comic Sans MS" // Custom font
  >
    <div
      style={{
        width: 500,
        height: 500,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1>Watermark with Custom Font</h1>
      <p>The watermark uses a custom font for styling.</p>
    </div>
  </Watermark>
);

export default CustomFontWatermark;
