import React from "react";

type ButtonProps = {
  buttonValue: string;
  buttonAction: () => void;
  id: string;
};
const TimerButton: React.FC<ButtonProps> = ({ buttonValue, buttonAction, id }) => {
  return (
    <button value={buttonValue} onClick={() => buttonAction()} id={id}>
      {buttonValue}
    </button>
  );
};

export default TimerButton;
