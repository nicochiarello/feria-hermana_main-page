import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import Success from "../../../components/OrderVerify/status/Success";
import Error from "../../../components/OrderVerify/status/Error";
import VerifierHandler from "../../../components/OrderVerify/VerifierHandler";

const OrderVerify = () => {
  const [loader, setLoader] = useState(true);
  const [order, setOrder] = useState({});
  const router = useRouter();
  const id = router.query.order;

  useEffect(() => {
    if (id) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/orders/${id}/info`
        )
        .then((res) => {
          setOrder(res.data);
          setLoader(false);
        })
        .catch((err) => console.log(err.response));
    }
  }, [id]);

  return (
    <div>
      {loader ? (
        <div className="w-full h-[calc(100vh-5rem)] flex items-center justify-center">
          {" "}
          <ClipLoader size={150} />{" "}
        </div>
      ) : (
        <div className="w-full">
          <VerifierHandler status={order.payment_status} order={order}/>
        </div>
      )}
    </div>
  );
};

export default OrderVerify;
