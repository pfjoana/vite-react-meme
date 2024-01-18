import { useState } from 'react'
import memesData from "../memesData.jsx"

export default function Meme() {
  // useState
  const [memeImage, setMemeImage] = useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }

  return (
    <div className="meme">
      <div className="form">
        <div>
          <label className="form-label">Top text:</label>
          <input type="text" className="form-input" placeholder="" />
        </div>

        <div>
          <label className="form-label">Bottom text:</label>
          <input type="text" className="form-input" placeholder=""/>
        </div>

        <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </div>

      <div className="meme-img">
        <img src={memeImage}/>
      </div>
    </div>

  )
}
