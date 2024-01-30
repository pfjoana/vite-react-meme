import { useState, useEffect } from 'react'

export default function Meme() {
  // useState
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

  //store data from API
  const [allMemes, setAllMemes] = useState([])

  // call API safelly without loops
  useEffect(()=> {
      console.log("Effects runned")
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(reponseData => setAllMemes(reponseData.data.memes)) // we just want the memes part
  }, []
  )

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  // handle input forms
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <div className="meme-section">
      <div className="form">
        <div>
          <label className="form-label">Top text:</label>
          <input
            type="text"
            className="form-input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="form-label">Bottom text:</label>
          <input
            type="text"
            className="form-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button
        className="form-button"
        onClick={getMemeImage}>
        Get a new meme image 🖼️
        </button>
      </div>

      <div className="meme-img">
        <img src={meme.randomImage}/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}
