import React from "react";
import { Link } from "react-router-dom";

//destructure the Bookmark from props
const Bookmark = ({ bookmark }) => {
  //////////////////
  // Style Objects
  //////////////////

  return (
      <div className="column is-2 box has-background-primary field is-grouped is-grouped-centered">
        <Link to={`/bookmark/${bookmark.id}`}>
          <h3 className="title is-3">{bookmark.title}</h3>
        </Link>
        <a 
          href={`/`}
          onClick={() => window.open(bookmark.link, '_blank')}
        >
          <span className="icon">
          <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
  );
};

export default Bookmark;
