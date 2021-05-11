import React, { useState } from "react";
import "./App.css";

const { shorten } = require("./bitly");

function App() {
  const [longUrl, setLongUrl] = useState(""),
    [shortUrl, setShortUrl] = useState(null),
    [error, errorCallback] = useState("");

  return (
    <div className="container my-5">
      <div className="container input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Long URL"
          aria-label="Long URL"
          aria-describedby="url-shortener"
          value={longUrl}
          onChange={(e) => {
            e.preventDefault();
            setLongUrl(e.target.value);
          }}
        />
        <button
          className="btn btn-lg btn-primary"
          type="button"
          id="url-shortener"
          onClick={(e) => {
            e.preventDefault();
            shorten(longUrl, setShortUrl, errorCallback);
            setLongUrl("");
          }}
        >
          Shorten ✂️
        </button>

        {
          // display shortend url only if it exists
          shortUrl && (
            <div className="container card m-4 p-3 bg-info">
              Copy 📋: {shortUrl}
            </div>
          )
        }
      </div>
      {
        // error handling
        error && (
          <div className="card bg border border-danger bg-light text-danger p-3 m-3">
            {error}{" "}
            <button
              className="btn btn-sm my-4 btn-danger"
              onClick={(e) => {
                e.preventDefault();
                errorCallback("");
              }}
            >
              CLOSE
            </button>
          </div>
        )
      }
    </div>
  );
}

export default App;
