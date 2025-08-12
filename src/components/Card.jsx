import "./Card.css"
import { Link } from "react-router-dom"
import editIcon from "/edit.png"
import youtubeIcon from "/youtube.png"
import instagramIcon from "/instagram.png"

export default function Card({imageURL}) {
  const containerStyle = {
    backgroundImage: imageURL ? `url(${imageURL})` : "none",
  }
  return (
    <div style={containerStyle} className="profile-card">
      <div className="overlay"></div>
      <div className="card-content">
        <div className="card-title">
          <h2 className="creator-name">
            Lex Fridman
          </h2>
          <Link className="edit-link">
            <button className="edit-button">
              <img src={editIcon} className="edit-icon"/>
            </button>
          </Link>
        </div>
        
        <div className="social-media-links">
          <a href="https://youtube.com">
            <img src={youtubeIcon} className="media-icon"/>
          </a>

          <a href="https://instagram.com">
            <img src={instagramIcon} className="media-icon"/>
          </a>
        </div>

        <p className="creator-description">
          AI researcher working on autonomous vehicles, human-robot interaction, and machine learning at MIT and beyond.
        </p>
      </div>
    </div>
  )
}