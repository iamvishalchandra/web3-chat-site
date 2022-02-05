import { useMoralis } from "react-moralis";
import Image from "next/image";
interface IAvatar {
  username?: String;
  logoutClick?: Boolean;
}
const Avatar = ({ username, logoutClick }: IAvatar) => {
  const { user, logout } = useMoralis();
  console.log(user?.get("username"));

  return (
    <Image
      className="bg-black rounded-full cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/personas/${
        username || user?.get("username")
      }.svg`}
      alt="avatar"
      layout="fill"
      onClick={() => logoutClick && logout()}
    />
  );
};

export default Avatar;
