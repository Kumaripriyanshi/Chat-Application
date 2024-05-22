import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [tranVal, settransVal] = useState(0);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(
    selectedConversation ? selectedConversation._id : ""
  );
  useEffect(() => {
    // cleanup function (unmounts)

    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleSidebarClick = () => {
    if (tranVal < 0) settransVal(0);
    else settransVal(-312);

    const sidebar = document.getElementsByClassName("responsiveSidebar")[0];
    sidebar.style.transform = `translateX(${tranVal}px)`;
  };
  return (
    <div
      className="md:min-w-[450px] flex flex-col bg-sky-800"
      style={{ width: "100%" }}
    >
      {!selectedConversation ? (
        <div className="bg-slate-500 px-4 py-2 mb-2 flex justify-end hamburgerParent">
          <span className="hamburgerLogo" onClick={handleSidebarClick}>
            &#9776;
          </span>
        </div>
      ) : (
        ""
      )}

      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-sky-200 px-4 py-2 mb-2 flex justify-between">
            <div
              className={`flex gap-2 items-center  rounded p-2 py-1 cursor-pointer`}
            >
              <div className={`avatar }`}>
                <div className="w-12 rounded-full">
                  <img
                    src={selectedConversation.profilePic}
                    alt="user avatar"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                  <h4 className="font-bold text-sky-950">
                    {selectedConversation.fullName}
                    <p className="font-light text-xs text-sky-700">
                      {isOnline ? "Online" : "Offline"}
                    </p>
                  </h4>
                </div>
              </div>
            </div>
            {/* <span className="flex justify-between items-center">
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-900 font-bold">
                {console.log("selected ", selectedConversation)}
                {selectedConversation.fullName}
              </span>
              <div className={`avatar `}>
                <div className="w-12 rounded-full">
                  <img
                    src={selectedConversation.profilePic}
                    alt="user avatar"
                    style={{ paddingRight: "3px" }}
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                  <p className="font-bold text-blue-500">
                    {selectedConversation.fullName}
                  </p>
                </div>
              </div>
            </span> */}
            <span className="hamburgerLogo" onClick={handleSidebarClick}>
              &#9776;
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-cyan-50 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        {/* <span className="hamburgerLogo" onClick={handleSidebarClick}>
          &#9776;
        </span> */}
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;
