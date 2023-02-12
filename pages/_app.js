import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <div className="w-screen h-fit flex flex-col items-center">
        <div className="w-full max-w-[1400px] relative">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
