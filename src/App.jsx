import "./App.css";
import React, { useState } from "react";
// import { MainContent } from "./component/Content/MainContent";
import FooterContent from "./component/Footer/FooterContent";
import MainHeader from "./component/Header/MainHeader";
import Root from "./routes/Root.jsx";

function App() {
  const [searchResult, isSearchResult] = useState([]);

  return (
    <div className="container mx-auto">
      <MainHeader dataSearch={isSearchResult}></MainHeader>
      {/* <MainContent search={searchResult}></MainContent> */}
      <Root search={searchResult}></Root>
      <FooterContent></FooterContent>
    </div>
  );
}

export default App;
