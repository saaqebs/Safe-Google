import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import style from './styles/style.module.css';
import google from './images/google.png';
import propic from './images/propic.png';

function Head(props) {
  return (
    <head>
      <Helmet>
        <link rel="stylesheet" href="./styles/style.css" />
        <link rel="shortcut icon" type="image/x-icon" href="./images/google.jng" />
        <meta charset="utf-8" />
        <meta name="author" content="Saaqeb Siddiqi" />

        <title> Safe Google </title>
        <script src="./script/script.js"> </script>
      </Helmet>
    </head>
  );
}

function SearchForm(props) {
  return (
    <form action="https://www.google.com/search?">
      <input name="hl" type="hidden" value="en" />
      <div className={style.padding_top}>
        <input name="q" type="text" autocomplete="off" id={style.searchbar}
          autofocus="autofocus" required onFocus="this.select()" maxlength="2048" minlength="1" />
      </div>

      <div className={style.padding_top}>
        <button type="submit" className={style.searchbutton}>
          Safe Search
        </button>
      </div>
    </form>
  );
}

function Logo(props) {
  return (
    <div className={style.container}>
      <p> Safer </p>
      <img src={google} alt="Google" />
    </div>
  );
}

function Explanation(props) {
  return (
    <div className={style.explanation}>
      <h1>How is it safer?</h1>
      <p>
        When you normally use Google search, you send invasive ad information
        such as location and web browser data to Google.
      </p>
      <p>
        This website conducts a normal Google search query without sending any
        extra and invasive information!
      </p>
    </div>
  );
}

function Nav(props) {
  return (
    <div className={style.navbar}>
      <p><a href="/">Saaqeb's Website</a></p>
      <p className={style.email}><a href="mailto:asksaaqeb@gmail.com">Email Saaqeb</a></p>
      <a href="/"><img src={propic} alt="Saaqeb" className={style.propic} /></a>
    </div>
  );
}

function Body(props) {
  return (
    <body>
      <Nav />
      <div className={style.horizontal}>
        <Logo />
        <SearchForm />
        <Explanation />
      </div>
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
