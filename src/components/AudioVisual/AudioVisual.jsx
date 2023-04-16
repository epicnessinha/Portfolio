import React from 'react'
import { useState } from 'react'
import "./AudioVisual.css"


const AudioVisual = () => {

  const [muted, setMuted] = useState(true);

  return (
    <section id="audiovisual" className='audiovisual-section'>
<div className='videocontainer'>
  <h2 className='audiovisual'>Audiovisual Works</h2>
  <p className='audiovisualtext'>Some of my Audiovisual works done in my free time</p>
  <video controls autoplay muted={muted} preload="metadata">
        <source src="src/assets/video/Vanessa Ferreira_ISA FJN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={() => setMuted(false)}>Enable sound</button>
</div>
    </section>
    
  )
}

export default AudioVisual