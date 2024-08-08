import "./App.css";
import Cursor from "./components/cursor/Cursor";
import Info from "./components/footer/info";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/Scroll/Gototop";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>

        <Info />
        <ScrollToTopButton />
        <Cursor />
      </div>
    </BrowserRouter>
  );
}


export default App;
