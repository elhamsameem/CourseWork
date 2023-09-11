import { useState } from 'react'
import './App.css'
import Button from './Button';

export default function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div>
      <Button count={count} setCount={setCount} />
    </div>
  );
}
