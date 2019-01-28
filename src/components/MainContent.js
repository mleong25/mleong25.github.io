import React, { Component } from 'react'
import ContentCard from "./ContentCard.js"
import InfoBubble from "./InfoBubble.js"
import './styles/MainContent.css'

class MainContent extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
        <ContentCard 
          content={{
            title: "Hobbies & Interests",
            description: "",
            color: "#ffd454",
            text: "black"
          }}
        >
          <div className="infoBubble">
            <InfoBubble
              info={{
                color: "#ffd454",
                hobby: "Photography",
                img: "https://img.icons8.com/ios/1600/camera.png"
              }}
            />
            <InfoBubble 
              info={{
                color: "#ffd454",
                hobby: "Culinary",
                img: "http://cdn.onlinewebfonts.com/svg/img_8729.png"
              }}
            />
            <InfoBubble 
              info={{
                color: "#ffd454",
                hobby: "Travel",
                img: "https://cdn0.iconfinder.com/data/icons/mailing-1/432/sent-512.png"
              }}
            />
            <InfoBubble 
              info={{
                color: "#ffd454",
                hobby: "Gaming",
                img: "https://png.pngtree.com/svg/20170517/headphone_1199658.png"
              }}
            />
          </div>
        </ContentCard>
        <ContentCard 
          content={{
            title: "<Hacks />",
            description: "",
            color: "#77c2ff",
            text: "black"
          }}
        >
          <div className="infoBubble">
            <InfoBubble 
              info={{
                color: "#77c2ff",
                hobby: "Languages",
                img: "https://image.flaticon.com/icons/svg/115/115764.svg"
              }}
            />
            <InfoBubble 
              info={{
                color: "#77c2ff",
                hobby: "Projects",
                img: "https://image.flaticon.com/icons/svg/1188/1188532.svg"
              }}
            />
            <InfoBubble 
              info={{
                color: "#77c2ff",
                hobby: "Courses",
                img: "https://image.flaticon.com/icons/svg/149/149337.svg"
              }}
            />
          </div>
        </ContentCard>
        <ContentCard 
          content={{
            title: "About Me",
            description: "",
            color: "TOMATO",
            text: "black"
          }}
        >
        </ContentCard>
      </div>
    )
  }
}

export default MainContent