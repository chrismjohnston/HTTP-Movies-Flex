import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {
    const [updateMovie, setUpdateMovie] = useState({
        title: '',
        director: '',
        metascore: '',
        stars: [],
    })

    useEffect(() => {
        const id = props.match.params.id
        axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setUpdateMovie(res.data))
      .catch(err => console.log(err.response));
    }, [])

}   

    export default UpdateMovie;