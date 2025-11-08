import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductAdd from "./components/ProductAdd";
import CategoryPage from "./components/CategoryPage";
import ProductEdit from "./components/ProductEdit";
import ProductDelete from "./components/ProductDelete";
import Cart from "./components/Cart";
import { CartProvider } from "./hooks/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/addProduct" element={<ProductAdd />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/edit/:id" element={<ProductEdit />} />
            <Route path="/delete/:id" element={<ProductDelete />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
