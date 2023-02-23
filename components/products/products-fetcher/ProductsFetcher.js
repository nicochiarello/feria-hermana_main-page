import { useEffect } from "react";
import axios from "axios";

const ProductsFetcher = ({ setData, query, setLoader, setNbPages, page }) => {
  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchProducts = async () => {
      setLoader(true);
      let itemsPerPage = 20;
      let skip = (page - 1) * itemsPerPage;
      let limit = itemsPerPage;
      axios
        .get(
          `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/products?skip=${skip}&limit=${limit}${
            query && query
          }`,
          {
            cancelToken: source.token,
          }
        )
        .then((res) => {
          if (setNbPages) {
            let nbItems = res.data.count;
            let pages = Math.ceil(nbItems / itemsPerPage);
            setNbPages(pages);
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
