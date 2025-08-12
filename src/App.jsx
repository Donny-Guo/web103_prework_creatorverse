import './App.css'
import ShowCreators from "./pages/ShowCreators"
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <header>
        <h1>Creatorverse</h1>
        <div>
          <button className='home-page-button'>
            VIEW ALL CREATORS
          </button>
          <Link>
            <button className='home-page-button'>
              ADD A CREATOR
            </button>
          </Link>
        </div>
      </header>

      <ShowCreators />
    </div>
  )
}

export default App
