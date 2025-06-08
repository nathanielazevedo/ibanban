const Hero = () => {
  const containerStyle = {
    padding: "150px 24px",
    paddingBottom: "70px",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start",
    maxWidth: "1200px",
  };

  const headingStyle = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(32px, 6vw, 64px)",
    lineHeight: 1.2,
    margin: 0,
  };

  const subheadingStyle = {
    ...headingStyle,
    fontWeight: 600,
    fontSize: "clamp(28px, 5vw, 56px)",
    marginTop: "8px",
    marginBottom: "20px",
  };

  const gradientText = {
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const paragraphStyle = {
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#ccc",
    maxWidth: "600px",
  };

  return (
    <section id="home" style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>
          Learn <span style={gradientText}>Mandarin</span>
        </h1>
        <h2 style={subheadingStyle}>with games.</h2>
        <p style={paragraphStyle}>
          We offer a fun and interactive way to learn Mandarin Chinese through
          games! Our games are designed to help you build your vocabulary and
          gain confidence in using Mandarin Chinese.
        </p>
      </div>
    </section>
  );
};

export default Hero;
