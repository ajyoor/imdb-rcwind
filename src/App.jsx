import "./App.css";
import { MainContent } from "./component/Content/MainContent";
import { FooterContent } from "./component/Footer/FooterContent";
import { MainHeader } from "./component/Header/MainHeader";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <MainHeader></MainHeader>
        <MainContent></MainContent>
        <FooterContent></FooterContent>
      </div>
    </>
  );
}

export default App;
