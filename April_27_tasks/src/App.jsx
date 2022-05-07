import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Groups from "./components/Groups";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h3>React Redux App</h3>
      <nav className="main-nav">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/">Users</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/groups">Groups</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
