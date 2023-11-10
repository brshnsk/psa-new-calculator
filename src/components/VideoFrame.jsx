import React from 'react'

export const VideoFrame = ({videoUrl}) => {

  if(videoUrl == "./videos/video.mp4") {
    return(
      <video autoPlay muted controls className=' border border-secondary w-50 mx-auto'>
        <source src={videoUrl} type="video/mp4"/>
      </video>
    )
  }
  
  return (
    
    <video width="360" height="240" autoPlay muted controls>
      <source src={videoUrl} type="video/mp4"/>
    </video>
  )
}
