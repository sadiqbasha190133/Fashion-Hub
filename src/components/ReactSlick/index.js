import React from 'react'
import './index.css'
import ReactPlayer from 'react-player/youtube'

const ReactSlick = () => {
  return (
    <div className='react-slick-bg'>
      <ReactPlayer url="https://www.youtube.com/embed/cN9306z4_hU?autoplay=1&mute=1&controls=0" 
      width='99vw' 
      height='90vh'
      playing = 'true'
      muted = 'false'
      loop = 'true'
      />
    </div>
  )
}

export default ReactSlick