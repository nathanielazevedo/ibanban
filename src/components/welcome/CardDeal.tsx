import { game } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Keeping you entertained <br className="sm:block hidden" /> is our #1
        priority.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        You won't want to stop playing. We have a huge library of games for you
        to play. And words to make you laugh.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={game} alt="billing" className="w-[100%] h-[50%]" />
    </div>
  </section>
);

export default CardDeal;
