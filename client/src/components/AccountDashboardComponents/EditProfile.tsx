import { useEffect, useState } from "react";
import { useUpdateUserMutation, useUserProfile } from "../../hooks/useUser";
import { useQueryClient } from "@tanstack/react-query";

type FormData = {
  profileImage: string;
  firstName: string;
  lastName: string;
  displayName: string;
  website: string;
  bio: string;
  [key: string]: any;
};

const initialFormData: FormData = {
  profileImage: "",
  firstName: "",
  lastName: "",
  displayName: "",
  website: "",
  bio: "",
};

export type InitialUpdateUser = typeof initialFormData;

type EditProfileProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

declare global {
  interface Window {
    cloudinary: any;
  }
}

const EditProfile: React.FC<EditProfileProps> = ({ setIsOpen }) => {
  const [isChange, setIsChange] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const { data: userData } = useUserProfile();
  const { mutate: updateUser } = useUpdateUserMutation();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (userData?.user) {
      console.log(userData);

      setFormData(userData?.user);
    }
  }, [userData]);

  const inputs = [
    { id: "firstName", label: "First name", value: formData.firstName },
    { id: "lastName", label: "Last name", value: formData.lastName },
    {
      id: "displayName",
      label: "Display name",
      value: formData.displayName,
    },
    { id: "website", label: "Website", value: userData?.sites?.[0] || "" },
  ];

  const handleSaveChanges = async () => {
    const updateData: Partial<FormData> = {};

    for (const key in formData) {
      if (formData[key] !== userData?.user[key]) {
        updateData[key] = formData[key];
      }
    }

    if (
      formData.profileImage &&
      formData.profileImage !== userData?.user.profileImage
    ) {
      updateData.profileImage = formData.profileImage;
    }

    if (Object.keys(updateData).length > 0) {
      const id = userData?.user._id;
      updateUser({ updateData, id });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    }

    setIsOpen(false);
    setIsChange(false);
  };

  const handleRemoveChanges = () => {
    setFormData(userData.user);
  };

  const handleOpenWidget = () => {
    setIsOpen(false);

    if (window.cloudinary) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: "dcswpgg7a",
          uploadPreset: "pop102030",
          sources: ["local", "url", "camera"],
          folder: "SquareSpace_Profile_Photo",
          zIndex: 1500,
          container: "#cloudinary-container",
        },
        (
          error: any,
          result: { event: string; info: { secure_url: string } }
        ) => {
          if (error) {
            console.error("Upload error:", error);
            return;
          }

          if (result && result.event === "success") {
            console.log(result.info.secure_url);
            const id = userData?.user?._id;
            const updateData = { profileImage: result.info.secure_url };
            updateUser({ updateData, id });
            queryClient.invalidateQueries({ queryKey: ["userProfile"] });
          }
        }
      );
    } else {
      console.error("Cloudinary script not loaded");
    }
  };

  const handleChangeInput = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = ev.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    const isFieldChanged = inputs.some(
      (input) => input.id === id && userData?.user[id] !== value
    );

    const isBioChanged = id === "bio" && userData?.user.bio !== value;
    console.log(isFieldChanged);
    console.log(isBioChanged);

    if (isBioChanged || isFieldChanged) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  };

  return (
    <div className="overflow-y-auto px-[28px] pb-[20px]">
      <div className=" min-h-[26px]">
        {isChange && (
          <div className="flex justify-between">
            <button
              className="relative group overflow-hidden"
              onClick={handleRemoveChanges}
            >
              <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
                CANCLE
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
            </button>
            <button
              className="relative group overflow-hidden"
              onClick={handleSaveChanges}
            >
              <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
                SAVE
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
            </button>
          </div>
        )}
      </div>
      <h1 className="mb-8 mt-4 font-bold text-2xl">Profile</h1>
      <div className="w-full h-[120px] border border-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center">
        <img
          className="w-[80px] h-[80px] mt-4 aspect-square rounded-full object-cover"
          alt="photo profile"
          src={
            userData?.user?.profileImage}
        />
        <button
          className="relative group overflow-hidden"
          onClick={handleOpenWidget}
        >
          <label className="font-medium text-[10px] cursor-pointer">EDIT</label>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
        </button>
      </div>

      <h3 className="mt-4">Profile info</h3>
      {inputs.map((input) => (
        <div
          key={input.id}
          className="relative group w-full min-w-[285px] mt-2"
        >
          {input.id === "displayName" && (
            <h3 className="mt-4 mb-2">Additional info</h3>
          )}
          <input
            onChange={(ev) => {
              handleChangeInput(ev);
            }}
            type="text"
            id={input.id}
            name={input.id}
            value={formData[input.id] || input.value}
            className="w-full p-1 pl-[40%] border-b-2 border-gray-300 focus:outline-none focus:border-transparent"
          />
          {input.id === "displayName" ? (
            <span className="absolute left-2 top-[48px] transform -translate-y-1/2 font-semibold">
              {input.label}
            </span>
          ) : (
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 font-semibold">
              {input.label}
            </span>
          )}

          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-focus-within:w-full transition-all duration-300"></span>
        </div>
      ))}
      <p className="text-sm text-gray-500 mt-2">
        Additional info is displayed on certain templates.
        <button className="underline">Learn more.</button>
      </p>
      <div className="mt-1">
        <span className="text-xs font-medium">BIO</span>
        <textarea
          id="bio"
          className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.bio || ""}
          onChange={(ev) => {
            handleChangeInput(ev);
          }}
        />
      </div>
    </div>
  );
};

export default EditProfile;
