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
     }, [])
       const goBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }
    
return(
   <main>
    {movie && movie.image &&(
        <section>
            <img src={movie.image} className="banner" alt="" />
        </section>
    ) } 
    {movie && (
        <section className="container">
                 <a className="btn" href="#" onClick={goBack}>
             Torna indietro
          </a>
            <h1 className="text-center my-4">{movie.title} - {movie.director}</h1>
             <p className="text-center">{movie.abstract}</p>
        </section>
    )}

   
   </main>
)
}
export default SingleMovie;