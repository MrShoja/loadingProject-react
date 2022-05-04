import { useState, useTransition } from 'react';
import './App.css';
import { c } from './numbers';
import NumberList from './NumberList';

function App() {
  const [value, setValue] = useState('');
  const [numbers, setNumbers] = useState(c());
  const [isPending, startTransition] = useTransition()


  const Chandler = event => {
    setValue(event.target.value);
    startTransition(() => {
      setNumbers(c(event.target.value))
    })
  }
  return (
    <div className="App">
      <input value={value} type="text" onChange={Chandler} />
      {isPending ? <h1>Loading Just The Moment...</h1> : null}
      {
        <NumberList numbers={numbers} />
      }
    </div>
  );
}

export default App;
