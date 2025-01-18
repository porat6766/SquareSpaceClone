import { Switch } from "../../../ui/switch";

const FixedPosition = ({ isFixed, handleToggle }: any) => {
  return (
    <div className="flex justify-between ">
      <span>Fixed position</span>
      <Switch
        id="fixed-position-switch"
        checked={isFixed}
        onCheckedChange={handleToggle}
        className={isFixed ? "bg-green-400" : "bg-gray-300"}
      />
    </div>
  );
};

export default FixedPosition;
