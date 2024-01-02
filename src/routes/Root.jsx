import { Routes, Route } from "react-router-dom";

import MainContent from "../component/Content/MainContent";
import DetailContent from "../component/Content/DetailContent";

const Root = ({ search }) => {
  return (
    <Routes>
      <Route path="/" element={<MainContent search={search} />} />
      <Route path="/detail" element={<DetailContent />} />
      {/* <Route path="/data/detail/:id" element={<DetailContent />} /> */}
    </Routes>
  );
};

export default Root;
