import React from 'react';

function App(props) {
  const style = {
    width: '300px',
    height: '300px',
    border: '7px solid orange',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'grey',
  };
  return (
    <div style={style}>
      <button style={{ height: '50px' }} className="create_chat">Create chat</button>
      <button style={{ height: '50px' }} className="join_chat">Join chat</button>
    </div>
  );
}

export default App;