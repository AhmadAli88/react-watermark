import { Watermark } from '@hirohe/react-watermark';

const TextWithWatermark = () => (
  <Watermark text="Confidential" fontSize={30} rotate={30} opacity={0.2}>
    <div style={{ padding: '50px', fontSize: '20px', backgroundColor: '#e3e3e3' }}>
      This document is confidential. Please handle with care.
    </div>
  </Watermark>
);

export default TextWithWatermark;
