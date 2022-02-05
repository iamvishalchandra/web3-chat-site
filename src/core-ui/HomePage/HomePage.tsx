import Head from "next/head";
import { useMoralis } from "react-moralis";
import Header from "./Header";
import Messages from "../Messages/Messages";

const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900">
      <div className="mx-auto lg:px-20 max-w-screen-2xl">
        <Header />
        <Messages />
      </div>
    </div>
  );
};

export default HomePage;
