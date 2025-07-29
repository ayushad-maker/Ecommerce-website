// src/services/authService.js
import axiosInstance from "../api/axiosInstance";

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      email,
      password,
    });

    console.log("🔐 API Response:", response.data); // ✅ log this

    const { accessToken, user } = response.data.data;

    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};
