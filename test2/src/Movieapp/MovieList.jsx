// import React, { useCallback, useEffect, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Set_Movies, Set_Search_Item } from "./Action";
// import axios from "axios";
// import "./MovieList.css"
// const MovieList = () => {
//   const { list, searchitem } = useSelector((state) => state.movies);
//   const dispatch = useDispatch();


//   useEffect(() => {

//     // console.log("fetch working")
//     async function fetchmovies() {
//       const options = {
//         method: "GET",
//         url: "https://movies-api14.p.rapidapi.com/shows",
//         headers: {
//           "x-rapidapi-key":
//             "caaea96702msh0cbc3ed36797b3ap15ec96jsn30817794d7f0",
//           "x-rapidapi-host": "movies-api14.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         // console.log(response.data);
//         dispatch(Set_Movies( response.data));
        
//         // console.log(Set_Movies( response.data));

//       } catch (error) {
//         console.error(error);
//       }
//     }

//     // alert("clicked");   
//     fetchmovies();
//   }, []);

//   return(

//     <h3>{list.title}</h3>
//   )

// //   const handleSearch = useCallback((event) => {
// //         console.log("clicked");
// //       dispatch(Set_Search_Item(event.target.value));
// //     },
// //     [dispatch]
// //   );

// //   const filteredMovies = useMemo(() => {

// //     // const moviesList = movie || []; 
// //     return list?.filter((movie) =>
// //         movie.title.toLowerCase()?.includes(searchitem.toLowerCase())
// //       );
// //     }, [list, searchitem]);


// //   console.log('Filtered Movies:', filteredMovies); // Debugging line
// // //   if (!movie?.length) {
// // //     return <p>Loading...</p>; // Handle initial loading state
// // //   }

// //   return (
// //     <>
// //     <link rel="stylesheet" href="./MovieList.css" />
// //     <div>
// //       <input
// //         className="search-bar"
// //         type="text"
// //         placeholder="Search movies.."
// //         onChange={handleSearch}
// //       />
// //       <div className="movie-list">
// //         {filteredMovies?.length === 0 ? (
// //           <p>No movies found.</p>
// //         ) : (
// //           filteredMovies?.map((movie) => (
// //             <MovieItem key={movie.id} movie={movie} />
// //           ))
// //         )}
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // const MovieItem =(({ movie }) => {
// //   return (
// //     <div className="movie-item">
// //         <h1>{movie} </h1>
// //       {/* <h3>{movie.data.movies.title}</h3>
// //       <p>{movie.year}</p> */}
// //     </div>
    
// //   );
// };
// //)

// export default MovieList;
