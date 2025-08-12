import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import ViewCreators from "./pages/ViewCreator"
import EditCreator from "./pages/EditCreator"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<AddCreator />} />
        <Route path="/creator/:id" element={<ViewCreators />} />
        <Route path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
