import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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
          <Stack spacing={1} direction="row">
            <Button href="/meeting" size="large" variant="contained">
              More
            </Button>
            <Button href={data.meetingLink} size="large" variant="contained">
              Join
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MeetingCard;
