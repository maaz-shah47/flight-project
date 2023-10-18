const styles = {
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: 'pink',
    padding: '20px'
  }
}

const CardWrapper = ({ children }) => (
  <div style={styles.cardWrapper}>
    {children}
  </div>
);

export default CardWrapper;
