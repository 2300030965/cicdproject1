// src/App.js
import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1>Welcome to My React Page</h1>
      <p>This is a simple React component.</p>
      <button onClick={() => alert('Hello from React!')}>Click Me</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  }
};

export default App;
