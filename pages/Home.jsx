import { Link } from "react-router-dom";

const Home = () => {
    return(
        <main>
           <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/bg-movies.jpg" className="d-block w-100 bg-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<section>
    <div className="container p-5">
        <h2>Consulta la lista dei films</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi, quasi impedit eos itaque laboriosam harum dolor earum velit voluptates quibusdam ab aspernatur! Quidem eveniet accusantium illo eius voluptates saepe?
        Quia ipsum ullam beatae doloribus quibusdam consequuntur cupiditate necessitatibus doloremque reprehenderit soluta? Ipsa, deserunt id nulla dignissimos quaerat, harum, et voluptatem blanditiis commodi molestias perferendis quibusdam? Aspernatur dolorum earum perferendis?</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates, ducimus numquam ratione neque ipsa iste qui nisi. Perspiciatis perferendis mollitia eveniet nam atque corporis dicta aut maiores alias fugit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa officiis repellendus mollitia reprehenderit voluptatum quis harum voluptatem earum alias. Quidem nisi ullam natus a porro voluptate quasi, fugit ut magni.
        Repellendus accusamus, totam architecto eum laudantium iure sunt nobis! Dolorem doloremque modi quis debitis saepe voluptates ad? Tenetur commodi, numquam quo molestiae rem impedit voluptatem rerum harum labore dolore iste?
   <Link className="btn mt-5" to="/movies">
   Vedi tutti i nostri films
    </Link>
    </div>
    
</section>
        </main>
    )
}
export default Home;<img src="/bg-movies.jpg" alt="" classNameName="bg-home" />