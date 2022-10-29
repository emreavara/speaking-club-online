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
  Divider
} from "@mui/material";
import { height } from "@mui/system";
function MeetingInfo({ meeting }) {
  return (
    <Grid container>
      <Grid item sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "5px",
            width: "100%",
            height: "250px",
          }}
        >
          <img
            src="https://media.baamboozle.com/uploads/images/368954/1623241895_147909.jpeg"
            alt="Lang"
          />
        </Box>
      </Grid>
      <Grid item sx={{ width: "100%", padding: "5px" }}>
        <Stack spacing={3} direction="row">
          <Box xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader title="Target Words" />
              <CardContent>
                <List>
                  <ListItemText>Name</ListItemText>
                </List>
              </CardContent>
            </Card>
          </Box>

          <Box xs={3} sm={3} sx={{ backgroundColor: "white", height: "300px" }}>
            <Typography>Text</Typography>
          </Box>
          <Box xs={3} sm={3} sx={{ backgroundColor: "white", height: "300px" }}>
            <Typography>Text</Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default MeetingInfo;
