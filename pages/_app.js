import GlobalLayout from "../components/layout/global-layout/GlobalLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
