import axios from "axios";
import { useState, useEffect } from "react";

const Retiros = () => {
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/withdrawals`
      )
      .then((res) => setWithdrawals(res.data.withdrawals));
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] px-2 flex items-center justify-center">
      <div className="w-[900px] h-[500px] relative rounded-xl bg-white shadow-2xl flex items-center justify-center">
        <div className="absolute top-[0] px-12 py-2 bg-main rounded-2xl text-white -translate-y-[1rem] ">
          <h3>Retiros</h3>
        </div>
        <div className="w-full h-full pt-12 pb-2 overflow-y-scroll">
          {withdrawals.map((i) => {
            return (
              <div key={i._id} className="w-full py-3 flex items-center justify-between text-2xl px-4 border-y flex-wrap">
                <p>{i.day} </p>
                <p>{i.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Retiros;
