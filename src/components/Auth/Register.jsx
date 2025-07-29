import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [formdata, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "avatar") setAvatar(files[0]);
    else if (name === "coverImg") setCoverImg(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const submitData = new FormData();
    submitData.append("fullname", formdata.fullname);
    submitData.append("username", formdata.username);
    submitData.append("email", formdata.email);
    submitData.append("password", formdata.password);
    if (avatar) submitData.append("avatar", avatar);
    if (coverImg) submitData.append("coverImg", coverImg);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        submitData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Register success:", res.data);

      toast.success(" ✅ Registration successful!")

      setFormData({
      fullname:"",
      username:"",
      email:"",
      password:"", 
     })
     setAvatar(null);
     setCoverImg(null);

    } catch (error) {
      console.error("❌ Register failed:", error.response?.data || error.message);

      toast.error(`Registration failed`)
    }finally{
      setLoading(false);
    }
     
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-400 px-6">
      <div className="w-full max-w-xl bg-white p-10 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center italic text-emerald-500 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formdata.fullname}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-400 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formdata.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full border border-gray-400 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-400 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-400 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Avatar (optional)</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-3 py-1"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Cover Image (optional)</label>
            <input
              type="file"
              name="coverImg"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-3 py-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button> 
        </form>
         
        <p className="text-sm text-center font-semibold mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-700 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
