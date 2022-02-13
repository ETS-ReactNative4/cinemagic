import "@/styles/globals.css";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppProvider from "@/util/provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp;
