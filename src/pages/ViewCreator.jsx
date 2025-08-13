import supabase from "../client"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../components/Header"
import "./ViewCreator.css"
import youtubeIcon from "/youtube.png"
import instagramIcon from "/instagram.png"
import twitterIcon from "/twitter.png"

export default function ViewCreator() {
  const { id } = useParams()

  const [creatorData, setCreatorData] = useState(null);
  console.log("creator Data:", creatorData)
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq("id", id)
      const {
        name,
        description,
        image_url: imageURL,
        youtube_link: youtubeLink,
        twitter_link: twitterLink,
        instagram_link: instagramLink,
      } = data[0];

      setCreatorData({
        name,
        description,
        imageURL,
        youtubeLink,
        twitterLink,
        instagramLink
      })
    }
    fetchData()
  }, [])

  const handleEdit = () => {
    window.location = `/edit/${id}`
  }

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete creator ${creatorData.name}?`)) {
      const response = await supabase
        .from('creators')
        .delete()
        .eq('id', id)
      window.location = "/"
    }
  }

  return (
    <section className="view-creator-section">
      <div className="background-div"></div>
      <Header />
      {creatorData &&
        <>
          <div className="creator-data-div">
            <div>
              <img
                src={creatorData.imageURL}
                alt="creator-image"
                className="creator-image"
              />
            </div>

            <div>
              <h2>
                {creatorData.name}
              </h2>
              <p>
                {creatorData.description}
              </p>
              {creatorData.youtubeLink &&
                <div className="media-details">
                  <img
                    src={youtubeIcon}
                    className="media-logo"
                  />
                  <a
                    href={creatorData.youtubeLink}
                    target="_blank"
                    className="creator-media-link"
                  >
                    {creatorData.youtubeLink.split('.com/')[1]}
                  </a>
                </div>
              }
              {creatorData.twitterLink &&
                <div className="media-details">
                  <img
                    src={twitterIcon}
                    className="media-logo"
                  />
                  <a
                    href={creatorData.twitterLink}
                    target="_blank"
                    className="creator-media-link"
                  >
                    {creatorData.twitterLink.split('.com/')[1]}
                  </a>
                </div>
              }
              {creatorData.instagramLink &&
                <div className="media-details">
                  <img
                    src={instagramIcon}
                    className="media-logo"
                  />
                  <a
                    href={creatorData.instagramLink}
                    target="_blank"
                    className="creator-media-link"
                  >
                    {creatorData.instagramLink.split('.com/')[1]}
                  </a>
                </div>
              }
            </div>
          </div>

          <div className="button-div">
            <button className="edit-creator-button" onClick={handleEdit}>
              Update
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      }

    </section>
  )
}