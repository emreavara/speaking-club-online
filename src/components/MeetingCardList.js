import * as React from "react";
import Grid from "@mui/material/Grid";
import meetings from "../data/dummy";
import MeetingCard from "./MeetingCard";
import Box from "@mui/material/Box";

export default function MeetingCardList() {
  return (
      <Grid
      sx={{padding : "10px", marginBottom: 5}}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {meetings.map((meeting) => (
          <Box xs={3} key={meeting.id} sx={{ marginTop: 2, marginBottom: 2 }}>
            <MeetingCard data={meeting} />
          </Box>
        ))}
      </Grid>
  );
}