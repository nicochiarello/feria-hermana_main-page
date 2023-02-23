import { useState } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductsFetcher from "../products-fetcher/ProductsFetcher";
import { ClipLoader } from "react-spinners";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [nbPages, setNbPages] = useState(1);
  const [loader, setLoader] = useState(true);

  return (
    <div className="h-fit w-[calc(100%-14rem)] bg-green-600 px-2 py-2 grid grid-cols-3 gap-4 ">
      {loader && (
        <div className="w-screen h-full absolute top-0 left-0 bg-opacity col-span-3 flex items-center justify-center">
          <ClipLoader color="white" size={60} />
        </div>
      )}

      <ProductsFetcher
        page={page}
        setData={setProducts}
        setLoader={setLoader}
        setNbPages={setNbPages}
        query={null}
      />
      {products.map((i) => {
        return <ProductItem key={i._id} item={i} />;
      })}
    </div>
  );
};

export default ProductList;
