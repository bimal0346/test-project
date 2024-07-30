import React from 'react'

export const IndividualImage = ({images}) => {
  return (
    <div className='photo'>
      <img src={images.urls.small} alt="unsplash image" />
    </div>
  )
  }