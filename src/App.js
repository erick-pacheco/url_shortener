import React, { useState } from "react";
import "./App.css";
const { shorten } = require("./bitly");

function App() {
  const [longUrl, setLongUrl] = useState(""),
    [shortUrl, setShortUrl] = useState(null),
    [error, errorCallback] = useState(""),
    copyToClipBoard = () => async () => {
      await navigator.clipboard.writeText(shortUrl);
      alert("Text copied");
    };

  return (
    <>
      <div className="container mt-5 " style={{ minHeight: "100vh" }}>
        <h1 className="text-primary my-5">
          <strong>URL.SHORTNER</strong>
        </h1>
        <div className="container input-group shadow-black">
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
              errorCallback("");
            }}
          />
          <button
            className="btn btn-lg btn-primary"
            type="button"
            id="url-shortener"
            onClick={async (e) => {
              e.preventDefault();
              shorten(longUrl, setShortUrl, errorCallback);
              setLongUrl("");
              return copyToClipBoard(shortUrl);
            }}
          >
            Shorten ✂️
          </button>
        </div>
        {
          // display shortend url only if it exists
          shortUrl && (
            <div className="my-5 p-5 shadow-blue code">
              Copy Short URL! 📋:{" "}
              <a className="link" href={shortUrl}>
                {shortUrl}
              </a>
            </div>
          )
        }

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

        <footer class="footer mt-5 py-3 bg-light">
          <div class="container">
            <span class="text-muted">
              Typed with ❤️ and{" "}
              <spa style={{ color: "#F0DB4F" }} class="font-weight-bold">
                JS
              </spa>{" "}
              somewhere in Boston 👽 by{" "}
              <a href="https://github.com/erick-pacheco">Erick Pacheco</a>.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
