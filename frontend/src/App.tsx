import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
import AllShops from "./components/AllShops";
import ListOfProducts from "./components/ListOfProducts";
import ExportedProducts from "./components/ExportedProducts";

function App() {
  return (
    <>
      {/* creating route */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/allshops" element={<AllShops />} />

          <Route
            path="/exportedproducts/:shopkeeperId"
            element={<ExportedProducts />}
          />
          <Route path="/listofproducts/:shopId" element={<ListOfProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
