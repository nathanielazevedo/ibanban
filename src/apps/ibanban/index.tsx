import styles from "../../style";
import { star } from "../../assets";
import { Link } from "react-router-dom";
import titles from "./data/Titles";
import LockIcon from "@mui/icons-material/Lock";

const Level = ({ title, isFirst }: any) => {
  return (
    <Link to={isFirst ? `/ibanban/deck/${title}` : ""}>
      <div className="flex flex-col items-center">
        <div
          className="p-[2px] rounded-full bg-blue-gradient text-green h-24 w-24 mt-10 flex items-center justify-center flex-col cursor-pointer hover:bg-sky-700"
          key={title}
        >
          <div
            className={`${styles.flexCenter} flex-col bg-primary hover:bg-sky-900 rounded-full w-[100%] h-[100%]`}
          >
            {!isFirst ? <LockIcon fontSize="large" /> : <img src={star} />}
          </div>
        </div>
        <h4 className="text-[30px] pt-3">{title}</h4>
      </div>
    </Link>
  );
};

const Map = () => {
  return (
    <div className="w-full flex flex-col items-center bg-primary">
      {titles.map((title, index) => {
        index = index + 1;
        const isSingle = index === 0 || index % 3 === 1;
        const isFirst = index === 1;
        if (!isSingle && (index + 1) % 3 !== 1) {
          return (
            <div className="flex flex-row mt-10 gap-20">
              <Level title={title} />
              <Level title={titles[index]} />
            </div>
          );
        } else {
          return (
            <div className="mt-10">
              {isSingle && <Level title={title} isFirst={isFirst} />}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Map;
