import styled from "@emotion/styled";
import { LinearProgress, linearProgressClasses } from "@mui/material";
import { differenceInSeconds } from "date-fns";
import React, { memo, useEffect, useState } from "react";

type TProgressBarProps = {
  tripDate: Date;
}

const WEEK_SECONDS = 5 * 24 * 3600;

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

const ProgressBar: React.FC<TProgressBarProps> = ({ tripDate }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(differenceInSeconds(tripDate, new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(old => old - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [tripDate]);

  return <BorderLinearProgress
    sx={{
      height: 10,
      width: '100%',
    }}
    color="primary"
    variant="determinate"
    value={(1 - secondsLeft / WEEK_SECONDS) * 100}
  />
};

export default memo(ProgressBar);