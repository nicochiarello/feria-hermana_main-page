import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [images, setImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();
  let { id } = router.query;

  console.log({ selectedImage });

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
    <div className="w-full min-h-[calc(100vh-5rem)] bg-red-600 px-4 flex items-center justify-center">
      <div className="basis-[50%] h-[40rem] bg-blue-300 flex flex-col justify-between gap-8">
        <div className="w-full h-[30rem] bg-yellow-300 relative">
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
        <div className="w-full h-[8rem] bg-gray-300 flex gap-4">
          {Object.entries(images).map((i, key) => {
            return (
              <div
                key={key}
                onClick={() => setSelectedImage(+i[0])}
                className={`w-1/3 h-full bg-green-400 overflow-hidden ${
                  selectedImage === +i[0] && "border border-green-300"
                }`}
              >
                <img className="w-full h-full object-cover" src={i[1]} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="basis-[50%] h-[40rem] bg-green-300"></div>
    </div>
  );
};

export default ProductDetails;
