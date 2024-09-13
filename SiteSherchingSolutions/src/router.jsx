import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;