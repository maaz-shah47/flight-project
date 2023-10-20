import { Box } from "@mui/material";

const styles = {
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxWidth: '95%',
    backgroundColor: 'white',
    padding: '20px'
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
