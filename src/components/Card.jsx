import "./Card.css"
import { Link } from "react-router-dom"
import editIcon from "/edit.png"
import youtubeIcon from "/youtube.png"
import instagramIcon from "/instagram.png"
import twitterIcon from "/twitter.png"

export default function Card({name, description, imageURL, youtubeLink, twitterLink, instagramLink}) {
  const containerStyle = {
    backgroundImage: imageURL ? `url(${imageURL})` : "none",
  }
  return (
    <div style={containerStyle} className="profile-card">
      <div className="overlay"></div>
      <div className="card-content">
        <div className="card-title">
          <h2 className="creator-name">
            {name}
          </h2>
          <Link className="edit-link">
            <button className="edit-button">
              <img src={editIcon} className="edit-icon"/>
            </button>
          </Link>
        </div>
        
        <div className="social-media-links">
          <a href={youtubeLink} target="_blank">
            <img src={youtubeIcon} className="media-icon"/>
          </a>

          <a href={twitterLink} target="_blank">
            <img src={twitterIcon} className="media-icon" />
          </a>

          <a href={instagramLink} target="_blank">
            <img src={instagramIcon} className="media-icon"/>
          </a>
        </div>

        <p className="creator-description">
          {description}
        </p>
      </div>
    </div>
  )
}