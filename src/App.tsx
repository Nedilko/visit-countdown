import {  Paper, Stack, Typography } from "@mui/material";
import Countdown from "./Countdown.tsx";
import Progress from "./Progress.tsx";

function App() {
  const tripDate = new Date('2024-03-29T17:50:00');

  return (
    <Paper id="pap" sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Stack sx={{
  alignItems: 'center',
        mt: -20
      }}>
        <Typography variant="h4" color="text.primary" align="center">
          До відʼїзду поїзда залишилося:
        </Typography>
        <Countdown tripDate={tripDate}/>
        <Progress tripDate={tripDate}/>
      </Stack>
    </Paper>
  )
}

export default App
