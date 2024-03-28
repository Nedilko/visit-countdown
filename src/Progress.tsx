import styled from "@emotion/styled";
import { Box, LinearProgress, linearProgressClasses } from "@mui/material";
import { differenceInSeconds } from "date-fns";
import React, { useEffect, useState } from "react";
import TrainIcon from '@mui/icons-material/Train';
import HomeIcon from '@mui/icons-material/Home';

type TProgressProps = {
  tripDate: Date;
}

const WEEK_SECONDS = 604800;

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#595959',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#308fe8',
  },
}));

const Progress: React.FC<TProgressProps> = ({ tripDate }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(differenceInSeconds(tripDate, new Date()));


  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(old => old - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [tripDate]);

  return (
    <Box sx={{
      mt: 6,
      width: '80%',
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    }}
    >
      <HomeIcon fontSize="large" sx={{
        color: '#8f8f8f'
      }} />
      <BorderLinearProgress
        sx={{
          height: 10,
          width: '100%',
        }}
        color="primary"
        variant="determinate"
        value={(1 - secondsLeft / WEEK_SECONDS) * 100}
      />
      <TrainIcon fontSize="large" sx={{
        color: '#eea41a'
      }} />
    </Box>
  )
};

export default Progress;