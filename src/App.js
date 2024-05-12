import React from "react";
import "./App.css";
// import Header from './components/template/Header/Header';
import Api from "./Api";
import Footer from "./components/template/Footer/Footer";

const App = () => (
  <React.Fragment>
    {/* <Header /> */}
    <Api />
    <Footer />
  </React.Fragment>
);

export default App;
