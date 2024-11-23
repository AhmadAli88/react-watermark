import { Watermark } from '@hirohe/react-watermark';

const Basic = () => (
  <Watermark text="Mark">
    <div style={{ width: 500, height: 500, backgroundColor: '#5f5f5f' }}>
      Lorem ipsum
    </div>
  </Watermark>
)

export default Basic;