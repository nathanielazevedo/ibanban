import { Link } from "react-router-dom";
import styles from "../../../style";
import Button from "../../../components/Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Go play some games now!</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        What are you waiting for? Start learning now!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link to="/map">
        <Button />
      </Link>
    </div>
  </section>
);

export default CTA;
