import React from "react";
import Bookmark from "../components/Bookmark";

const AllBookmarks = (props) => {

  // For each bookmark in the array render a bookmark component
  return (
      props.bookmarks.map((bookmark) =>
      <div className="field is-grouped is-grouped-centered">
        <Bookmark bookmark={bookmark} key={bookmark.id} />
      </div>
    )
  )
};

export default AllBookmarks;
