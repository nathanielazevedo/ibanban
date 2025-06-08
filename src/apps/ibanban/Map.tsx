import index from "./data/index";
import styles from "../../style";
import { star } from "../../assets";
import { Link } from "react-router-dom";

const Level = ({ title }: { title: string }) => {
  return (
    <Link to={`/deck/${title}`}>
      <div className="flex flex-col items-center">
        <div
          className="p-[2px] rounded-full bg-blue-gradient text-green h-24 w-24 mt-10 flex items-center justify-center flex-col cursor-pointer"
          key={title}
        >
          <div
            className={`${styles.flexCenter} flex-col bg-primary hover:bg-sky-900 rounded-full w-[100%] h-[100%]`}
          >
            {<img src={star} />}
          </div>
        </div>
        <h4 className="text-[30px] pt-3">{title}</h4>
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
        <div key={i} className="flex justify-center mt-5">
          <Level title={titles[i]} />
        </div>
      );
      i += 1;
    } else {
      // Row of 2
      const left = titles[i];
      const right = titles[i + 1];
      rows.push(
        <div key={i} className="flex flex-row mt-5 gap-20">
          <Level title={left} />
          {right && <Level title={right} />}
        </div>
      );
      i += 2;
    }
  }

  return (
    <div className="w-full flex flex-col items-center bg-primary">{rows}</div>
  );
};

export default Map;
