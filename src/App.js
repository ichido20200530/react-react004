import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [test, setTest] = useState(0);

  // const countUpMethod = () => {
  //   setTest( test + 1 )
  // }

  return (
    <div>
      {test}
      <button onClick={ () => setTest(test + 1) }>Click</button>
      {/* <button onClick={countUpMethod}>Click</button> */}
    </div>
  );
}
