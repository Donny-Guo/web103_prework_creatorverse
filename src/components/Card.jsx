import "./Card.css"
import { Link } from "react-router-dom"
import editIcon from "/edit.png"
import youtubeIcon from "/youtube.png"
import instagramIcon from "/instagram.png"
import twitterIcon from "/twitter.png"

export default function Card({ id, name, description, imageURL, youtubeLink, twitterLink, instagramLink }) {
  const containerStyle = {
    backgroundImage: imageURL ? `url(${imageURL})` : "none",
  }
  return (
    <div style={containerStyle} className="profile-card">

      <div className="overlay"></div>


      <div className="card-content">
        <div className="card-title">
          <Link to={`/creator/${id}`} className="creator-card-link">
            <h2 className="creator-name">
              {name}
            </h2>
          </Link>
          <Link className="edit-link" to={`/edit/${id}`}>
            <button className="edit-button">
              <img src={editIcon} className="edit-icon" />
            </button>
          </Link>
        </div>

        <div className="social-media-links">
          {youtubeLink &&
            <a href={youtubeLink} target="_blank">
              <img src={youtubeIcon} className="media-icon" />
            </a>
          }

          {twitterLink &&
            <a href={twitterLink} target="_blank">
              <img src={twitterIcon} className="media-icon" />
            </a>
          }

          {instagramLink &&
            <a href={instagramLink} target="_blank">
              <img src={instagramIcon} className="media-icon" />
            </a>
          }

        </div>

        <Link to={`/creator/${id}`} className="creator-card-link">
          {description}
        </Link>

      </div>
    </div>
  )
}