import React from "react";
import { Link } from "react-router-dom";
import { Titles } from "../data/Titles";
import styles from "../style";
import star from "../assets/star.svg";

const Map = () => {
  return (
    <div className="w-full flex flex-col items-center bg-primary">
      {Titles.map((title, index) => {
        index = index + 1;
        const isSingle = index === 0 || index % 3 === 1;

        if (!isSingle && (index + 1) % 3 !== 1) {
          return (
            <div className="flex flex-row mt-10 gap-20">
              <Link to={`/ibanban/deck/${title.english}/review`}>
                <div className="flex flex-col items-center">
                  <div
                    className="p-[2px] rounded-full bg-blue-gradient text-green h-24 w-24 mt-10 flex items-center justify-center flex-col cursor-pointer hover:bg-sky-700"
                    key={title.english}
                  >
                    <div
                      className={`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%]`}
                    >
                      <img src={star} />
                    </div>
                  </div>
                  {title.english}
                </div>
              </Link>
              <Link to={`/ibanban/deck/${title.english}/review`}>
                <div className="flex flex-col items-center">
                  <div
                    className="p-[2px] rounded-full bg-blue-gradient text-green h-24 w-24 mt-10 flex items-center justify-center flex-col cursor-pointer hover:bg-sky-700"
                    key={title.english}
                  >
                    <div
                      className={`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%]`}
                    >
                      <img src={star} />
                    </div>
                  </div>
                  {Titles[index].english}
                </div>
              </Link>
            </div>
          );
        } else {
          return (
            <div className="mt-10">
              {isSingle ? (
                <Link to={`/ibanban/deck/${title.english}/review`}>
                  <div className="flex flex-col items-center">
                    <div
                      className="p-[2px] rounded-full bg-blue-gradient text-green h-24 w-24 mt-10 flex items-center justify-center flex-col cursor-pointer hover:bg-sky-700"
                      key={title.english}
                    >
                      <div
                        className={`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%]`}
                      >
                        <img src={star} />
                      </div>
                    </div>
                    {title.english}
                  </div>
                </Link>
              ) : null}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Map;
