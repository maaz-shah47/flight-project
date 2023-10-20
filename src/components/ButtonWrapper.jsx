import { Button } from "@mui/material";

const ButtonWrapper = ({ onClick, text, borderRadius }) => (
  <Button variant="contained" onClick={onClick}
    sx={{
      backgroundColor: 'black',
      color: 'white',
      width: '120px',
      fontSize: '11px',
      borderRadius: borderRadius ? borderRadius : '0px',
    }}
  > {text}</Button>
);

export default ButtonWrapper;
