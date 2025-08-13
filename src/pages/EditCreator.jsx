import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import supabase from "../client";
import Header from "../components/Header";
import "./EditCreator.css"

export default function EditCreator() {
  const { id } = useParams();
  const [creatorData, setCreatorData] = useState(null);
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

  const handleChange = (e) => {
    setCreatorData(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value,
      }
    ))
  }

  const handleUpdate = async () => {
    const { name, description, imageURL: image_url, youtubeLink: youtube_link, twitterLink: twitter_link, instagramLink: instagram_link } = creatorData;
    const { error } = await supabase
      .from('creators')
      .update({name, description, image_url, youtube_link, twitter_link, instagram_link})
      .eq('id', id)
    alert(`Your creator ${name} has been updated successfully!`)
    window.location = "/"
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
    <section className="update-creator-section">
      <div className="background-div"></div>
      <Header />
      <h1>
        UPDATE A CREATOR
      </h1>

      {creatorData &&
        <>
          <div className="input-div">
            <h2>
              Name:
            </h2>
            <input
              type='text'
              className="input-element"
              name="name"
              value={creatorData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-div">
            <h2>
              Description:
            </h2>
            <textarea
              type='text'
              placeholder="Your Creator Description"
              className="textarea-element"
              rows="5"
              name="description"
              value={creatorData.description}
              onChange={handleChange}
            />
          </div>

          <div className="input-div">
            <h2>
              Image URL:
            </h2>
            <input
              type='text'
              placeholder="Your Creator Image URL"
              className="input-element"
              name="imageURL"
              value={creatorData.imageURL}
              onChange={handleChange}
            />
          </div>

          <div className="input-div">
            <h2>
              Youtube Link:
            </h2>
            <input
              type='text'
              placeholder="Youtube Link (Optional)"
              className="input-element"
              name="youtubeLink"
              value={creatorData.youtubeLink}
              onChange={handleChange}
            />
          </div>

          <div className="input-div">
            <h2>
              Twitter Link:
            </h2>
            <input
              type='text'
              placeholder="Twitter Link (Optional)"
              className="input-element"
              name="twitterLink"
              value={creatorData.twitterLink}
              onChange={handleChange}
            />
          </div>

          <div className="input-div">
            <h2>
              Instagram Link:
            </h2>
            <input
              type='text'
              placeholder="Instagram Link (Optional)"
              className="input-element"
              name="instagramLink"
              value={creatorData.instagramLink}
              onChange={handleChange}
            />
          </div>

          <div className="button-div">
            <button className="update-button" onClick={handleUpdate}>
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