import React, { Component } from 'react'
import './styles/ContentCard.css'

function ContentCard(props) {  
  const styles = {
    backgroundColor: props.content.color,
    borderColor: props.content.color,
    color: props.content.text,
    backgroundImage: props.content.backgroundImage
  }
  
  return (
    <div className="contentCard" style={styles}>
      <h2>{props.content.title}</h2>
      <p>{props.content.description}</p>
      {props.children}
    </div>
  )
}

export default ContentCard