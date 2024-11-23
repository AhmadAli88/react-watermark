import { Watermark } from '@hirohe/react-watermark';
import  { useState } from 'react';

const DynamicWatermarkText = () => {
  const [watermarkText, setWatermarkText] = useState("Initial Watermark");

  return (
    <div>
      <input
        type="text"
        value={watermarkText}
        onChange={(e) => setWatermarkText(e.target.value)}
        placeholder="Enter watermark text"
        style={{ marginBottom: '20px', padding: '10px', fontSize: '46px' }}
      />
      <Watermark text={watermarkText} fontSize={50} opacity={0.1} rotate={30}>
        <div
          style={{
            width: 500,
            height: 500,
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <h1>Dynamic Watermark Text</h1>
          <p>Change the watermark text by typing in the box above.</p>
        </div>
      </Watermark>
    </div>
  );
};

export default DynamicWatermarkText;
