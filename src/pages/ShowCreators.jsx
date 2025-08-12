import "./ShowCreators.css"
import Card from "../components/Card"
import supabase from "../client"
import { useState, useEffect } from 'react'

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
    const {name, 
      description, 
      image_url: imageURL, 
      youtube_link: youtubeLink,
      twitter_link: twitterLink,
      instagram_link: instagramLink,
    } = creator;

    const cardData = {
      name,
      description,
      imageURL,
      youtubeLink,
      twitterLink,
      instagramLink
    }
    return (
      <Card
        key={creator.name}
        {...cardData}
      />
    )
  })
  return (
    <section className="show-creators-section">
      {creatorElements}
    </section>
  )
}