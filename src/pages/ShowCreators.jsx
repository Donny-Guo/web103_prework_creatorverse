import "./ShowCreators.css"
import Card from "../components/Card"
import supabase from "../client"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function ShowCreators() {
  const [creatorsData, setCreatorsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
      setCreatorsData(data)
    }
    fetchData()
  }, [])

  console.log("creators data: ", creatorsData);
  const creatorElements = creatorsData.map((creator) => {
    const {
      id,
      name, 
      description, 
      image_url: imageURL, 
      youtube_link: youtubeLink,
      twitter_link: twitterLink,
      instagram_link: instagramLink,
    } = creator;

    const cardData = {
      id,
      name,
      description,
      imageURL,
      youtubeLink,
      twitterLink,
      instagramLink
    }
    return (
      <Link
        key={id}
        to={`/creator/${id}`}
        className="creator-card-link"
      >
        <Card
          {...cardData}
        />
      </Link>
      
    )
  })
  return (
    <section className="show-creators-section">
      {creatorElements}
    </section>
  )
}