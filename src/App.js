import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="wrapper">
                <Header />
                <Home />
            </div>
        </div>
    </div>
  );
}

export default App;
