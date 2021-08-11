import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Sens';
        src: url('/fonts/Sens-Regular.woff2') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Sens';
        src: url('/fonts/Sens-Bold.woff2') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Sens';
        src: url('/fonts/Sens-Light.woff2') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
)

export default Fonts
