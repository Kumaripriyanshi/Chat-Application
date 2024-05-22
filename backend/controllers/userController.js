import User from "../models/userModel.js";

export const SidebarUser = async (req, res) => {
  try {
    const id = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: id },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
