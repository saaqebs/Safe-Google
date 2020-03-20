import React, { Component } from 'react';

// import styles from './styles/styles.module.css';
import './styles/style.css';
import google from './images/google.png';

class Search extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <link rel="stylesheet" href="./styles/style.css" />
          <link rel="shortcut icon" type="image/x-icon" href="./images/google.jng" />
          <meta charset="utf-8" />
          <meta name="author" content="Saaqeb Siddiqi" />

          <title> Safe Google </title>
          <script src="./script/script.js"> </script>
        </head>
        <body>
          <div class="horizontal">
            <img src={google} alt="Google" />
          </div>

          <form action="https://www.google.com/search?">
            <input name="hl" type="hidden" value="en" />
            <div class="horizontal">
              <input name="q" type="text" autocomplete="off" maxlength="2048"
                  autofocus id="searchbar" required minlength="2" />
            </div>

            <div class="horizontal">
              <button type="submit" class="searchbutton"> Safe Search </button>
            </div>
          </form>

        </body>
      </html>
    );
  }
}

export default Search;