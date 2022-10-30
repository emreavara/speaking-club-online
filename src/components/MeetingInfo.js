import React from "react";
import {
  Grid,
  Box,
  Stack,
  Typography,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { height } from "@mui/system";
import DescriptionCard from "./DescriptionCard";
function MeetingInfo({ meeting }) {
  return (
    <Grid
      sx={{ padding: "10px", marginBottom: 5 }}
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "5px",
            width: "100%",
            height: "450px",
          }}
        >
          <img
            src="https://media.baamboozle.com/uploads/images/368954/1623241895_147909.jpeg"
            alt="Lang"
          />
        </Box>
      </Grid>
      <Grid
        sx={{ padding: "10px", marginTop: 5 }}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box xs={5}>
          <DescriptionCard data={meeting.data.targetWords} />
        </Box>

        <Box xs={5}>
          <DescriptionCard data={meeting.data.targetGrammar} />
        </Box>
        <Box xs={5}>
          <DescriptionCard data={meeting.data.questions} />
        </Box>
      </Grid>
      >
    </Grid>
  );
}

export default MeetingInfo;
