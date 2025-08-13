import './App.css'
import ShowCreators from "./pages/ShowCreators"
import { Link } from 'react-router-dom'
import { useRef } from 'react'

function App() {
  const elementRef = useRef(null);

  const handleViewAll = () => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Creatorverse</h1>
        <div>

          <button className='home-page-button' onClick={handleViewAll}>
            VIEW ALL CREATORS
          </button>


          <Link to="/new">
            <button className='home-page-button'>
              ADD A CREATOR
            </button>
          </Link>
        </div>
      </header>

      <ShowCreators ref={elementRef} />
    </div>
  )
}

export default App
