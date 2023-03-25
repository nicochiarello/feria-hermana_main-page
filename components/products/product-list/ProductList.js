import { useState, useEffect } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductsFetcher from "../products-fetcher/ProductsFetcher";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const ProductList = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [nbPages, setNbPages] = useState(1);
  const [loader, setLoader] = useState(true);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const cart = useSelector((state) => state.cart.value.cart);

  // console.log(nbPages);

  useEffect(()=>{
    if(router.query.page){
      setPage(+router.query.page)
    }
  }, [router.query])


  return (
    <div className="h-fit w-[calc(100%-15rem)] py-1 px-3 grid grid-cols-2 lg:grid-cols-3 gap-4 ">
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

      <div className="w-full col-span-3 py-4 bg-white flex justify-between items-center px-4">
        <i className="bx bx-chevron-left"></i>
        <div className="flex gap-4 items-center">
          <i className="bx bx-chevron-left"></i>
          <div className="flex gap-2">
            {Array.from({ length: nbPages }, (i, key) => (
              <p
              onClick={() =>
                router.push({
                  pathname: router.pathname,
                  query: { ...router.query, page: key + 1 },
                })
              }
                className={`${page === key + 1 && "text-btn"} cursor-pointer`}
                key={key}
              >
                {key + 1}
              </p>
            ))}
          </div>
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>

      {products.map((i) => {
        return <ProductItem cart={cart} key={i._id} item={i} />;
      })}
    </div>
  );
};

export default ProductList;
