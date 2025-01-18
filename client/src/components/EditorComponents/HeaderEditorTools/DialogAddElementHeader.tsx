import { Switch } from "../../ui/switch";
import BtnIcon from "../../../assets/button.png";
import SocialLinksIcon from "../../../assets/share.png";
import LanguageIcon from "../../../assets/internet.png";
import AccountIcon from "../../../assets/user.png";
import CartIcon from "../../../assets/shopping-cart.png";
import { Header3Data } from "../../basicEditor3Pro/Header3";

// Define preferences type
// type Preferences = {
//   [key: string]: boolean;
// };

type DialogAddElementHeaderProps = {
  handleToggleElement: (checked: boolean, elementName: string) => void;
  data: Header3Data;
};

export const DialogAddElementHeader: React.FC<DialogAddElementHeaderProps> = ({
  handleToggleElement,
  data,
}) => {
  // const [preferences, setPreferences] = useState<Preferences>({
  //   Account: true, //
  //   "Social Links": true,
  // });

  // const handleToggle = (key: string): void => {
  //   setPreferences((prev) => ({
  //     ...prev,
  //     [key]: !prev[key],
  //   }));
  // };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="top-full mt-2 left-0 w-auto bg-white rounded-lg shadow-lg border border-gray-300 flex flex-col p-10 min-w-[300px]"
      style={{
        transform: "none",
      }}
    >
      <div className="grid gap-4 py-4">
        {/* Element: Button */}
        <div className="flex items-center justify-between py-2 border-b border-gray-200 gap-8 md:gap-[180px]">
          <div className="flex items-center gap-4">
            <img src={BtnIcon} alt="Button" className="w-5 h-5" />
            <label htmlFor="Button" className="font-medium">
              Button
            </label>
          </div>
          <Switch
            id="Button"
            // checked={preferences["Button"] || false}
            defaultChecked={data.hasExtraButton}
            // onCheckedChange={() => handleToggle("Button")}
            onCheckedChange={(checked) =>
              handleToggleElement(checked, "button")
            }
            className={data.hasExtraButton ? "bg-green-400" : ""}
          />
        </div>
        {/* Element: Social Links */}
        <div className="flex items-center justify-between py-2 border-b border-gray-200 gap-8 md:gap-12">
          <div className="flex items-center gap-4">
            <img src={SocialLinksIcon} alt="Social Links" className="w-5 h-5" />
            <label htmlFor="Social Links" className="font-medium">
              Social Links
            </label>
          </div>
          <Switch
            id="Social Links"
            // checked={preferences["Social Links"] || false}
            // onCheckedChange={() => handleToggle("Social Links")}
            defaultChecked={data.hasSocialLinks}
            onCheckedChange={(checked) =>
              handleToggleElement(checked, "social_links")
            }
            className={data.hasSocialLinks ? "bg-green-400" : ""}
          />
        </div>
        {/* Element: Cart */}
        <div className="flex items-center justify-between py-2 border-b border-gray-200 gap-8 md:gap-12">
          <div className="flex items-center gap-4">
            <img src={CartIcon} alt="Cart" className="w-5 h-5" />
            <label htmlFor="Cart" className="font-medium">
              Cart
            </label>
          </div>
          <Switch
            id="Cart"
            // checked={preferences["Cart"] || false}
            // onCheckedChange={() => handleToggle("Cart")}
            className={data.hasCart ? "bg-green-400" : ""}
          />
        </div>
        {/* Element: Account */}
        <div className="flex items-center justify-between py-2 border-b border-gray-200 gap-8 md:gap-12">
          <div className="flex items-center gap-4">
            <img src={AccountIcon} alt="Account" className="w-5 h-5" />
            <label htmlFor="Account" className="font-medium">
              Account
            </label>
          </div>
          <Switch
            id="Account"
            // checked={preferences["Account"] || false}
            // onCheckedChange={() => handleToggle("Account")}
            defaultChecked={data.hasAccount}
            onCheckedChange={(checked) =>
              handleToggleElement(checked, "account")
            }
            className={data.hasAccount ? "bg-green-400" : ""}
          />
        </div>
        {/* Element: Language Switch */}
        <div className="flex items-center justify-between py-2 border-b border-gray-200 gap-8 md:gap-12">
          <div className="flex items-center gap-4">
            <img src={LanguageIcon} alt="Language Switch" className="w-5 h-5" />
            <label htmlFor="Language Switch" className="font-medium">
              Language Switch
            </label>
          </div>
          <Switch
            id="Language Switch"
            // checked={preferences["Language Switch"] || false}
            // onCheckedChange={() => handleToggle("Language Switch")}
            className={data.hasLanguageSwitch ? "bg-green-400" : ""}
          />
        </div>
      </div>
    </div>
  );
};
