import { Button } from "@mui/material";

const SettingsButton = ({ onClick, text }) => (
  <Button variant="contained" onClick={onClick}
    sx={{
      backgroundColor: 'black',
      color: 'white',
      width: '120px',
      fontSize: '11px'
    }}
  > {text}</Button>
);

export default SettingsButton;
