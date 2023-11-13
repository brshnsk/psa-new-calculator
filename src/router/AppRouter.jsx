// AppRouter.js
import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import { SenConverter } from "../pages/SenConverter";
import { App } from "../App";

export const AppRouter = () => {
  const isProduction = process.env.NODE_ENV === "production";
  const basename = isProduction ? "/psa-new-calculator" : "/";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/sen" element={<SenConverter />} />
        <Route path="/psa" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
