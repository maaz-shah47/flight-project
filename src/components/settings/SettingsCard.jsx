import { Card, CardContent, Typography } from "@mui/material";

const SettingsCard = ({ title, content }) => {
  return (
    <Card style={{
      height: "75px",
      backgroundColor: '#f5f5f5',
      width: '250px',
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 12, fontWeight: 'bold' }} color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SettingsCard;
