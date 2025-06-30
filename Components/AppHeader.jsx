import { NavLink, Link } from "react-router-dom";

const AppHeader =() => {
    const HeaderLinks = [
        {
            title: "Home",
            url: "/"
        },
        {
            title:"Movies",
            url:"/movies"
        }
    ]
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark header px-5"  data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand fs-4" href="#">My movies</Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        {HeaderLinks.map((curLink, index) => (
            <li className="nav-item" key={index}>
                <NavLink className="nav-link" aria-current="page" to={curLink.url}>
            {curLink.title}
                </NavLink>
            </li>
       ) )}
      </ul>
    </div>
  </div>
</nav>
        </header>
    )
}
export default AppHeader;