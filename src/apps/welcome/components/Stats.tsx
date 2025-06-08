import { stats } from "../constants";

const Stats = () => (
  <section
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      // marginBottom: "24px",
    }}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          // margin: "12px",
        }}
      >
        <h4
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "30.89px",
            lineHeight: "43.16px",
            color: "white",
          }}
        >
          {stat.value}
        </h4>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "15.45px",
            lineHeight: "21.58px",
            textTransform: "uppercase",
            marginLeft: "12px",
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
