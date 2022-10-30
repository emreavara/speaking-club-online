import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
function DescriptionCard({ data }) {
  // TODO:  FIX THIS PROBLEM
  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardHeader title={data.title} />
      <CardContent>
        {data.data.map((item, index) => {
          <Typography key={index} variant="body2" color="text.secondary">
            {item}
          </Typography>;
        })}
      </CardContent>
    </Card>
  );
}

export default DescriptionCard;
