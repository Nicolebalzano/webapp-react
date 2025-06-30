import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
const Movies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("");
    useEffect(()=>{
        axios.get("http://localhost:3000/movies").then((resp) => {
          setMovies(resp.data.data)
        })
    }, [])
     const handleSubmit = (event) => {
        event.preventDefault();
        axios.get("http://localhost:3000/movies", {
            params :{
                search,
            },
        }).then((resp) => {
            setMovies(resp.data.data)
        })
    }
    return(
        <>
       <section className="container p-5">
        <h1 className="text-center">Movies page</h1>
        <form className="mb-4 d-flex justify-content-center" onSubmit={handleSubmit}>
            <input 
            className="form-control w-25"
            type="search"
            aria-label="cerca il film"
            placeholder="Inizia la ricerca"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
            <button className="btn btn-success" type="submit">Cerca</button>
        </form>
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