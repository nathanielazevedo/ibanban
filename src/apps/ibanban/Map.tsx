import index from "./data/index";
import { star } from "../../assets";
import { Link } from "react-router-dom";

const Level = ({ title }: { title: string }) => {
  return (
    <Link to={`/deck/${title}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "2px",
            borderRadius: "9999px",
            background: "linear-gradient(to right, #4facfe, #00f2fe)", // mimic "bg-blue-gradient"
            height: "80px",
            width: "80px",
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          key={title}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#000", // assuming "bg-primary" is black
              borderRadius: "9999px",
              height: "100%",
              width: "100%",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                "#0369a1")
            }
            onMouseOut={(e) =>
              ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                "#000")
            }
          >
            <img src={star} alt="level icon" />
          </div>
        </div>
        <h4 style={{ fontSize: "20px", paddingTop: "12px", color: "#fff" }}>
          {title}
        </h4>
      </div>
    </Link>
  );
};

const Map = () => {
  const titles = Object.keys(index);
  const rows = [];

  for (let i = 0; i < titles.length; ) {
    if (i % 3 === 0) {
      // Single centered item
      rows.push(
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            width: "100%",
          }}
        >
          <Level title={titles[i]} />
        </div>
      );
      i += 1;
    } else {
      // Row of 2
      const left = titles[i];
      const right = titles[i + 1];
      rows.push(
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "80px",
            marginTop: "20px",
            width: "100%",
          }}
        >
          <Level title={left} />
          {right && <Level title={right} />}
        </div>
      );
      i += 2;
    }
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      {rows}
    </div>
  );
};

export default Map;
