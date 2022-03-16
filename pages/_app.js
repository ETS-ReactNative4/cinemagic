import "@/styles/globals.scss";

// Reactjs Bootstrap css
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";

// comp framework styling overrides
import "@/styles/compStyleOverrides.scss";

// // page styling css
// import "@/styles/pageStyles.css";

import AppProvider from "@/utils/provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp;
