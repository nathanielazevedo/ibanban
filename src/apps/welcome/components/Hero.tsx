import styles from "../../../style";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} h-[55vh] ss:h-[75vh]`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:pl-[100px]`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Learn <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Mandarin</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          with games.
        </h1>
        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
          We offer a fun and interactive way to learn Mandarin Chinese through
          games! Our games are designed to help you build your vocabulary and
          gain confidence in using Mandarin Chinese.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} sm:my-0 my-10 relative hidden md:block`}
      >
        {/* gradient start */}
        <div className="absolute z-[0] w-[10%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
