//functionality
import { scrollClassAdder } from "../utils/scrollClassAdder";

//components
import SectionOne from "../components/welcome/SectionOne";
// import SectionTwo from "../components/welcome/SectionTwo";
// import SectionThree from "../components/welcome/SectionThree";
import Footer from "../components/welcome/Footer";

const Welcome = () => {
  scrollClassAdder();

  return (
    <>
      <SectionOne />
      {/* <SectionTwo />
      <SectionThree /> */}
      <Footer />
    </>
  );
};

export default Welcome;
