import { Link } from 'react-router-dom'
import './style.css'

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/" state={'This is the state from home'}>Home</Link></li>
        <li><Link to="/about" state={'This is the state from about'}>About</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/posts/10">Post 10</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
        <li><Link to="/404">404</Link></li>
      </ul>
    </nav>
  )
}