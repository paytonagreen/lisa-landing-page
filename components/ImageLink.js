import React from 'react'
import ImageLinkStyles from './styles/ImageLinkStyles'

function ImageLink({children, image, color, link}) {
  return (
    <ImageLinkStyles color={color} image={image}>
      <div className="content">
      <a href={link}>
      {children}
      </a>
      </div>
    </ImageLinkStyles>
  )
}

export default ImageLink;