import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import { AppLayout } from "../components/AppLayout";

const TokenTopUp = () => {
  const handleClick = async () => {
    await fetch("/api/addTokens", {
      method: "POST",
    });
  };

  return (
    <div>
      <h1>Add tokens</h1>
      <button
        onClick={handleClick}
        type="submit"
        className="bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block"
      >
        Add Token
      </button>
    </div>
  );
};

export default TokenTopUp;

TokenTopUp.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    prop: {},
  };
});
