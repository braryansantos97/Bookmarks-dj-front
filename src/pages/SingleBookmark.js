import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our bookmark, including router prop match
const SingleBookmark = ({ bookmarks, match, edit, deleteBookmark }) => {
  const id = parseInt(match.params.id); //get the id from url param
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);

  ////////////////////
  // Styles
  ///////////////////

  return (
    <div className="columns is-mobiles is-centered">
      <div className="column container is-half has-background- box">
        <div className="box has-text-centered is-size-3 has-background-primary">
          <h3>{bookmark.title}</h3>
        </div>
        <div className="box has-text-centered is-size-3 has-background-primary">
          <h3>{bookmark.link}</h3>
        </div>
        <div className="buttons is-centered">
        <a
            className="button is-info"
            href="/"
            onClick={() => window.open(bookmark.link, '_blank')}
          >
            <span>
              <i className="fas fa-external-link-alt" />
            </span>
            </a>
          <button
            className="button is-info"
            onClick={(event) => edit(bookmark)}
          >
            <span>
              <i className="fas fa-edit" />
            </span>
            </button>
            <button className="button is-danger" onClick={(event) => deleteBookmark(bookmark)}>
              <span>
                <i className="fas fa-trash-alt"></i>
              </span>
            </button>
            <Link to="/" className="button is-warning">
              <span>
                <i className="fas fa-home"></i>
              </span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBookmark;
