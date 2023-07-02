import './App.css'
import { useState } from 'react';
import { puppyList } from './data'

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);
  console.log("puppies list from useState: ", puppies);
  return (
    <div>
      {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
          {/* puppy list was howing error to keep the list organized so I added "key"
              Resource: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key */}
        })
      }
    </div>
  )
}

export default App
