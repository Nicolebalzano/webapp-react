import { useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "../reviews/ReviewForm";

const SingleMovie = () => {
    const navigate = useNavigate();
     const {slug} = useParams();
const [movie, setMovie] = useState(null)
  
    
  useEffect(() => {
    getMovieDetails();
  }, [slug]);

  const getMovieDetails = () => {
    axios
      .get(`http://localhost:3000/movies/${slug}`)
      .then((resp) => {
        setMovie(resp.data.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/not-found");
        }
      });
  };
       const goBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }
return(
   <main>
    {movie &&(
        <>
        <section>
            <img src={movie.image} className="banner" alt="" />
             <a className="btn m-4" href="#" onClick={goBack}>
             Torna indietro
          </a>
        </section>
        <section className="container single-movie-details">
            <h1 className="text-center my-4">{movie.title} - {movie.director}</h1>
             <p className="text-center">{movie.abstract}</p>
        </section>
        <section className="container">
            <h2>Recensioni</h2>
            {movie.reviews.length === 0 ? (
                <div className="alert alert-warning"> 
                Nessuna recensione per il momento
                </div>
            ) : (<div className="row row-cols-1 g-3 m-5">
                {movie.reviews.map((curReview) => {
                    return(
                    <div className="col" key={curReview.id}>
                        <ReviewCard review={curReview}/>
                    </div>)
                })}
            </div>)}
        </section>
        <section className="container py-5">
            <h2 className="text-center">Lascia una recensione</h2>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-xl-6">
                    <div className="card">
                        <ReviewForm
                    movie_id={movie.id}
                    reloadReviews={getMovieDetails}
                  />
                    </div>
                </div>
            </div>
        </section>
        </>
    )}
   
   </main>
)
}
export default SingleMovie;