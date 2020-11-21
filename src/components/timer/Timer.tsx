import React, { useRef, useState } from "react";
import TimerButton from "../timerButton/TimerButton";

function timeToString(time: number) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMiSec = (diffInSec - ss) * 1000;
  let ms = Math.floor(diffInMiSec);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(3, "0");
  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

export const Timer = () => {
  const [isStart, setIsStart] = useState(true);
  const [time, setTime] = useState(0);
  const countRef: any = useRef(null);

  const startTimer = () => {
    if (isStart) {
      let startTime = Date.now() - time;
      setIsStart(false);
      countRef.current = setInterval(() => {
        let remainigTime = Date.now() - startTime;
        setTime(remainigTime);
      }, 100);
    }
  };

  const pauseTimer = () => {
    clearInterval(countRef.current);
    setIsStart(true);
    setTime(time);
  };

  const resetTimer = () => {
    setTime(0);
    setIsStart(true);
    clearInterval(countRef.current);
  };

  return (
    <div className="main-timer-container">
      <h1>React Timer App</h1>
      <div className="time-div">
        <p>{timeToString(time)}</p>
      </div>
      <div className="timer-btns">
        <TimerButton buttonValue={"Start"} buttonAction={startTimer} id={"start-btn"} />
        <TimerButton buttonValue={"Pause"} buttonAction={pauseTimer} id={"pause-btn"} />
        <TimerButton buttonValue={"Reset"} buttonAction={resetTimer} id={"reset-btn"} />
      </div>
    </div>
  );
};
