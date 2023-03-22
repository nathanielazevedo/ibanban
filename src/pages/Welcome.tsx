import styles from "../style";
import Hero from "../components/welcome/Hero";
import Stats from "../components/welcome/Stats";
import Footer from "../components/welcome/Footer";
import CTA from "../components/welcome/CTA";
import Business from "../components/welcome/Business";
import Billing from "../components/welcome/Billing";
import CardDeal from "../components/welcome/CardDeal";

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
        <Business />
        <Billing />
        <CardDeal />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Welcome;
