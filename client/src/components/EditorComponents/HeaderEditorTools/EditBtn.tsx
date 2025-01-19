import { Pencil } from "lucide-react";

const EditBtn = ({ nameBtn }: any) => {
  return (

    <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-sm">
      <Pencil size={16} />
      <span className="font-medium">{nameBtn}</span>
    </button>
  );
};

export default EditBtn;
