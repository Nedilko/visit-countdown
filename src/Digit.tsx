import { Box, Typography } from "@mui/material";
import React, { memo } from "react";

type TDigitProps = {
  value: number | undefined;
  label: string;
};

const Digit: React.FC<TDigitProps> = ({ value, label }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      gap: 1,
      minWidth: 60,
    }}>
      <Typography variant="h5" color="text.primary">{value ?? 0}</Typography>
      <Typography textTransform="uppercase" variant="body1" color="text.secondary">{label}</Typography>
    </Box>
  );
}

export default memo(Digit);
