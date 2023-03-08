type Letter = {
  value: string;
  handleChange: () => (input: string) => void;
  focused: boolean;
  state: string;
};

const Letter = ({ value, handleChange, focused, state }: Letter) => {
  let borderColor = "white";
  if (state == "completed") {
    borderColor = "green";
  } else if (state == "error") {
    borderColor = "red";
  }

  return (
    <>
      <input
        max="1"
        className="spelling-input"
        value={value}
        autoFocus={focused}
        // Higher Order Function
        onChange={(evt) => handleChange()(evt.target.value)}
        style={{ borderColor: borderColor }}
      />
    </>
  );
};

export default Letter;
