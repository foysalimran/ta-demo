import type { AppProps } from "next/app";
import "../styles/globals.css";
import Drift from "react-driftjs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Drift appId="6h5tuhy2swrh" />
    </>
  );
}

export default MyApp;
