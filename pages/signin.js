import { useState } from "react";
import Link from "next/link";
import { PulseLoader } from "react-spinners";

const Signin = () => {
  const [formValues, setFormValues] = useState({});
  const [loader, setLoader] = useState(false);
  const [authError, setAuthError] = useState({});

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center px-2">
      <div className="px-2 py-4 w-full max-w-[40rem] my-4 sm:shadow-2xl sm:max-w-full sm:w-fit h-[30rem] sm:h-fit sm:px-24 sm:py-16 bg-darkBg text-white rounded-2xl overflow-hidden flex flex-col gap-10 justify-around">
        <div className="flex flex-col items-center justify-center text-2xl font-bold gap-4 w-full sm:w-[calc(20rem)] text-black">
          {/* <Image src="/dillo.png" alt="DilloStore" width="100" height="100" /> */}
          <div className="w-[5rem] h-[5rem] bg-pink-500 rounded-full flex items-center justify-center">
            <p className="text-white">FH</p>
          </div>
          <h2>Feria Hermana</h2>
        </div>
        <form
          onSubmit={(e) => console.log(e)}
          className="flex flex-col gap-2 text-black"
        >
          <div className="flex flex-col gap-1 ">
            <label>Nombre</label>
            <input
              onChange={(e) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
              value={formValues.username}
              type="text"
              className={`form-control block w-full pl-3 pr-12 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                authError.user && "border border-red-400"
              }`}
              id="exampleFormControlInput1"
              placeholder="Nombre"
            />
            {authError.user && (
              <span className=" text-btnStrong text-sm">{authError.user}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              onChange={(e) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
              value={formValues.username}
              type="text"
              className={`form-control block w-full pl-3 pr-12 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                authError.user && "border border-red-400"
              }`}
              id="exampleFormControlInput1"
              placeholder="Email"
            />
            {authError.user && (
              <span className=" text-btnStrong text-sm">{authError.user}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label>Celular</label>

            <input
              onChange={(e) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
              value={formValues.username}
              type="text"
              className={`form-control block w-full pl-3 pr-12 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                authError.user && "border border-red-400"
              }`}
              id="exampleFormControlInput1"
              placeholder="Celular"
            />
            {authError.user && (
              <span className=" text-btnStrong text-sm">{authError.user}</span>
            )}
          </div>


          <div className="flex flex-col gap-1">
            <label>Contraseña</label>
            <div>
              <div className="h-full relative">
                <input
                  autoComplete="on"
                  onChange={(e) =>
                    setFormValues({ ...formValues, password: e.target.value })
                  }
                  value={formValues.password}
                  type="password"
                  className={`form-control block w-full pl-3 pr-12 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                    authError.password && "border border-red-400"
                  }`}
                  placeholder={"Contraseña"}
                />
      
              </div>
              {authError.password && (
                <span className=" text-btnStrong text-sm">
                  {authError.password}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label>Repetir Contraseña</label>
            <div>
              <div className="h-full relative">
                <input
                  autoComplete="on"
                  onChange={(e) =>
                    setFormValues({ ...formValues, repetedPassword: e.target.value })
                  }
                  value={formValues.repetedPassword}
                  type={"password"}
                  className={`form-control block w-full pl-3 pr-12 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                    authError.password && "border border-red-400"
                  }`}
                  placeholder={"Contraseña"}
                />
      
              </div>
              {authError.password && (
                <span className=" text-btnStrong text-sm">
                  {authError.password}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            {loader ? (
              <button
                type="submit"
                className="rounded py-2 my-3 text-center font-bold bg-btnSecondary w-full cursor-not-allowed"
              >
                <PulseLoader size={8} color={"#ffffff"} />
              </button>
            ) : (
              <button
                type="submit"
                className="rounded py-2 my-3 text-center font-bold bg-red-400 w-full "
              >
                Iniciar Sesión
              </button>
            )}
            <p className="text-black text-sm">
              Ya estas registrado?{" "}
              <Link href={"/login"} className="text-red-400">
                Iniciar Sesion
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
