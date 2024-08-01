import React from 'react'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import { useState, useEffect } from 'react'


function App() {
  const apiKey = '98e3fb1f'
  const [movie, setMovie] = useState(null)


const getMovie = async (searchTerm) =>{
try {
  //fetch request with search term
  //store the movie date in state

  const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
  const data = await response.json()
 
  setMovie(data)
  
} catch (error) {
  console.log(error) 
}
} 
useEffect(() => {
  getMovie("Finding nemo")
}, {})

  return (
    <div>
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} /> 
    </div>
  )
}

export default App