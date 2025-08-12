import "./AddCreator.css"
import { useState, useEffect } from 'react'
import supabase from "../client.js"
import Header from "../components/Header.jsx"

export default function AddCreator() {
  const [inputData, setInputData] = useState({name: "", description: "", imageURL: "", youtubeLink: "", twitterLink: "", instagramLink: ""})

  const handleChange = (e) => {
    setInputData(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value,
      }
    ))
  }

  const handleCreate = async () => {
    const {name, description, imageURL: image_url, youtubeLink: youtube_link, twitterLink: twitter_link, instagramLink: instagram_link} = inputData;
    await supabase.from('creators')
      .insert({
        name,
        description,
        image_url,
        youtube_link,
        twitter_link,
        instagram_link
      })
    setInputData({ name: "", description: "", imageURL: "", youtubeLink: "", twitterLink: "", instagramLink: "" })
    window.location = "/"
  }

  return (
    <section className="add-creator-section">
      <div className="background-div"></div>
      <Header />
      <h1>
        ADD A CREATOR
      </h1>
      <div className="input-div">
        <h2>
          Name:
        </h2>
        <input
          type='text'
          placeholder="Your Creator Name"
          className="input-element"
          name="name"
          value={inputData.name}
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
          value={inputData.description}
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
          value={inputData.imageURL}
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
          value={inputData.youtubeLink}
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
          value={inputData.twitterLink}
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
          value={inputData.instagramLink}
          onChange={handleChange}
        />
      </div>

      <div className="button-div">
        <button className="create-button" onClick={handleCreate}>
          Create
        </button>
      </div>
    </section>
  )
}