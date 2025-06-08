import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

const Welcome = () => (
  <div
    style={{
      backgroundColor: "black", // assuming "bg-primary" is black
      width: "100%",
      overflow: "hidden",
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Hero />
    </div>

    <div
      style={{
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Stats />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Welcome;
