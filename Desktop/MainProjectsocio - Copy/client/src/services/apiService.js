import axios from "axios";

export const getUserById = async () => {
  try {
    let response = await axios.get(
      `http://localhost:5000/api/admin/user/${localStorage.getItem("id")}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
