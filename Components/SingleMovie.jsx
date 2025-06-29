import { useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SingleMovie = () => {
    const navigate = useNavigate();
     const {id} = useParams();
const [movie, setMovie] = useState(null)
  
     useEffect(()=> {
        axios.get(`http://localhost:3000/movies/${id}`).then((resp) => {
            setMovie(resp.data.data)
        })
     }, [id])
       const goBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }
return(
   <main>
    {movie &&(
        <section>
            <img src={movie.image} className="banner" alt="" />
             <a className="btn m-4" href="#" onClick={goBack}>
             Torna indietro
          </a>
        </section>
    ) } 
    {movie && (
        <section className="container single-movie-details">
            <h1 className="text-center my-4">{movie.title} - {movie.director}</h1>
             <p className="text-center">{movie.abstract}</p>
        </section>
    )}

   
   </main>
)
}
export default SingleMovie;