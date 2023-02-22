import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import loadFonts from '@/libs/fonts.lib';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={loadFonts}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
