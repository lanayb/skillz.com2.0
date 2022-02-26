import React from 'react';

const styles = {
  card: {
    // background: '#e8eaf6',
  },
  heading: {
    textAlign: "center",
    background: '',
    fontSize: '1.5rem',
    color: 'black',
    padding: '5px'
  },
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Lanay Brown</div>
      
    </div>
  );
}

export default Navbar;
