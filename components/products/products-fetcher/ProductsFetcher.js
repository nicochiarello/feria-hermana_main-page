import { useEffect } from "react";
import axios from "axios";


const ProductsFetcher = ({ setData, query, setLoader, setNbPages, page }) => {
  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchProducts = async () => {
      setLoader(true);
      axios
        .get(
          `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/products?page=${page}`,
          {
            cancelToken: source.token,
          }
        )
        .then((res) => {
          if (setNbPages) {
            setNbPages(res.data.nbPages);
          }
          setLoader(false);
          setData(res.data.products);
        })
        .catch((err) => {});
    };

    fetchProducts();

    return () => {
      source.cancel();
    };
  }, [query, page]);
};

export default ProductsFetcher;
