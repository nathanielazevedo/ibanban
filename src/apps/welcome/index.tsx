import styles from "../../style";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Info1 from "./components/Info1";
import Info3 from "./components/Info3";

const Welcome = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        {/* <Info1 /> */}
        {/* <Info3 /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Welcome;
