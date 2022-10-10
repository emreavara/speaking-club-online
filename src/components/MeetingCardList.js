import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import meetings from "../data/dummy"
import MeetingCard from './MeetingCard';
export default function MeetingCardList() {
  const [spacing, setSpacing] = React.useState(0);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <Grid sx={{ flexGrow: 1, margin: 5 }} container spacing={0}>
      <Grid item xs={12}>
        <Grid container direction="row" justifyContent="center" spacing={spacing}>
          {meetings.map((meeting) => (
            <Grid xs={3} key={meeting.id} item>
              <MeetingCard data={meeting}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
