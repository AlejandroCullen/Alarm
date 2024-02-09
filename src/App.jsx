import "./App.css";
import Minutes from "./Components/Minutes";
import Interval from "./Components/Interval";
import ButtonsFunc from "./Components/ButtonsFunc";
import { useState, useEffect } from "react";
import cr7 from "./Components/cr7sound.mp3";
import brutalisimo from "./Components/brutalisimo.mp3";

function App() {
  const [minutes, setMinutes] = useState(25);
  const [left, setLeft] = useState(5);
  const [start, setStart] = useState(false);
  const [seg, setSeg] = useState(0);
  const [counter, setCounter] = useState(minutes);
  const [leftInterval, setLeftInterval] = useState(left);
  const [segInterval, setSegInterval] = useState(0);

  const upLeft = () => {
    if (start) {
      return;
    }
    if (left >= 1) {
      setLeft(left + 1);
      setLeftInterval(left + 1);
      setSegInterval(0);
    }

    if (left === 60) {
      setLeft(left);
      setLeftInterval(left);
    }
  };

  const minLeft = () => {
    if (start) {
      return;
    }
    if (left === 1) {
      setLeft(left);
    } else {
      setLeft(left - 1);
      setLeftInterval(left - 1);
      setSegInterval(0);
    }
  };

  const upNum = () => {
    if (start) {
      return;
    }

    if (counter === 0 && seg === 0) {
      return;
    }
    if (minutes >= 1) {
      setMinutes(minutes + 1);
      setCounter(minutes + 1);
      setSeg(0);
    }

    if (minutes === 60) {
      setMinutes(minutes);
      setCounter(minutes);
    }
  };

  const minNum = () => {
    if (start) {
      return;
    }
    if (counter === 0 && seg === 0) {
      return;
    }
    if (minutes === 1) {
      setMinutes(minutes);
    } else {
      setMinutes(minutes - 1);
      setCounter(minutes - 1);
      setSeg(0);
    }
  };

  useEffect(() => {
    let intervalId;

    if (start) {
      intervalId = setInterval(() => {
        if (counter === 0 && seg === 0) {
          let audio = new Audio(cr7);
          audio.play();

          setCounter("sonando");
          setSeg("sonando");
        }

        if (seg === 0 && counter > 0) {
          setCounter(counter - 1);
          setSeg(59);
        }

        if (seg > 0) {
          setSeg(seg - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [start, seg]);

  useEffect(() => {
    let newIntervalID;

    if (start && counter === "sonando" && seg === "sonando") {
      newIntervalID = setInterval(() => {
        setLeftInterval(leftInterval);

        if (leftInterval === 0 && segInterval === 0) {
          let lastAudio = new Audio(brutalisimo);
          lastAudio.currentTime = 5.9;
          lastAudio.play();
          setLeftInterval(leftInterval)
          setSeg(0) 
          setStart(false);
          
        }

        if (segInterval === 0 && leftInterval > 0) {
          setLeftInterval(leftInterval - 1);
          setSegInterval(59);
        }

        if (segInterval > 0) {
          setSegInterval(segInterval - 1);
        }
      }, 1000);
    } else {
      clearInterval(newIntervalID);
    }

    return () => clearInterval(newIntervalID);
  }, [start, segInterval, counter, seg]);

  console.log(start);

  const play = () => {
    setStart(!start);
    if (counter === 0 && seg === 0) {
    }
  };

  const reset = () => {
    if (start) {
      return;
    }
    setMinutes(25);
    setSeg(0);
    setLeft(5);
    setCounter(25);
  };

  const assingFormat = (units) => {
    return units < 10 ? "0" + units : units;
  };

  const segFormat = assingFormat(seg);
  const minFormat = assingFormat(counter);
  const leftFormat = assingFormat(leftInterval);
  const leftSegFormat = assingFormat(segInterval);

  const newTime = `${minFormat}:${segFormat}`;
  const newLeft = `${leftFormat}:${leftSegFormat}`;

  return (
    <main className="container">
      <h1>Alarm 25 + 5</h1>
      <section className="cont-func">
        <Minutes upNum={upNum} minNum={minNum} minutes={minutes} />
        <Interval upLeft={upLeft} minLeft={minLeft} left={left} />
      </section>
      <section className="alarm-container">
        <h2 className="break">TIME</h2>
        <span className="timer">
          {(newTime[1] === "0" &&
            newTime[0] === "0" &&
            newTime[3] === "0" &&
            newTime[4] === "0") ||
          newTime.includes("sonando") === true
            ? newLeft
            : newTime}
        </span>
      </section>
      <ButtonsFunc play={play} reset={reset} />
    </main>
  );
}

export default App;
