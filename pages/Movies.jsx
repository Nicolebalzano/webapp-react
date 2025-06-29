import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
const Movies = () => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/movies").then((resp) => {
          setMovies(resp.data.data)
        })
    }, [])
    return(
        <>
       <section className="container p-5">
        <h1 className="text-center">Movies page</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {movies.map((curMovie) => (
                <div key={curMovie.id} className="col">
                   <MovieCard movie={curMovie}/>
                </div>
))}
        </div>
        </section>
        </>
    )
}
export default Movies;