import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[100vh]  md:w-[100%] sm:w-[100%] md:h-[100%] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 homePage">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
