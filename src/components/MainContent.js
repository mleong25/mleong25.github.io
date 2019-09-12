import React, { Component } from 'react'
import ContentCard from "./ContentCard.js"
import InfoBubble from "./InfoBubble.js"
import me from "../img/me.jpg"
import afternoon from "../img/afternoon.jpg"
import citylife from "../img/citylife3.jpg"
import './styles/MainContent.css'
import BackDrop from './BackDrop.js';

class MainContent extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
        <ContentCard 
          content={{
            title: "Hobbies & Interests",
            description: "",
            // color: "#9c8b7e",
            backgroundImage: "linear-gradient(to right, rgb(50, 65, 77), rgb(212, 163, 116)",
            text: "black"
          }}
        >
          <div className="infoBubble">
            <InfoBubble
              info={{
                // color: "#9c8b7e",
                hobby: "Photography",
                img: "https://img.icons8.com/ios/1600/camera.png",
                // description: "Started photography in high school, bought my first camera at the start of college and I bring it where I travel.\n\nWhat inspires me to continue is satisfaction of capturing your perspective and keeping it forever."
              }}
            />
            <InfoBubble 
              info={{
                // color: "#9c8b7e",
                hobby: "Culinary",
                img: "http://cdn.onlinewebfonts.com/svg/img_8729.png",
                // description: "I've cooked all my life and love to experiment in the kitchen. I'm alway look for new recipes and trying new foods.\n\nMy philosophy in the kitchen: if we have to eat anyway, why not make it enjoyable?"
              }}
            />
            <InfoBubble 
              info={{
                // color: "#9c8b7e",
                hobby: "Travel",
                img: "https://cdn0.iconfinder.com/data/icons/mailing-1/432/sent-512.png",
                // description: "To me, travel is the spice of life everyone needs in order to gain perspective and explore. I love to travel light and spontaneous.\n\nI've always had a sense of adventure and I'm always excited to try something new."
              }}
            />
            <InfoBubble 
              info={{
                // color: "#9c8b7e",
                hobby: "Gaming",
                img: "https://png.pngtree.com/svg/20170517/headphone_1199658.png",
                // description: "I game a lot more than I'm willing to admit and have always been a competitve player. I love to talk about gaming!\n\nI generally play competitve multiplayers, but I've fallen in love with some top-rated solo-campaign games."
              }}
            />
          </div>
        </ContentCard>
        <BackDrop value={{
          image: citylife
        }}/>
        <ContentCard 
          content={{
            title: "<Hacks />",
            description: "",
            // color: "#557a95",
            // color: "#b98a51",
            // color: "#71d9a5",
            backgroundImage: "linear-gradient(to right, rgb(212, 163, 116), rgb(50, 65, 77))",
            text: "black"
          }}
        >
          <div className="infoBubble">
            <InfoBubble 
              info={{
                // color: "#b98a51",
                // color: "#71d9a5",
                // backgroundImage: "linear-gradient(to right, #ff8a00, #da1b60)",
                hobby: "Languages",
                img: "https://image.flaticon.com/icons/svg/115/115764.svg",
                width: "90%"
              }}
            />
            <InfoBubble 
              info={{
                // color: "#b98a51",
                // color: "#71d9a5",
                // backgroundImage: "linear-gradient(to right, #ff8a00, #da1b60)",
                hobby: "Projects",
                img: "https://image.flaticon.com/icons/svg/1188/1188532.svg",
                width: "90%"
              }}
            />
            <InfoBubble 
              info={{
                // color: "#b98a51",
                // color: "#71d9a5",
                // backgroundImage: "linear-gradient(to right, #ff8a00, #da1b60)",
                hobby: "Courses",
                img: "https://image.flaticon.com/icons/svg/149/149337.svg",
                width: "90%"
              }}
            />
          </div>
        </ContentCard>
        <BackDrop value={{image: afternoon}}/>
        <ContentCard 
          content={{
            description: "",
            color: "#ccc",
            // color: "#b98a51",
            text: "black"
          }}
        >
        <div className="aboutMe">
          <div className="aboutMePic">
            <img src={me} className="beau"/>
          </div>
          <div className="aboutMeDescription">
            <p>Hi there, I'm the guy this site is all about! As you probably notice, I have a lot of hobbies and interests. Here I showcase some of my passions in life and have put a lot of detail to the content that I upload so take your time looking through!<br/><br/>This website is created using ReactJS - while this is not my first website, it is the first project I committed to fully and saw through. This project gave me an outlet for both my passion in programming and my hobbies. I hope you enjoy your stay; I appreciate your time and feedback!<br/><br/></p>
          </div>
        </div>
        </ContentCard>
      </div>
    )
  }
}

export default MainContent