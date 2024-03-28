import { Box } from "@mui/material";
import React, { memo } from "react";
import TrainIcon from '@mui/icons-material/Train';
import HomeIcon from '@mui/icons-material/Home';
import ProgressBar from "./ProgressBar.tsx";

type TProgressProps = {
  tripDate: Date;
}

const Progress: React.FC<TProgressProps> = ({ tripDate }) => {
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
      }}/>
      <ProgressBar tripDate={tripDate}/>
      <TrainIcon fontSize="large" sx={{
        color: '#eea41a'
      }}/>
    </Box>
  )
};

export default memo(Progress);