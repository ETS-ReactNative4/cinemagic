import "@/styles/globals.css";

// Reactjs Bootstrap css
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";

// Custom Reactjs Swiper css
import "@/comps/ImageCarousel/customCarouselStyles.css";

// Homepage (index.js) css
import "@/styles/homepage.css";

import AppProvider from "@/utils/provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp;
