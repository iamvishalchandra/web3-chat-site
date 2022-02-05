import Moralis from "moralis/node";
import { useMoralis } from "react-moralis";
import Avatar from "../HomePage/Avatar";
import TimeAgo from "timeago-react";
interface IMessage {
  message: Moralis.Object<Moralis.Attributes>;
}
const Message = ({ message }: IMessage) => {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user?.get("ethAddress");

  return (
    <div
      className={`mx-2 mt-7 flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar />
      </div>
      <div
        className={`flex px-3 py-3 space-x-4 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-teal-300"
            : "rounded-bl-none bg-blue-300"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-teal-300" : "text-blue-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default Message;
