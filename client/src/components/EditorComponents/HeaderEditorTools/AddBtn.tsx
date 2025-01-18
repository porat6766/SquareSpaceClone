import { Plus } from "lucide-react";

const AddBtn = () => {
  return (
    <button className="flex font-bold items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-sm">
      <Plus size={26} />
      <span className="font-medium">ADD ELEMENTS</span>
    </button>
  );
};

export default AddBtn;
