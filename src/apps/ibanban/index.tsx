import styles from "../../style";
import { star } from "../../assets";
import { Link } from "react-router-dom";
import titles from "./data/Titles";
import LockIcon from "@mui/icons-material/Lock";
import { useAppSelector } from "../../hooks/redux";
import { setCurrentLevel } from "../../state";
import { useDispatch } from "react-redux";

const Level = ({
  title,
  isFirst,
  index,
}: {
  title: string;
  isFirst?: boolean;
  index: number;
}) => {
  const level = useAppSelector((state) => state.level);
  const dispatch = useDispatch();
  const unlocked =
    level[title]?.completed || level[titles[index - 1]]?.completed || isFirst;
  return (
    <Link
      to={unlocked ? `/deck/${title}` : ""}
      onClick={() => dispatch(setCurrentLevel(title))}
    >
      <div className="flex flex-col items-center">
        <div
          className="p-[2px] rounded-full bg-blue-gradient text-green h-24 w-24 mt-10 flex items-center justify-center flex-col cursor-pointer"
          key={title}
        >
          <div
            className={`${styles.flexCenter} flex-col bg-primary hover:bg-sky-900 rounded-full w-[100%] h-[100%]`}
          >
            {!unlocked ? <LockIcon fontSize="large" /> : <img src={star} />}
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
              <Level title={title} index={index - 1} />
              <Level title={titles[index]} index={index} />
            </div>
          );
        } else {
          return (
            <div className="mt-10">
              {isSingle && (
                <Level title={title} isFirst={isFirst} index={index} />
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Map;
