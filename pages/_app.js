import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../assets/css/font-awesome.min.css";
import "swiper/swiper-bundle.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/custom.css";

import { RecoilRoot } from "recoil";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
