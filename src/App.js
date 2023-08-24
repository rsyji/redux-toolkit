import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Cart from "./components/pages/cart";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
