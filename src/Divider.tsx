import { Typography } from "@mui/material";
import React, { memo } from "react";

type TDividerProps = {
  divider: string;
}

const Divider: React.FC<TDividerProps> = ({ divider }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1,
    }}>
      <Typography variant="h5" color="text.primary">{divider}</Typography>
    </div>
  );
}

export default memo(Divider);