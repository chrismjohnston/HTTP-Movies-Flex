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

    const movieInputHandler = e => {
        const name = e.target.name;
        let value = e.target.value;
        if(name === 'metascore') {
            value = Number(value);
        }

        setUpdateMovie({...updateMovie, [name]: value})
    }

    const starsHandler = (e, i) => {
        let updateStars = [...updateMovie.stars];
        updateStars[i] = e.target.value;
        setUpdateMovie({...updateMovie, stars: [...updateStars]})
    }

    const updatedMovieSubmit = () => {
        console.log(updateMovie);
        axios
        .put(`http://localhost:5000/api/movies/${updateMovie.id}`, updateMovie)
        .then(res => {
        props.history.push('/')}
        )
        .catch(err => console.log(err.response));
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            updatedMovieSubmit();
        }}>
            <input type='text' name='title' value={updateMovie.title} onChange={(e) => movieInputHandler(e)}/>
            <input type='text' name='director' value={updateMovie.director} onChange={(e) => movieInputHandler(e)}/>
            <input type='number' name='metascore' value={updateMovie.metascore} onChange={(e) => movieInputHandler(e)}/>
            {updateMovie.stars.map((star, index) => {
                return <input type='text' key={index} value={updateMovie.stars[index]} onChange={(e) => starsHandler(e, index)} />
            })}
            <button>Submit Movie</button>
        </form>
    )
}   

    export default UpdateMovie;