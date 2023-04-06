import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { Fragment, useState } from "react";

import Home from "./pages/Home";

function App() {
  //useState for auth
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || false);

  const signOut = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    window.location.pathname = "/login";
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {!isAuth ? (
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              ) : (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/createpost">
                      Create Post
                    </Link>
                  </li>
                  <button className="btnbtn-primary" onClick={signOut}>
                    Logout
                  </button>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
