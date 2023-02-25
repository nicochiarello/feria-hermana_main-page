import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [images, setImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();
  let { id } = router.query;

  console.log({ selectedImage });
  const handleAddToCart = () => {
    // To do
    // This function adds item to the cart and then shows the previous page
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
        })
        .catch();
    }
  }, [id]);

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
      <div className="w-full h-[38rem] p-8 flex shadow-2xl rounded-md justify-between">
        <div className="basis-[50%] h-[100%]  flex flex-col justify-between gap-8 border p-6 rounded-md">
          <div className="w-full border border-gray-500 rounded-md h-[20rem]  relative">
            <img
              className="w-full h-full object-contain"
              src={images[selectedImage]}
              alt=""
            />

            <div className="w-full flex justify-between px-1 absolute top-[50%] -translate-y-[50%]">
              <i
                onClick={() => handleImagesBtn(0)}
                className="bx bx-chevron-left text-5xl"
              ></i>
              <i
                onClick={() => handleImagesBtn(1)}
                className="bx bx-chevron-right text-5xl"
              ></i>
            </div>
          </div>
          <div className="w-full h-[8rem]  flex gap-4">
            {Object.entries(images).map((i, key) => {
              return (
                <div
                  key={key}
                  onClick={() => setSelectedImage(+i[0])}
                  className={`w-1/3 h-full border overflow-hidden ${
                    selectedImage === +i[0] && " border-2 border-green-600"
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
        <div className="basis-[40%] h-full  flex flex-col justify-between px-4 pt-2">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-normal">{product.name}</p>
            <p>Talle: {product.size}</p>
            <p>{product.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Precio: ${product.price}</p>
            <button
              onClick={handleAddToCart}
              className="py-2 px-4 bg-red-600 rounded-lg"
            >
              Agregar al carrito
            </button>
            <Link href={"/compra/detalles"} className="py-2 px-4 bg-red-600 rounded-lg">Comprar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
