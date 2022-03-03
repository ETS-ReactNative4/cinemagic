import "@/styles/globals.css";

// Reactjs Bootstrap css
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";

// Custom Reactjs Swiper css
import "@/styles/styleOverrides.css";

// page styling css
import "@/styles/pageStyles.css";

import AppProvider from "@/utils/provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp;
