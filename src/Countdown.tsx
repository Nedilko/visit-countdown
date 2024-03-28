import { Box } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { Duration, intervalToDuration } from 'date-fns';
import Divider from "./assets/Divider.tsx";
import Digit from "./Digit.tsx";

interface CountdownProps {
  tripDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ tripDate }) => {
  const [timeLeft, setTimeLeft] = useState<Duration>(intervalToDuration({
    start: new Date(),
    end: tripDate
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const duration = intervalToDuration({
        start: now,
        end: tripDate
      });
      setTimeLeft(duration);
    }, 1000);

    return () => clearInterval(interval);
  }, [tripDate]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: 1,
      mt: 10,
    }}>
      <Digit value={timeLeft.days} label="днів"/>
      <Divider divider=":"/>
      <Digit value={timeLeft.hours} label="годин"/>
      <Divider divider=":"/>
      <Digit value={timeLeft.minutes} label="хвилин"/>
      <Divider divider=":"/>
      <Digit value={timeLeft.seconds ?? 0} label="секунд"/>
    </Box>
  );
};

export default Countdown;