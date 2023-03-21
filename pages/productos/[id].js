import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../slices/cart/cartSlice";
import { toast } from "react-hot-toast";
import Link from "next/link";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [images, setImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  let { id } = router.query;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.value.cart);

  const handleAddToCart = () => {
    if (!selected) {
      dispatch(add(product));
      router.push("/productos");
      return toast.success("Producto Agregado!");
    }
  };

  const handleShop = () => {
    if (!selected) {
      dispatch(add(product));
    }
    router.push("/compra/detalles");
  };

  useEffect(() => {
    if (id) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/product/${id}`
        )
        .then((res) => {
          setProduct(res.data.product);
          let imagesAux = {};
          for (let img of Object.entries(res.data.product.images)) {
            imagesAux[img[0]] = img[1].secureUrl;
          }

          setImages(imagesAux);

          let isSelected = cart.find((i) => i._id === res.data.product._id);
          if (isSelected) {
            setSelected(true);
          } else {
            setSelected(false);
          }
        })
        .catch();
    }
  }, [id]);

  useEffect(() => {
    let isSelected = cart.find((i) => i._id === product._id);
    if (isSelected) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [cart]);

  const handleImagesBtn = (type) => {
    let imagesLenght = Object.keys(images).length;
    if (type === 0) {
      // Left arrow
      if (selectedImage === 0) {
        setSelectedImage(imagesLenght - 1);
      } else {
        setSelectedImage(selectedImage - 1);
      }
    }
    if (type === 1) {
      // Right arrow
      if (selectedImage === imagesLenght - 1) {
        setSelectedImage(0);
      } else {
        setSelectedImage(selectedImage + 1);
      }
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-5rem)]  px-4 flex items-center justify-center gap-6 ">
      <div className="w-full h-[38rem] p-8 flex shadow-2xl bg-white rounded-2xl justify-between">
        <div className="basis-[55%] h-[100%]  flex flex-col justify-between gap-8 border p-6 rounded-md">
          <div className="w-full h-[24rem] shadow-2xl relative overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-contain"
              src={images[selectedImage]}
              alt=""
            />

            <div className="w-full flex justify-between absolute top-[50%] -translate-y-[50%]">
              <div
                onClick={() => handleImagesBtn(0)}
                className="w-[2rem] h-[2rem] rounded-full bg-btn flex items-center justify-center"
              >
                <i className="bx bx-chevron-left text-3xl cursor-pointer text-white"></i>
              </div>
              <div
                onClick={() => handleImagesBtn(1)}
                className="w-[2rem] h-[2rem] rounded-full bg-btn flex items-center justify-center"
              >
                <i className="bx bx-chevron-right text-3xl cursor-pointer text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full h-[8rem]  flex gap-4">
            {Object.entries(images).map((i, key) => {
              return (
                <div
                  key={key}
                  onClick={() => setSelectedImage(+i[0])}
                  className={`w-1/3 h-full border overflow-hidden cursor-pointer ${
                    selectedImage === +i[0] && " border-2 border-btn"
                  } rounded-md `}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={i[1]}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-[45%] h-full  flex flex-col justify-between px-6 pt-2">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-normal">{product.name}</p>
            <p>Talle: {product.size}</p>
            <p>{product.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>${product.price}</p>
            <div
              onClick={handleAddToCart}
              className="py-2 px-4 border border-btn rounded-lg cursor-pointer flex items-end justify-center "
            >
              {selected ? "Agregado" : "Agregar al carrito"}
            </div>
            <div
              onClick={handleShop}
              className="py-2 px-4 bg-btn text-white rounded-lg flex items-end justify-center cursor-pointer"
            >
              <p>Comprar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
