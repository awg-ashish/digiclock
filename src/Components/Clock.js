import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tilt from "./Tilt";
import "../index.css";
const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [session, setSession] = useState("--");
  const updateClock = () => {
    setTime(new Date());
  };
  const updateDuration = () => {
    if (Number(time.getHours()) > 12) {
      setSession("PM");
    } else {
      setSession("AM");
    }
  };
  useEffect(() => {
    let interval = setInterval(() => {
      updateClock();
    }, 1000);
    updateDuration();

    return () => clearInterval(interval);
  });
  const options = {
    scale: 1.05,
    speed: 1000,
    max: 10,
    glare: true,
    "max-glare": 0.1,
  };
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
      <Tilt options={options} className="blur">
        <Border>
          <Div>
            <Time> {formatHours(time)[0]}</Time>
            <Time> {formatHours(time)[1]} </Time>
          </Div>
          <Seconds>{formatHours(time)[2]}</Seconds>
          <Session> {session} </Session>
          <DateContainer>{time.toDateString()}</DateContainer>
        </Border>
      </Tilt>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ddd;
`;

const Time = styled.div`
  font-size: 5rem;
  font-family: "Iceland", cursive;
`;

const Session = styled.div`
  font-size: 1.5rem;
  align-self: center;
  font-family: "Bungee Outline", cursive;
`;
const Border = styled.div`
  display: flex;
  position: relative;
  padding: 2.5rem;
  border-top: 2px solid #333;
  border-left: 2px solid #333;
  text-align: right;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  min-width: 500px;
`;
const DateContainer = styled.div`
  font-size: 2rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  padding: 0.5rem;
  font-family: "Iceland", cursive;
`;
const Seconds = styled.div`
  font-size: 10rem;
  font-family: "Bungee Shade", cursive;
`;
const Div = styled.div`
  align-self: center;
  padding: 1rem;
`;
export default Clock;
