import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const Letter = ({
  letter,
  index,
  refs,
  goNextWord,
}: {
  letter: string;
  index: number;
  refs: any;
  goNextWord: any;
}) => {
  const [letterState, setLetterState] = useState<string>();
  const [showCheck, setShowCheck] = useState<boolean>(false);
  const [borderColor, setBorderColor] = useState<string>("white");

  useEffect(() => {
    return () => {
      setLetterState("");
    };
  }, []);

  const handleChange = (val: string) => {
    const special = ["¯", "`", "ˇ", "´"].find((e) => e == val);
    if (val.length > 1) return;
    if (!!special) {
      setLetterState(val);
      return;
    }
    setLetterState(val);
    if (val.toLowerCase() === letter.toLowerCase()) {
      setBorderColor("lightgreen");
      if (index === refs?.length - 1) {
        setShowCheck(true);
        setTimeout(() => {
          goNextWord();
        }, 1500);
      } else {
        refs[index + 1].focus();
      }
    } else {
      setBorderColor("red");
    }
  };

  return (
    <>
      <input
        max="1"
        defaultValue={""}
        className="spelling-input"
        value={letterState}
        onChange={(evt) => handleChange(evt.target.value)}
        style={{ borderColor: borderColor }}
      />
      {showCheck && (
        <CheckIcon
          sx={{ color: "lightgreen", marginLeft: "50px", fontSize: "50px" }}
        />
      )}
    </>
  );
};

export default Letter;
