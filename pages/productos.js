import ProductList from "../components/products/product-list/ProductList";
import ProductsSidebar from "../components/products/ProductsSidebar";
import { useSelector } from "react-redux";
import Cart from "../components/cart/Cart";
import { useEffect, useState } from "react";
import axios from "axios";

const Productos = () => {
  const cartStatus = useSelector((state) => state.cart.value.status);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    sort: "-createdAt",
    category: null,
  });

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/categories`
      )
      .then((res) => setCategories(res.data.categories));
  }, []);

  return (
    <div className="w-full h-fit flex py-2">
      {cartStatus && <Cart />}
      <ProductsSidebar
        categories={categories}
        filters={filters}
        setFilters={setFilters}
      />
      <ProductList
        categories={categories}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default Productos;
