import React, { useState } from "react";
import "./styles.css";

var Movies = {
  Romantic: [
    { movie: "Aashiqi 2", rating: " rating 7/10" },
    { movie: "Collage Romance", rating: "rating:8.4/10" },
    { movie: "Freddy", rating: "rating: 7.7/10" },
    { movie: "sanam re", rating: "rating: 9/10 " }
  ],
  Comedy: [
    { movie: "1982 - A Love Marriage ", rating: "rating: 5.2/10" },
    { movie: "Tees Maar Khan", rating: "rating: 5.3/10" },
    { movie: "..Aur Pyaar Ho Gaya ", rating: "rating: 4.6/10" },
    { movie: "Coolie no.1", rating: "rating: 7.4/10" }
  ],
  Hororr: [
    { movie: "Phone Bhoot", rating: "rating: 5.9/10" },
    { movie: " Bhool Bhulaiyaa 2 ", rating: "rating: 5.7/10" },
    { movie: "Stree", rating: "rating: 7.5/10" },
    { movie: " Blurr ", rating: "rating: 6.4/10 " }
  ],
  Thriller: [
    { movie: " Drishyam 2", rating: " rating: 8.5/10" },
    { movie: "A wednesday", rating: " rating : 7/10" },
    { movie: "Govinda Naam Mera", rating: " rating: 6.5/10" },
    { movie: "Bhediya", rating: "rating:7.5/10" },
    { movie: ". Extraction", rating: " rating : 6.7/10" }
  ]
};

var movieknow = Object.keys(Movies);

export default function App() {
  const [movie, setmovie] = useState("Romantic");
  function genreClickHandler(genre) {
    setmovie(genre);
  }
  return (
    <div className="App">
      <h1>Bollywood Movies App </h1>
      <p style={{ fontSize: "14px" }}>
        {" "}
        Checkout my favorite Movies. Select a Actor to get started...{" "}
      </p>

      <div>
        {movieknow.map((genre) => (
          <button
            className="btn"
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#1ff2eb",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontFamily: "cursive",
              fontSize: "20px",
              color: "blue",
              border: "none"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingBlock: "0" }}>
          {Movies[movie].map((bollywood) => (
            <li
              key={bollywood}
              style={{
                padding: "1rem",
                // border: "1px solid #D1D5DB",
                color: "green",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                listStyle: "none"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {bollywood.movie} </div>
              <div style={{ fontSize: "smallj" }}> {bollywood.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
