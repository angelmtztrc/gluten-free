import type { AppProps } from 'next/app';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '@/styles/globals.css';

import { AuthGuard } from '@/guards';
import loadFonts from '@/libs/fonts.lib';
import { queryClient } from '@/libs/query.lib';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={loadFonts}>
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
