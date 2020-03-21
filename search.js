import React, { Component } from 'react';

import style from './styles/style.module.css';
import google from './images/google.png';


function Head(props) {
  return (
    <head>
      <link rel="stylesheet" href="./styles/style.css" />
      <link rel="shortcut icon" type="image/x-icon" href="./images/google.jng" />
      <meta charset="utf-8" />
      <meta name="author" content="Saaqeb Siddiqi" />

      <title> Safe Google </title>
      <script src="./script/script.js"> </script>
    </head>
  );
}

function SearchForm(props) {
  return (
    <form action="https://www.google.com/search?">
      <input name="hl" type="hidden" value="en" />
      <div className={style.horizontal}>
        <input name="q" type="text" autocomplete="off" maxlength="2048"
            autofocus="autofocus" onfocus="this.select()"
            id={style.searchbar} required minlength="2" />
      </div>

      <div className={style.horizontal}>
        <button type="submit" className={style.searchbutton}>
          Safe Search
        </button>
      </div>
    </form>
  );
}

function Body(props) {
  return (
    <body>
      <div className={style.horizontal}>
        <div className={style.container}>
          <p> Safer </p>
          <img src={google} alt="Google" />
        </div>
      </div>
      <SearchForm />
    </body>
  )
}


class Search extends Component {
  render() {
    return (
      <html lang="en">
        <Head />
        <Body />
      </html>
    );
  }
}

export default Search;
