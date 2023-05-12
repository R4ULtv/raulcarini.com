import { ImageResponse } from '@vercel/og';
import Logo from '../../../public/assets/svg/logo';

export const config = {
  runtime: 'experimental-edge',
};
 
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      <Logo/>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}