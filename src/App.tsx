import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar></MyNavbar>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/:articleId" element></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
