import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState({ data: "white", color: "black" });
  const apiKey = "c2f81bf32414416ba24f08887dcaba57";

  const mode = () => {
    setTheme((prevTheme) => ({
      data: prevTheme.data === "gray-800" ? "white" : "gray-800",
      color: prevTheme.color === "black" ? "white" : "black",
    }));
  };

  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Loader />
        <Navbar />
        <Routes>
          <Route
            path=""
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                color={theme.color}
                key=""
                pageSize={6}
                category="general"
              />
            }
          />

          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                color={theme.color}
                key="business"
                pageSize={6}
                category="business"
              />
            }
          />

          <Route
            exact
            path="/entertain"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                color={theme.color}
                key="entertain"
                pageSize={6}
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                color={theme.color}
                key="general"
                pageSize={6}
                category="general"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                color={theme.color}
                pageSize={6}
                category="health"
                key="health"
              />
            }
            key="health"
          />

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                color={theme.color}
                key="science"
                pageSize={6}
                category="science"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                color={theme.color}
                pageSize={6}
                category="sports"
                key="sports"
              />
            }
          />

          <Route
            exact
            path="/tech"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                color={theme.color}
                key="tech"
                pageSize={6}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
