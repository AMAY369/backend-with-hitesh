import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((Response)=>{
      setJokes(Response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1>My Jokes</h1>
      <h2>Jokes: {jokes.length}</h2>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
