import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {
    const [updateMovie, setUpdateMovie] = useState({
        title: '',
        director: '',
        metascore: '',
        stars: [],
    })

}   

    export default UpdateMovie;