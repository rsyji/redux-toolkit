import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Cart from "./components/pages/cart";
import NavBar from "./components/navBar";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
