import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateClock = () => {
        setTime(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        let interval = setInterval(() => {
            updateClock();
        }, 1000);

        return () => clearInterval(interval);
    });
    return <div>Time right now: {time}</div>;
};

export default Clock;
