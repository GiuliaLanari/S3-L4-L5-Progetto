import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import ArticleDetails from "./components/ArticleDetails";
import Edit from "./components/Edit";
import AddPost from "./components/AddPost";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ArticleDetails />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
