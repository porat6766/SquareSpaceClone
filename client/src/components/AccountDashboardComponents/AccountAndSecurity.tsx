import { useDeleteUserMutation, useUserProfile } from "../../hooks/useUser";
import toast, { Toaster } from "react-hot-toast";

const AccountAndSecurity = () => {
  const deleteUserMutation = useDeleteUserMutation();
  const { data: userData } = useUserProfile();

  const handleDeleteAccount = () => {
    if (!userData?.user?._id) {
      toast.error("User ID is missing. Unable to delete account.");
      return;
    }

    toast((t: any) => (
      <div>
        <p className="mb-2">Are you sure you want to delete your account?</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              deleteUserMutation.mutate(userData.user._id, {
                onError: () => {
                  toast.dismiss(t.id);
                  toast.error(
                    "Failed to delete account. Please try again later."
                  );
                },
                onSuccess: () => {
                  toast.dismiss(t.id);
                  toast.success("Your account has been deleted!");
                  window.location.href = "/login";
                },
              });
            }}
            className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
          >
            Confirm
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-6 min-h-screen font-sans">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-2xl mx-auto bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">
          Account and Security
        </h1>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            Account ID
          </h2>
          <p className="font-mono text-gray-800">{userData?.user?._id}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
            Login Info
          </h2>
          <ul className="divide-y divide-gray-200">
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-700">Login provider</span>
              <span className="flex items-center text-gray-900">
                Google
                <span className="ml-2 text-gray-400">&rarr;</span>
              </span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-700">Two-factor authentication</span>
              <span className="flex items-center text-gray-500">
                Off
                <span className="ml-2 text-gray-400">&rarr;</span>
              </span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-700">Account recovery</span>
              <span className="flex items-center text-gray-500">
                Off
                <span className="ml-2 text-gray-400">&rarr;</span>
              </span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-700">Login activity</span>
              <span className="flex items-center text-gray-500">
                <span className="ml-2 text-gray-400">&rarr;</span>
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
            Advanced Features
          </h2>
          <ul className="divide-y divide-gray-200">
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-700">App passwords</span>
              <span className="ml-2 text-gray-400">&rarr;</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-gray-700">Connected apps</span>
              <span className="ml-2 text-gray-400">&rarr;</span>
            </li>
          </ul>
        </section>

        <section>
          <ul className="divide-y divide-gray-200">
            <li
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={handleDeleteAccount}
            >
              <span className="text-red-600">Delete account</span>
              <span className="ml-2 text-gray-400">&rarr;</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AccountAndSecurity;
