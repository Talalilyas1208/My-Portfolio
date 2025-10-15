import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import { ConfigProvider, theme } from "antd";

export default function Routing() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm, // built-in dark mode
        token: {
          borderRadius: 8, // smooth corners
        },
      }}
    >
      <Routes>
        <Route index element={<Mainpage />} />
      </Routes>
    </ConfigProvider>
  );
}
