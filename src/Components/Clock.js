import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [duration, setDuration] = useState("--");
  const updateClock = () => {
    setTime(new Date());
  };
  const updateDuration = () => {
    if (Number(time.getHours()) > 12) {
      setDuration("PM");
    } else {
      setDuration("AM");
    }
  };
  useEffect(() => {
    let interval = setInterval(() => {
      updateClock();
    }, 1000);
    updateDuration();

    return () => clearInterval(interval);
  });
  const formatHours = (t) => {
    let h = Number(t.getHours());
    if (h < 10) {
      h = `0${h}`;
    } else if (h > 12 && h < 22) {
      h = h - 12;
      h = `0${h}`;
    } else if (h >= 22) {
      h = h - 12;
    }
    h = `${h}`;
    let min = Number(t.getMinutes());
    if (min < 10) {
      min = `0${min}`;
    }
    let sec = Number(t.getSeconds());
    if (sec < 10) {
      sec = `0${sec}`;
    }
    return [h, min, sec];
  };

  return (
    <Container>
      <Border>
        <Time>
          <Div> {formatHours(time)[0]}</Div>
          <Div> {formatHours(time)[1]} </Div>
          <Seconds> {duration} </Seconds>
        </Time>
        <Duration>{formatHours(time)[2]}</Duration>
      </Border>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #282c34;
`;

const Div = styled.div`
  font-size: 5rem;
`;

const Seconds = styled.div`
  font-size: 2rem;
  margin-top: -10px;
`;
const Border = styled.div`
  display: flex;
  position: relative;
  padding: 2rem;
  border: 10px solid lightblue;
  text-align: right;
  border-radius: 25px;
  background-image: linear-gradient(dodgerblue, lightblue);
`;
const Time = styled.div``;
const Duration = styled.div`
  font-size: 10rem;
`;
export default Clock;
