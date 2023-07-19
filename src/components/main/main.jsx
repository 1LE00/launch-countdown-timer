import "./main.css";
import Card from "../card/card";
import { useEffect, useState } from "react";

function Main() {
  const [duration, setDuration] = useState(14 * 24 * 60 * 60);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (duration === 0) {
        clearInterval(countdownInterval);
      } else {
        setDuration((prevDuration) => prevDuration - 1);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [duration]);

  useEffect(() => {
    const remainingDays = Math.floor(duration / (60 * 60 * 24));
    const remainingHours = Math.floor((duration % (60 * 60 * 24)) / (60 * 60));
    const remainingMinutes = Math.floor((duration % (60 * 60)) / 60);
    const remainingSeconds = Math.floor(duration % 60);

    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);
  }, [duration]);

  return (
    <main id="main" className="flex w-100">
      <section className="countdown flex w-100 text-center">
        <section className="days flex flex-column" >
          <Card value={days} />
          <span className="title uppercase">Days</span>
        </section>

        <section className="hours flex flex-column" >
          <Card value={hours} />
          <span className="title uppercase">Hours</span>
        </section>

        <section className="minutes flex flex-column" >
          <Card value={minutes} />
          <span className="title uppercase">Minutes</span>
        </section>

        <section className="seconds flex flex-column">
          <Card value={seconds} />
          <span className="title uppercase">Seconds</span>
        </section>
      </section>
    </main>
  );
}

export default Main;
