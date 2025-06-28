import { Link } from "react-router-dom";
const MovieCard = ({movie}) => {
    const {movie_id, title, director, genre, release_year, abstract, image} = movie
return (
    <div className="card h-100">
  <img src={image || "https://placehold.co/334x334?text=No+image"} className="card-img-top" alt={`Immagine di ${title}`}/>
  <div className="card-body">
    <h4 className="card-title">{title} - {director}</h4>
    <h5>{genre}</h5>
    <h6>{release_year}</h6>
    <p className="card-text">{abstract}</p>
    <Link to={`/movies/${movie_id}`}  className="btn">Dettagli film</Link>
  </div>
</div>
)
}
export default MovieCard;