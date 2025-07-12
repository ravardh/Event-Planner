import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../config/api";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileEditModal from "./profileEditModal";

const Profile = () => {
  //const navigate = useNavigate();
  const [userdata, setUserData] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex justify-between bg-gradient-to-r from-pink-600 to-purple-600 p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <button
          className="border border-white hover:scale-105 text-white p-2 rounded-lg font-bold flex gap-2 justify-center items-center hover:bg-pink-600 text-lg"
          onClick={() => setIsEditModalOpen(true)}
        >
          {" "}
          <FaUserEdit className="text-xl" />
          Edit
        </button>
      </div>

      <div className="p-6 flex gap-6 bg-gray-50">
        <div className="flex flex-col gap-6 border border-gray-200 w-2/7 rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="border-4 border-pink-200 w-48 h-48 rounded-full overflow-hidden m-auto shadow-md">
            <img
              src={userdata.photo}
              alt="profilePic"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-gray-700">
            <b className="text-pink-700">Name:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.fullName}</span>
          </div>
          <div className="text-gray-700">
            <b className="text-pink-700">Email:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.email}</span>
          </div>
          <div className="text-gray-700">
            <b className="text-pink-700">Phone:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.phone}</span>
          </div>
        </div>

        <div className="border border-gray-200 p-6 w-5/7 grid gap-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-pink-700 mb-4 border-b border-pink-200 pb-2">
            Additional Information
          </h2>
          <div className="text-gray-700">
            <b className="text-purple-700">Gender:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.gender}</span>
          </div>
          <div className="text-gray-700">
            <b className="text-purple-700">Occupation:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.occupation}</span>
          </div>
          <div className="text-gray-700">
            <b className="text-purple-700">Address:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.address}</span>
          </div>
          <div className="text-gray-700">
            <b className="text-purple-700">City:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.city}</span>
          </div>
          <div className="text-gray-700">
            <b className="text-purple-700">District:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.district}</span>
          </div>
          <div className="text-gray-700">
            <b className="text-purple-700">State:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.state}</span>
          </div>
          <div className="text-gray-700">
            <b className="text-purple-700">Representing:</b>{" "}
            <span className="text-gray-800 ml-2">{userdata.representing}</span>
          </div>
        </div>
      </div>

      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
        }}
        oldData={userdata}
      />
    </>
  );
};

export default Profile;
