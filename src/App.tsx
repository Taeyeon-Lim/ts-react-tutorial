import React from 'react';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  }
  // <Greeings ...ctrl + space = '필요한 props 확인 가능'
  return <Greetings name='리액트' onClick={onClick} />;
}

export default App;
