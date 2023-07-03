import './App.css'
import { useState } from 'react';
import { puppyList } from './data'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("Find featuredPup: ", featuredPup);

  console.log("puppyList: ", puppyList);
  console.log("puppies list from useState: ", puppies);
  return (
    <div className='container'>
      <h1>🐶 Puppy Pals</h1>
      <div className='puppies-container'>
        <div className='puppies-list'>
        {
          puppies.map((puppy) => {
            return (  
              <p
              className='puppy-list'
              key={puppy.id}
              onClick={() => {
                console.log("Clicked Puppy ID: ", puppy.id);
                setFeatPupId(puppy.id);
                
              }}
              >
                {puppy.id}. {puppy.name}
              </p>
              
              /*
              puppy list was showing error to keep the list organized so I added "key"
              Resource: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
              Added some styling to change curser to pointer
              */
             ) 
            })
          }
        </div>
        <div className="puppy-details">
          {
            featPupId ? <div>
              <h2>Puppy Details</h2>
              <ul>
                <li>Name: <b>{featuredPup.name}</b></li>
                <li>Puppy ID: { featuredPup.id }</li>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
                {featuredPup.isCute && <li>This puppy is cute!</li>}
              </ul>
              </div> : <h3>Click on a puppy name to view details!</h3>
          }
        </div>
    </div>
      
        {
          // Adding condition to render the selected puppy ID if user clicks on a puppy
          featPupId && <p className='puppy-id'>
          Selected Puppy ID: {featPupId}
          </p>
        }
    </div>
  )
}

export default App
