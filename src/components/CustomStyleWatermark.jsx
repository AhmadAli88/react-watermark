import { Watermark } from '@hirohe/react-watermark';

const CustomStyleWatermark = () => (
  <Watermark text="Custom Styled" fontSize={50} opacity={0.1} rotate={0}>
    <div
      style={{
        width: 500,
        height: 500,
        backgroundColor: '#add8e6',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h1>Watermarked Content</h1>
      <p>Content with a custom-styled watermark applied to it.</p>
    </div>
  </Watermark>
);

export default CustomStyleWatermark;
