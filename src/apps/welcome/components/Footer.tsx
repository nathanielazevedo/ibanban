const Footer = () => (
  <section
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingBottom: "60px",
    }}
  >
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column", // fallback for mobile
        paddingTop: "44px",
        // borderTop: "1px solid #3F3E45",
      }}
    >
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "27px",
          color: "white",
          textAlign: "center",
        }}
      >
        Copyright Ⓒ 2022 Ibanban. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
