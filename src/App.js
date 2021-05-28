import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const recommendations = {
    "Hip-hop/Rap 🎙": [
      { name: "Killer", artist: "Eminem" },
      { name: "Praise the Lord", artist: "A$AP Rocky" },
      { name: "Tequila Shots", artist: "Kid Cudi" },
      { name: "Neighbours", artist: "J. Cole" }
    ],
    "Rock 🎸": [
      { name: "Time", artist: "Pink Floyd" },
      { name: "Magic", artist: "Coldplay" },
      { name: "Bohemian Rhapsody", artist: "Queen" },
      { name: "Here Comes the Sun", artist: "The Beatles" }
    ],
    "R&B/Soul 🎺": [
      { name: "Save Your Tears", artist: "The Weeknd" },
      { name: "Tadow", artist: "FKJ & Masego" },
      { name: "Redbone", artist: "Childish Gambino" },
      { name: "Slow Dancing in the Dark", artist: "Joji" }
    ],
    "Pop 🎹": [
      { name: "Thinkin Bout You", artist: "Frank Ocean" },
      { name: "Talk is Overrated", artist: "Jeremy Zucker" },
      { name: "idfc", artist: "blackbear" },
      { name: "Youth", artist: "Troye Sivan" }
    ],
    "Indian 🎶": [
      { name: "Choo Lo", artist: "The Local Train" },
      { name: "Nikamma", artist: "Lifafa" },
      { name: "Tune Kaha", artist: "Prateek Kuhad" },
      { name: "Dil Beparvah", artist: "Ankur Tewari" }
    ]
  };

  const [recommendation, setRecommendation] = useState([]);
  const [genre, setGenre] = useState("");

  const clickhandler = function (item) {
    setRecommendation(recommendations[item]);
    setGenre(item);
  };

  return (
    <div className="App">
      <h1>🎼music library</h1>
      <p>
        {" "}
        A mini music recommendation app made using <i>React JS.</i>{" "}
      </p>
      <h2> Genres </h2>
      <hr />
      <div>
        {Object.keys(recommendations).map((item) => {
          return <button onClick={() => clickhandler(item)}>{item}</button>;
        })}
      </div>

      <div>
        {recommendation.length > 0 && (
          <p>
            Here are some recommendations for <i>{genre}</i> Music:{" "}
          </p>
        )}
        <ul>
          {recommendation.map((item) => {
            return (
              <React.Fragment>
                <li>
                  <div className="songname"> {item.name} </div>
                  <div className="songartist"> {item.artist} </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
