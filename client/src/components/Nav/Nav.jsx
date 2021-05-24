import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
      <div className="app-title">
        <NavLink to="/">Blog App</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/">Posts</NavLink>
        <NavLink to="/create-post">Create Post</NavLink>
      </div>
    </nav>
  )
}

export default Nav;