import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  // Wrap our App Component inside router so App and children can use router
  // Pass the app component into Route to give it access to router props
  <Router>
    <React.StrictMode>
      <Route component={App} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
