import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="relative text-white bg-black">
      <h1>Login Screen</h1>
      <div className="absolute z-50 flex flex-col items-center justify-center w-full space-y-4 h-4/6">
        <Image
          className="object-cover rounded-full"
          src="https://cdn.pixabay.com/photo/2017/06/10/07/21/chat-2389223_960_720.png"
          alt="header-login"
          width={200}
          height={200}
        />
        <button
          onClick={() => authenticate()}
          className="p-5 font-bold bg-teal-600 rounded-lg animate-pulse"
        >
          Login to Web3 Chat
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          alt="login-image"
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
