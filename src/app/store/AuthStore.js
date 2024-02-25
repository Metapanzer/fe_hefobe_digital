import { Axios } from "axios";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  login: async (email, password) => {
    try {
      set({ isLoading: true });
      const response = await Axios.post("http://localhost:3000/api/auth/", {
        email,
        password,
      });
      console.log("masuuukkk");
      console.log(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("user", JSON.stringify(response.token));
      set({ user: await response.user, isLoading: false, isSuccess: true });
    } catch (error) {
      set({ isLoading: false, isError: true, message: error.message });
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: {} });
  },
}));
