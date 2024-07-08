import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Moviess = () => {
const[search ,SetSearch]=useState([]);
// console.log(search,"search")

 async function getMovie(){
  
  
  const options = {
    method: 'GET',
    url: 'https://movies-api14.p.rapidapi.com/shows',
    headers: {
      'x-rapidapi-key': 'caaea96702msh0cbc3ed36797b3ap15ec96jsn30817794d7f0',
      'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
    }
  };
  
  
 
  try {
    const response = await axios.request(options);
    SetSearch(response.data);
    console.log(response.data)
  } catch (error) {
    console.error(error);
  }
}
useEffect(()=>{
    getMovie()},
    []);

    
  return (
    <div className='body'>
        <h1>Movie-App</h1>
        <div id='search'>
        <p>
            <input id='textfield' type='text' placeholder='search' />
            <button>submit</button>

        </p>
        <div className='box'>
          {search.movies?.map((movie)=>(
           
            <div className='b-1'>
              <img  className='img' src={movie.poster_path} />
              <p>{movie.title}</p>
              {/* <p>{item.release_date}</p>
              <p>{item.vote_average}</p> */}
              </div>
             
          ))}

        </div>
        </div>
    </div>
  )
}


export default Moviess;