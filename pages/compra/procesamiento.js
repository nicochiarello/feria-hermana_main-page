import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Procesamiento = () => {
  const price = useSelector((state) => state.cart.value.price);
  const cart = useSelector((state) => state.cart.value.cart);
  const [form, setForm] = useState({ total: price });
  const [deliveryDetails, setDeliveryDetails] = useState(false);
  const [errors, setErrors] = useState({});

  const submitForm = () => {
    console.log(form);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/orders/create`,
        { ...form, products: cart.map((i) => i._id) }
      )
      .then((res) => console.log(res))
      .catch((err) => setErrors(err.response.data));
  };

  useEffect(() => {
    setForm({ ...form, price });
  }, [price]);

  useEffect(() => {
    if (form.shipping_type === 2) {
      setDeliveryDetails(true);
    } else {
      setDeliveryDetails(false);
      setForm({ ...form, direction: null, zip: null });
    }
  }, [form.shipping_type]);

  console.log({ form });

  return (
    <div className="w-full min-h-[calc(100vh-7rem)] px-4 flex items-center justify-center my-4">
      <div className="w-full min-h-[85%] py-5 px-6 flex flex-col justify-center items-center shadow-2xl rounded-md ">
        <div className="flex items-start w-full font-semibold border-b py-4 text-lg">
          <p>Detalles personales</p>
        </div>
        <div className=" w-full h-fit gap-5 grid grid-cols-2 py-4 overflow-hidden text-md overflow-y-scroll border-b">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Nombre y apellido</label>
            <input
              className={`rounded-lg border ${
                errors.name && "border-red-500"
              } px-2 py-2`}
              type="text"
              placeholder="Nombre y apellido"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <span className="text-red-600 text-sm px-1">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Email</label>
            <input
              className={`rounded-lg border ${
                errors.email && "border-red-500"
              } px-2 py-2`}
              type="text"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm px-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Celular</label>
            <input
              className={`rounded-lg border ${
                errors.phone && "border-red-500"
              } px-2 py-2`}
              type="number"
              placeholder="Celular"
              onChange={(e) => setForm({ ...form, phone: +e.target.value })}
            />
            {errors.phone && (
              <span className="text-red-600 text-sm px-1">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Dni</label>
            <input
              className={`rounded-lg border ${
                errors.dni && "border-red-500"
              } px-2 py-2`}
              type="number"
              placeholder="Dni"
              onChange={(e) => setForm({ ...form, dni: +e.target.value })}
            />
            {errors.dni && (
              <span className="text-red-600 text-sm px-1">
                {errors.dni.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Tipo de retiro</label>
            <select
              onChange={(e) =>
                setForm({ ...form, shipping_type: +e.target.value })
              }
              className={`rounded-lg border ${
                errors.shipping_type && "border-red-500"
              } px-2 py-2`}
            >
              <option selected disabled value={null}>
                Elija una opcion
              </option>
              <option value="0">Godoy cruz</option>
              <option value="1">Centro</option>
              <option value="2">Domicilio</option>
            </select>
            {errors.shipping_type && (
              <span className="text-red-600 text-sm px-1">
                {errors.shipping_type.message}
              </span>
            )}
          </div>

          {deliveryDetails && (
            <>
              {" "}
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="">Dirección</label>
                <input
                  className="rounded-lg border px-2 py-2"
                  type="text"
                  placeholder="Dirección"
                  onChange={(e) =>
                    setForm({ ...form, direction: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="">Codigo postal</label>
                <input
                  className="rounded-lg border px-2 py-2"
                  type="text"
                  placeholder="Codigo postal"
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                />
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="py-4 w-full flex flex-col gap-1 rounded-md col-span-2 border-b">
            <p>
              Tipo de retiro:{" "}
              {(form.shipping_type === 0 && "Godoy cruz") ||
                (form.shipping_type === 1 && "Centro") ||
                (form.shipping_type === 2 && "Domicilio")}{" "}
            </p>
            <p>Envio: $</p>
            <p>Total: ${price}</p>
          </div>
          <div className="w-full flex items-center justify-end  py-2 rounded-md col-span-2">
            <p
              onClick={submitForm}
              className="w-[14rem] py-3 rounded-full bg-red-400 flex items-center justify-center"
            >
              Comprar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procesamiento;
