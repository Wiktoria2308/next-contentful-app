import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
}, []);
  return (
  
      <Component {...pageProps} />

  )
}

export default MyApp
