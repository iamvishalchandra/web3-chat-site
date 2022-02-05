import { MouseEvent, MutableRefObject, useState } from "react";
import { useMoralis } from "react-moralis";

interface ISendMessage {
  endOfMessagesRef: MutableRefObject<HTMLDivElement | null>;
}

const SendMessage = ({ endOfMessagesRef }: ISendMessage) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      if (!message) return;

      const Messages = await Moralis.Object.extend("Messages");
      const messages = new Messages();
      await messages.save({
        message,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
      });
      endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
      setMessage("");
    } catch (e) {
      if (typeof e === "string") console.log(e);
      if (e instanceof Error) console.log(e.message);
    }
  };
  return (
    <form className="fixed z-50 flex w-11/12 max-w-2xl px-6 py-4 bg-black border-4 border-blue-400 rounded-full shadow-xl bottom-10 opacity-80">
      <input
        type="text"
        className="flex-grow pr-5 text-white placeholder-gray-500 bg-transparent outline-none"
        placeholder={`Enter a message ${user?.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage} className="font-bold text-teal-500">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
