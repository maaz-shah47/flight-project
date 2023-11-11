import { Box } from "@mui/material";

const styles = {
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    padding: '15px',
    backgroundColor: 'white',
    maxHeight: '80vh', // Set a maximum height to the viewport height
    overflowY: 'auto', // Enable vertical scrolling when content exceeds the maximum height
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
