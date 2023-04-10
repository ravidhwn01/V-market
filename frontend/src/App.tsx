import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
import AllShops from "./components/AllShops";
import ListOfProducts from "./components/ListOfProducts";
import ExportedProducts from "./components/ExportedProducts";
import { UserContextProvider } from "./context/user.context";
import MyProducts from "./components/MyProducts";

function App() {
  return (
    <>
      {/* creating route */}
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/allshops" element={<AllShops />} />

            <Route path="/exported-products" element={<ExportedProducts />} />
            <Route path="/products" element={<MyProducts />} />
            <Route path="/products/:shopId" element={<ListOfProducts />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
