import { Link } from 'react-router-dom';


const NavBar = () => {


  return (
    <div id="navbar">
      <ul id="navbar-list">
        <Link to='/'>Home</Link>
        <Link to='/players'>All Players</Link>
        <Link to='/NewPlayerForm'>New Player</Link>
      </ul>
    </div>
  )
}


export default NavBar;