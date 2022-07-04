import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {globalStyles()}
    </>
  );
}

export default MyApp;
