import AllBookmarks from "./pages/AllBookmarks";
import SingleBookmark from "./pages/SingleBookmark";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";

export default function App(props) {

  const url = "https://dj-my-bookmarks.herokuapp.com/bookmarks/";


  // State to Hold The List of bookmarks
  const [bookmarks, setbookmarks] = useState([]);

  const nullBookmark = {
    title: '',
    link: ''
  }
  const [targetBookmark, setTargetBookmark] = useState(nullBookmark)

  const getBookmarks = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setbookmarks(data.reverse())
      }catch(e){
        console.error(e)
      }
    }

    const addBookmark = async (newBookmark) => {
      try {
        await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookmark),
      }).then(data => getBookmarks())
      }catch(e){
          console.error(e)
      }
    // get updated list of bookmarks
    }

    const getTargetBookmark = (bookmark) => {
      setTargetBookmark(bookmark);
      props.history.push('/edit');
    }

    const updateBookmark = async (bookmark) => {
      try {
        await fetch(url + bookmark.id + '/', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookmark)
        }).then(data => getBookmarks())
      }catch(e){
          console.error(e)
      }
    }

    const deleteBookmark = async (bookmark) => {
      try {
        await fetch(url + bookmark.id + "/", {
          method: "delete",
        }).then(data => getBookmarks())
      } catch (e) {
        console.error(e)
      }finally{
        window.location.assign('/')
      }

  };

  useEffect(()=>{
    getBookmarks();
  }, [])

  return (
      <div>
        <Navbar />
        <h1 className="title is-1">My bookmark List</h1>
        <div className="is-centered">
          <Link to="/new">
            <button className="button is-link">Create New bookmark</button>
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <AllBookmarks {...routerProps} bookmarks={bookmarks}/>}
          />
          <Route
            path="/bookmark/:id"
            render={(routerProps) => (
              <SingleBookmark {...routerProps} bookmarks={bookmarks}  edit={getTargetBookmark} deleteBookmark={deleteBookmark}/>
            )}
          />
          <Route
            path="/new"
            render={(routerProps) =>(
              <Form
              {...routerProps}
              initialBookmark={nullBookmark}
              handleSubmit={addBookmark}
              buttonLabel="Create bookmark"
              />
            )}
          />
          <Route
            path="/edit"
            render={(routerProps) => (
              <Form
              {...routerProps}
              initialBookmark={targetBookmark}
              handleSubmit={updateBookmark}
              buttonLabel="Update bookmark"
              />)
            }
          />
        </Switch>
      </div>
    );
}
