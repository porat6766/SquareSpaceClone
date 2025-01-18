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
            userData?.user?.profileImage ||
            "data:image/png;base64,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"
          }
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
