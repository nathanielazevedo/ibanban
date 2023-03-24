import styles, { layout } from "../../../style";
import Button from "../../../components/Button";
import { social } from "../assets";
import { Link } from "react-router-dom";

const Info2 = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={social}
        alt="Info2"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We have a <br className="sm:block hidden" /> social platform!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Talk with others, share your experience, and get to know more about the
        Chinese culture and language.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Link to="/social/home">
          <Button text="Get Social" />
        </Link>
      </div>
    </div>
  </section>
);

export default Info2;
