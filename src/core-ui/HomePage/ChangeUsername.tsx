import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user, logout } = useMoralis();
  const setUsername = () => {
    const username: string | null = prompt(
      `Enter your new Username (current: ${user?.getUsername()})`
    );
    if (!username) return;
    setUserData({ username });
  };
  return (
    <div className="absolute flex flex-col items-end text-sm top-5 right-5">
      <button
        onClick={setUsername}
        disabled={isUserUpdating}
        className="hover:text-pink-700"
      >
        Change User Name
      </button>
      <button className="text-teal-600 hover:text-pink-700" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default ChangeUsername;
