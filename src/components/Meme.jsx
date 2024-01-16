
export default function Meme() {
  return (
    <div className="meme">
      <form className="form">
        <div>
          <label className="form-label">Top text:</label>
          <input type="text" className="form-input" placeholder="" />
        </div>

        <div>
          <label className="form-label">Bottom text:</label>
          <input type="text" className="form-input" placeholder=""/>
        </div>

        <button className="form-button">Get a new meme image 🖼️</button>
      </form>
    </div>

  )
}
