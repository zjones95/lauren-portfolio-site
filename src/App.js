import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import LifeDrawings from "./components/LifeDrawings";
import Nav from "./components/Nav";
import Loader from "./components/Loader";

function App() {
  const API = "https://lauren-api-mongo.herokuapp.com";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async () => {
    const piecesResponse = await fetch(`${API}/pieces`);
    const piecesResult = await piecesResponse.json();
    const aboutResponse = await fetch(`${API}/abouts`);
    const aboutResult = await aboutResponse.json();

    piecesResult.sort((a, b) => {
      return a.order - b.order;
    });
    aboutResult.sort((a, b) => {
      return a.order - b.order;
    });

    const data = {
      pieces: piecesResult,
      about: aboutResult,
    };

    return setData(data);
  };

  fetchData();

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home data={data.pieces} />} />
            <Route path="/about" element={<About data={data.about} />} />
            <Route
              path="/sketchbook"
              element={<LifeDrawings data={data.pieces} />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
