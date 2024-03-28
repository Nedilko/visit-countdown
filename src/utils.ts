import { differenceInSeconds, formatDistanceStrict } from "date-fns";

export const getTimeLeft = (tripDate: Date): string | null => {
  const now = new Date();
  const distance = differenceInSeconds(tripDate, now);
  return distance < 0 ? 'Countdown Complete!' : formatDistanceStrict(now, tripDate);
}

export const getTimeLeft_new = (tripDate: Date) => {
  const now = new Date();
  return {
    seconds: differenceInSeconds(tripDate, now)
  }
}