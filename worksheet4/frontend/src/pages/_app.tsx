import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
