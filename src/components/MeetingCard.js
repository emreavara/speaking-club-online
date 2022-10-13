import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function MeetingCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={data.title}
        subheader={
          <>
            <AccessTimeIcon />
            {` ${data.time} ${data.date}`}
          </>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={data.imgSource}
        alt="Speaking Club"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: 3,
          }}
        >
          <Button href={data.meetingLink} size="large" variant="contained">
            Join
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MeetingCard;
