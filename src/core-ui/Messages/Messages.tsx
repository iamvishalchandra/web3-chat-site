import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);
  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan("createdAt", new Date(Date.now() - 24 * 60 * 60 * 1000)),
    [],
    { live: true }
  );
  console.log(data);

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div>
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div ref={endOfMessagesRef} className="mt-10 text-center text-gray-500">
        <p>You are up to date {user?.getUsername()}</p>
      </div>
    </div>
  );
};

export default Messages;
