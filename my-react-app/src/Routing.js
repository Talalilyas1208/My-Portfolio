import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import { ConfigProvider, theme } from "antd";

export default function Routing() {
  return (

      <Routes>
        <Route index element={<Mainpage />} />
      </Routes>
 
  );
}
