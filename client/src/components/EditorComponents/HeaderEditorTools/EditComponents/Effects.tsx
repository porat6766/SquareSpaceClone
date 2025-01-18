import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

type EffectsProps = {
  setIsDropShadow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenBorder: React.Dispatch<React.SetStateAction<boolean>>;
};

const Effects: React.FC<EffectsProps> = ({
  setIsDropShadow,
  setIsOpenBorder,
}) => {
  return (
    <div>
      <h3 className="opacity-70 text-sm font-mono mb-2">EFFECTS</h3>
      <div
        className="flex items-center justify-between"
        onClick={() => {
          setIsDropShadow((prev) => !prev);
        }}
      >
        <span>Drop shadow</span>
        <a href="#target-location" className="text-black hover:text-gray-700">
          <ArrowSmallRightIcon className="w-5 h-5 hover:scale-110 transition-transform duration-150" />
        </a>
      </div>
      <hr className="border-black border-1 opacity-30 my-5" />
      <div
        onClick={() => {
          setIsOpenBorder((prev) => !prev);
        }}
        className="flex items-center justify-between"
      >
        <span>Border</span>
        <a href="#target-location" className="text-black hover:text-gray-700">
          <ArrowSmallRightIcon className="w-5 h-5 hover:scale-110 transition-transform duration-150" />
        </a>
      </div>
    </div>
  );
};

export default Effects;
