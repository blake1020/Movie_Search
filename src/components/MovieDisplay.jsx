import React from 'react'

function MovieDisplay({movie}) {
  const loaded = () => {
    
    
    return (
    <div>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title}/>
      <h2>{movie.Year}</h2>


    </div>
  )
}
const loading = () => {
  return <h1>Movie Loading... </h1>
}
return movie ? loaded() : loading()
}
export default MovieDisplay