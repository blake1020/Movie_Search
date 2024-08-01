import React, { useState } from 'react'

function Form(props) {

    const [formData, setFormData] = useState({
        searchTerm: ''
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            //searchTerm: event.target.value
            [event.target.name] : event.target.value
        })
    }
    const handleSubmit = (event) => {
        //prevent from refreshing on submission
        event.preventDefault();

        //pass the search term to the moviesearch propmpt
        props.movieSearch(formData.searchTerm)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name="searchTerm" value={formData.searchTerm} onChange={handleChange} />
            <input type='submit'  value="submit" />
        </form>
    </div>
  )
}

export default Form
