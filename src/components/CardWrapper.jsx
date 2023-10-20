import { Box } from "@mui/material";

const styles = {
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    padding: '15px',
    backgroundColor: 'white',
  }
}

const CardWrapper = ({ children, customStyles }) => (
  <Box style={{
    ...styles.cardWrapper,
    ...customStyles,
  }}>
    {children}
  </Box>
);

export default CardWrapper;
