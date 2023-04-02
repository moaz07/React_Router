import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Movies } from "./components/MoviesArray";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Filter, { Search } from "./components/Filter";
import Description from "./components/Description";

function App() {
  const [movies, setMovies] = useState(Movies);
  const [visible, setVisible] = useState(false);
  const [add, setAdd] = useState("Add new Movie");
  const [query, setQuery] = useState("");

  const receivedQuery = (txt) => {
    setQuery(txt);
  };
  const receivedMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const toggle = () => {
    setVisible(!visible);
    if (visible === true) {
      setAdd("Add new Movie");
    } else {
      setAdd("Close");
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="welcome">
              <span className="welcomeMessage">Welcome !</span>
              <Link to="/home">
                <button>Enter</button>
              </Link>
            </div>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <div className="home">
              <div className="header">
                <Filter setQuery={receivedQuery} />
                <hr />
                <button type="submit" onClick={() => toggle()}>
                  {add}
                </button>
                <hr />
                {visible ? (
                  <>
                    <AddMovie SubmittedMovie={receivedMovie} />
                  </>
                ) : null}
              </div>

              <div className="body">
                <MovieList movies={Search(movies, query)} />
              </div>
            </div>
          }
        />
        <Route path="/movie/:moviePath" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
