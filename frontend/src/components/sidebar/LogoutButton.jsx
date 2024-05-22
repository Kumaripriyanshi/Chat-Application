import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();
  return (
    <div className="mt-auto flex flex-column justify-between items-center">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-black cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
      <div
        className={`flex gap-2 items-center  rounded p-2 py-1 cursor-pointer`}
        tooltip="Profile"
      >
        <div className={`avatar }`}>
          <div className="w-12 rounded-full">
            <img src={authUser.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <h4 className="font-bold text-sky-950">{authUser.fullName}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoutButton;
