import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route index element={<Mainpage />} />
      </Routes>
    </div>
  );
}
