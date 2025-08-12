import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <section className="header-section">
      <Link className="home-link" to="/">
        Home
      </Link>
    </section>
  )
}