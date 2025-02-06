const fetchFeatherIcons = import.meta.glob("../../assets/feather/*.svg", {
  eager: true,
}) as Record<string, { default: string }>;

const featherIcons: Record<string, string> = Object.fromEntries(
  Object.entries(fetchFeatherIcons).map(([key, module]) => [
    key.split("/").pop()?.replace(".svg", "") ?? "", // Extract filename
    module.default,
  ])
);

console.log(Object.keys(featherIcons));

// console.log("Feather Icons:", featherIcons);

interface IconsProps {
  className?: string;
}

export const Activity = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.activity}
      alt="Activity Icon"
      width="65px"
    />
  );
};
export const Airplay = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.airplay}
      alt="Airplay Icon"
      width="65px"
    />
  );
};
export const Alert_circle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["alert-circle"]}
      alt="Alert_circle Icon"
      width="65px"
    />
  );
};
export const Alert_octagon = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["alert-octagon"]}
      alt="Alert_octagon Icon"
      width="65px"
    />
  );
};
export const Alert_triangle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["alert-triangle"]}
      alt="Alert_triangle Icon"
      width="65px"
    />
  );
};
export const AlignCenter = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["align-center"]}
      alt="Align Center Icon"
      width="65px"
    />
  );
};

export const AlignJustify = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["align-justify"]}
      alt="Align Justify Icon"
      width="65px"
    />
  );
};

export const AlignLeft = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["align-left"]}
      alt="Align Left Icon"
      width="65px"
    />
  );
};

export const AlignRight = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["align-right"]}
      alt="Align Right Icon"
      width="65px"
    />
  );
};

export const Anchor = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.anchor}
      alt="Anchor Icon"
      width="65px"
    />
  );
};

export const Aperture = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.aperture}
      alt="Aperture Icon"
      width="65px"
    />
  );
};

export const Archive = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.archive}
      alt="Archive Icon"
      width="65px"
    />
  );
};

export const ArrowDownCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-down-circle"]}
      alt="Arrow Down Circle Icon"
      width="65px"
    />
  );
};

export const ArrowDownLeft = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-down-left"]}
      alt="Arrow Down Left Icon"
      width="65px"
    />
  );
};

export const ArrowDownRight = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-down-right"]}
      alt="Arrow Down Right Icon"
      width="65px"
    />
  );
};

export const ArrowDown = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-down"]}
      alt="Arrow Down Icon"
      width="65px"
    />
  );
};

export const ArrowLeftCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-left-circle"]}
      alt="Arrow Left Circle Icon"
      width="65px"
    />
  );
};

export const ArrowLeft = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-left"]}
      alt="Arrow Left Icon"
      width="65px"
    />
  );
};

export const ArrowRightCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-right-circle"]}
      alt="Arrow Right Circle Icon"
      width="65px"
    />
  );
};

export const ArrowRight2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-right"]}
      alt="Arrow Right Icon"
      width="65px"
    />
  );
};

export const ArrowUpCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-up-circle"]}
      alt="Arrow Up Circle Icon"
      width="65px"
    />
  );
};

export const ArrowUpLeft = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-up-left"]}
      alt="Arrow Up Left Icon"
      width="65px"
    />
  );
};

export const ArrowUpRight = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-up-right"]}
      alt="Arrow Up Right Icon"
      width="65px"
    />
  );
};

export const ArrowUp = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["arrow-up"]}
      alt="Arrow Up Icon"
      width="65px"
    />
  );
};

export const AtSign = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["at-sign"]}
      alt="At Sign Icon"
      width="65px"
    />
  );
};

export const Award = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.award}
      alt="Award Icon"
      width="65px"
    />
  );
};

export const BarChart2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["bar-chart-2"]}
      alt="Bar Chart 2 Icon"
      width="65px"
    />
  );
};

export const BarChart = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["bar-chart"]}
      alt="Bar Chart Icon"
      width="65px"
    />
  );
};

export const BatteryCharging = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["battery-charging"]}
      alt="Battery Charging Icon"
      width="65px"
    />
  );
};

export const Battery = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.battery}
      alt="Battery Icon"
      width="65px"
    />
  );
};

export const BellOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["bell-off"]}
      alt="Bell Off Icon"
      width="65px"
    />
  );
};

export const Bell2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.bell}
      alt="Bell Icon"
      width="65px"
    />
  );
};

export const Bluetooth = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.bluetooth}
      alt="Bluetooth Icon"
      width="65px"
    />
  );
};

export const Bold = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.bold}
      alt="Bold Icon"
      width="65px"
    />
  );
};

export const BookOpen = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["book-open"]}
      alt="Book Open Icon"
      width="65px"
    />
  );
};

export const Book = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.book}
      alt="Book Icon"
      width="65px"
    />
  );
};

export const Bookmark = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.bookmark}
      alt="Bookmark Icon"
      width="65px"
    />
  );
};

export const Box = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.box}
      alt="Box Icon"
      width="65px"
    />
  );
};

export const Briefcase = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.briefcase}
      alt="Briefcase Icon"
      width="65px"
    />
  );
};

export const Calendar = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.calendar}
      alt="Calendar Icon"
      width="65px"
    />
  );
};

export const CameraOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["camera-off"]}
      alt="Camera Off Icon"
      width="65px"
    />
  );
};

export const Camera = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.camera}
      alt="Camera Icon"
      width="65px"
    />
  );
};

export const Cast = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.cast}
      alt="Cast Icon"
      width="65px"
    />
  );
};

export const CheckCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["check-circle"]}
      alt="Check Circle Icon"
      width="65px"
    />
  );
};

export const CheckSquare = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["check-square"]}
      alt="Check Square Icon"
      width="65px"
    />
  );
};

export const Check = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.check}
      alt="Check Icon"
      width="65px"
    />
  );
};

export const ChevronDown = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["chevron-down"]}
      alt="Chevron Down Icon"
      width="65px"
    />
  );
};

export const ChevronLeft2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["chevron-left"]}
      alt="Chevron Left Icon"
      width="65px"
    />
  );
};

export const ChevronRight2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["chevron-right"]}
      alt="Chevron Right Icon"
      width="65px"
    />
  );
};

export const ChevronUp = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["chevron-up"]}
      alt="Chevron Up Icon"
      width="65px"
    />
  );
};

export const ChevronsDown = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["chevrons-down"]}
      alt="Chevrons Down Icon"
      width="65px"
    />
  );
};

export const ChevronsLeft = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["chevrons-left"]}
      alt="Chevrons Left Icon"
      width="65px"
    />
  );
};

export const ChevronsRight = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["chevrons-right"]}
      alt="Chevrons Right Icon"
      width="65px"
    />
  );
};

export const ChevronsUp = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["chevrons-up"]}
      alt="Chevrons Up Icon"
      width="65px"
    />
  );
};

export const Chrome = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.chrome}
      alt="Chrome Icon"
      width="65px"
    />
  );
};

export const Circle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.circle}
      alt="Circle Icon"
      width="65px"
    />
  );
};

export const Clipboard2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.clipboard}
      alt="Clipboard Icon"
      width="65px"
    />
  );
};

export const Clock = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.clock}
      alt="Clock Icon"
      width="65px"
    />
  );
};

export const CloudDrizzle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["cloud-drizzle"]}
      alt="Cloud Drizzle Icon"
      width="65px"
    />
  );
};

export const CloudLightning = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["cloud-lightning"]}
      alt="Cloud Lightning Icon"
      width="65px"
    />
  );
};

export const CloudOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["cloud-off"]}
      alt="Cloud Off Icon"
      width="65px"
    />
  );
};

export const CloudRain = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["cloud-rain"]}
      alt="Cloud Rain Icon"
      width="65px"
    />
  );
};

export const CloudSnow = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["cloud-snow"]}
      alt="Cloud Snow Icon"
      width="65px"
    />
  );
};

export const Cloud = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.cloud}
      alt="Cloud Icon"
      width="65px"
    />
  );
};

export const Code = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.code}
      alt="Code Icon"
      width="65px"
    />
  );
};

export const Codepen = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.codepen}
      alt="Codepen Icon"
      width="65px"
    />
  );
};

export const Codesandbox = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.codesandbox}
      alt="Codesandbox Icon"
      width="65px"
    />
  );
};

export const Coffee = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.coffee}
      alt="Coffee Icon"
      width="65px"
    />
  );
};

export const Columns = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.columns}
      alt="Columns Icon"
      width="65px"
    />
  );
};

export const Command = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.command}
      alt="Command Icon"
      width="65px"
    />
  );
};

export const Compass = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.compass}
      alt="Compass Icon"
      width="65px"
    />
  );
};

export const Copy = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.copy}
      alt="Copy Icon"
      width="65px"
    />
  );
};

export const CornerDownLeft = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["corner-down-left"]}
      alt="Corner Down Left Icon"
      width="65px"
    />
  );
};

export const CornerDownRight = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["corner-down-right"]}
      alt="Corner Down Right Icon"
      width="65px"
    />
  );
};

export const CornerLeftDown = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["corner-left-down"]}
      alt="Corner Left Down Icon"
      width="65px"
    />
  );
};

export const CornerLeftUp = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["corner-left-up"]}
      alt="Corner Left Up Icon"
      width="65px"
    />
  );
};

export const CornerRightDown = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["corner-right-down"]}
      alt="Corner Right Down Icon"
      width="65px"
    />
  );
};

export const CornerRightUp = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["corner-right-up"]}
      alt="Corner Right Up Icon"
      width="65px"
    />
  );
};

export const CornerUpLeft = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["corner-up-left"]}
      alt="Corner Up Left Icon"
      width="65px"
    />
  );
};

export const CornerUpRight = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["corner-up-right"]}
      alt="Corner Up Right Icon"
      width="65px"
    />
  );
};

export const Cpu = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.cpu}
      alt="CPU Icon"
      width="65px"
    />
  );
};

export const CreditCard = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["credit-card"]}
      alt="Credit Card Icon"
      width="65px"
    />
  );
};

export const Crop = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.crop}
      alt="Crop Icon"
      width="65px"
    />
  );
};

export const Crosshair = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.crosshair}
      alt="Crosshair Icon"
      width="65px"
    />
  );
};

export const Database = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.database}
      alt="Database Icon"
      width="65px"
    />
  );
};

export const Delete = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.delete}
      alt="Delete Icon"
      width="65px"
    />
  );
};

export const Disc = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.disc}
      alt="Disc Icon"
      width="65px"
    />
  );
};

export const DivideCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["divide-circle"]}
      alt="Divide Circle Icon"
      width="65px"
    />
  );
};

export const DivideSquare = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["divide-square"]}
      alt="Divide Square Icon"
      width="65px"
    />
  );
};

export const Divide = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.divide}
      alt="Divide Icon"
      width="65px"
    />
  );
};

export const DollarSign = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["dollar-sign"]}
      alt="Dollar Sign Icon"
      width="65px"
    />
  );
};

export const DownloadCloud = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["download-cloud"]}
      alt="Download Cloud Icon"
      width="65px"
    />
  );
};

export const Download = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.download}
      alt="Download Icon"
      width="65px"
    />
  );
};

export const Dribbble = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.dribbble}
      alt="Dribbble Icon"
      width="65px"
    />
  );
};

export const Droplet = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.droplet}
      alt="Droplet Icon"
      width="65px"
    />
  );
};

export const Edit2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["edit-2"]}
      alt="Edit 2 Icon"
      width="65px"
    />
  );
};

export const Edit3 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["edit-3"]}
      alt="Edit 3 Icon"
      width="65px"
    />
  );
};

export const Edit4 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.edit}
      alt="Edit Icon"
      width="65px"
    />
  );
};

export const ExternalLink2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["external-link"]}
      alt="External Link Icon"
      width="65px"
    />
  );
};

export const EyeOff2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["eye-off"]}
      alt="Eye Off Icon"
      width="65px"
    />
  );
};

export const Eye = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.eye}
      alt="Eye Icon"
      width="65px"
    />
  );
};

export const Facebook2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.facebook}
      alt="Facebook Icon"
      width="65px"
    />
  );
};

export const FastForward = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["fast-forward"]}
      alt="Fast Forward Icon"
      width="65px"
    />
  );
};

export const Feather = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.feather}
      alt="Feather Icon"
      width="65px"
    />
  );
};

export const Figma = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.figma}
      alt="Figma Icon"
      width="65px"
    />
  );
};

export const FileMinus = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["file-minus"]}
      alt="File Minus Icon"
      width="65px"
    />
  );
};

export const FilePlus = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["file-plus"]}
      alt="File Plus Icon"
      width="65px"
    />
  );
};

export const FileText = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["file-text"]}
      alt="File Text Icon"
      width="65px"
    />
  );
};

export const File2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.file}
      alt="File Icon"
      width="65px"
    />
  );
};

export const Film = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.film}
      alt="Film Icon"
      width="65px"
    />
  );
};

export const Filter = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.filter}
      alt="Filter Icon"
      width="65px"
    />
  );
};

export const Flag = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.flag}
      alt="Flag Icon"
      width="65px"
    />
  );
};

export const FolderMinus = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["folder-minus"]}
      alt="Folder Minus Icon"
      width="65px"
    />
  );
};

export const FolderPlus = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["folder-plus"]}
      alt="Folder Plus Icon"
      width="65px"
    />
  );
};

export const Folder = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.folder}
      alt="Folder Icon"
      width="65px"
    />
  );
};

export const Framer = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.framer}
      alt="Framer Icon"
      width="65px"
    />
  );
};

export const Frown = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.frown}
      alt="Frown Icon"
      width="65px"
    />
  );
};

export const Gift = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.gift}
      alt="Gift Icon"
      width="65px"
    />
  );
};

export const GitBranch = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["git-branch"]}
      alt="Git Branch Icon"
      width="65px"
    />
  );
};

export const GitCommit = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["git-commit"]}
      alt="Git Commit Icon"
      width="65px"
    />
  );
};

export const GitMerge = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["git-merge"]}
      alt="Git Merge Icon"
      width="65px"
    />
  );
};

export const GitPullRequest = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["git-pull-request"]}
      alt="Git Pull Request Icon"
      width="65px"
    />
  );
};

export const Github = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.github}
      alt="Github Icon"
      width="65px"
    />
  );
};

export const Gitlab = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.gitlab}
      alt="Gitlab Icon"
      width="65px"
    />
  );
};

export const Globe = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.globe}
      alt="Globe Icon"
      width="65px"
    />
  );
};

export const Grid = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.grid}
      alt="Grid Icon"
      width="65px"
    />
  );
};

export const HardDrive = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["hard-drive"]}
      alt="Hard Drive Icon"
      width="65px"
    />
  );
};

export const Hash = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.hash}
      alt="Hash Icon"
      width="65px"
    />
  );
};

export const Headphones = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.headphones}
      alt="Headphones Icon"
      width="65px"
    />
  );
};

export const Heart3 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.heart}
      alt="Heart Icon"
      width="65px"
    />
  );
};

export const HelpCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["help-circle"]}
      alt="Help Circle Icon"
      width="65px"
    />
  );
};

export const Hexagon = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.hexagon}
      alt="Hexagon Icon"
      width="65px"
    />
  );
};

export const Home2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.home}
      alt="Home Icon"
      width="65px"
    />
  );
};

export const Image2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.image}
      alt="Image Icon"
      width="65px"
    />
  );
};

export const Inbox = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.inbox}
      alt="Inbox Icon"
      width="65px"
    />
  );
};

export const Info = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.info}
      alt="Info Icon"
      width="65px"
    />
  );
};

export const Instagram = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.instagram}
      alt="Instagram Icon"
      width="65px"
    />
  );
};

export const Italic = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.italic}
      alt="Italic Icon"
      width="65px"
    />
  );
};

export const Key = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.key}
      alt="Key Icon"
      width="65px"
    />
  );
};

export const Layers = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.layers}
      alt="Layers Icon"
      width="65px"
    />
  );
};

export const Layout = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.layout}
      alt="Layout Icon"
      width="65px"
    />
  );
};

export const LifeBuoy = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["life-buoy"]}
      alt="Life Buoy Icon"
      width="65px"
    />
  );
};

export const Link2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["link-2"]}
      alt="Link 2 Icon"
      width="65px"
    />
  );
};

export const Link3 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.link}
      alt="Link Icon"
      width="65px"
    />
  );
};

export const Linkedin2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.linkedin}
      alt="Linkedin Icon"
      width="65px"
    />
  );
};

export const List = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.list}
      alt="List Icon"
      width="65px"
    />
  );
};

export const Loader = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.loader}
      alt="Loader Icon"
      width="65px"
    />
  );
};

export const Lock2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.lock}
      alt="Lock Icon"
      width="65px"
    />
  );
};

export const LogIn = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["log-in"]}
      alt="Log In Icon"
      width="65px"
    />
  );
};

export const LogOut2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["log-out"]}
      alt="Log Out Icon"
      width="65px"
    />
  );
};

export const Mail = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.mail}
      alt="Mail Icon"
      width="65px"
    />
  );
};

export const MapPin = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["map-pin"]}
      alt="Map Pin Icon"
      width="65px"
    />
  );
};

export const Map2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.map}
      alt="Map Icon"
      width="65px"
    />
  );
};

export const Maximize2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["maximize-2"]}
      alt="Maximize 2 Icon"
      width="65px"
    />
  );
};

export const Maximize = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.maximize}
      alt="Maximize Icon"
      width="65px"
    />
  );
};

export const Meh = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.meh}
      alt="Meh Icon"
      width="65px"
    />
  );
};

export const Menu = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.menu}
      alt="Menu Icon"
      width="65px"
    />
  );
};

export const MessageCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["message-circle"]}
      alt="Message Circle Icon"
      width="65px"
    />
  );
};

export const MessageSquare = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["message-square"]}
      alt="Message Square Icon"
      width="65px"
    />
  );
};

export const MicOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["mic-off"]}
      alt="Mic Off Icon"
      width="65px"
    />
  );
};

export const Mic = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.mic}
      alt="Mic Icon"
      width="65px"
    />
  );
};

export const Minimize2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["minimize-2"]}
      alt="Minimize 2 Icon"
      width="65px"
    />
  );
};

export const Minimize = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.minimize}
      alt="Minimize Icon"
      width="65px"
    />
  );
};

export const MinusCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["minus-circle"]}
      alt="Minus Circle Icon"
      width="65px"
    />
  );
};

export const MinusSquare = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["minus-square"]}
      alt="Minus Square Icon"
      width="65px"
    />
  );
};

export const Minus = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.minus}
      alt="Minus Icon"
      width="65px"
    />
  );
};

export const Monitor = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.monitor}
      alt="Monitor Icon"
      width="65px"
    />
  );
};

export const Moon3 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.moon}
      alt="Moon Icon"
      width="65px"
    />
  );
};

export const MoreHorizontal = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["more-horizontal"]}
      alt="More Horizontal Icon"
      width="65px"
    />
  );
};

export const MoreVertical2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["more-vertical"]}
      alt="More Vertical Icon"
      width="65px"
    />
  );
};

export const MousePointer = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["mouse-pointer"]}
      alt="Mouse Pointer Icon"
      width="65px"
    />
  );
};

export const Move = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.move}
      alt="Move Icon"
      width="65px"
    />
  );
};

export const Music = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.music}
      alt="Music Icon"
      width="65px"
    />
  );
};

export const Navigation2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["navigation-2"]}
      alt="Navigation 2 Icon"
      width="65px"
    />
  );
};

export const Navigation = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.navigation}
      alt="Navigation Icon"
      width="65px"
    />
  );
};

export const Octagon = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.octagon}
      alt="Octagon Icon"
      width="65px"
    />
  );
};

export const Package = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.package}
      alt="Package Icon"
      width="65px"
    />
  );
};

export const Paperclip = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.paperclip}
      alt="Paperclip Icon"
      width="65px"
    />
  );
};

export const PauseCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["pause-circle"]}
      alt="Pause Circle Icon"
      width="65px"
    />
  );
};

export const Pause = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.pause}
      alt="Pause Icon"
      width="65px"
    />
  );
};

export const PenTool = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["pen-tool"]}
      alt="Pen Tool Icon"
      width="65px"
    />
  );
};

export const Percent = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.percent}
      alt="Percent Icon"
      width="65px"
    />
  );
};

export const PhoneCall = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["phone-call"]}
      alt="Phone Call Icon"
      width="65px"
    />
  );
};

export const PhoneForwarded = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["phone-forwarded"]}
      alt="Phone Forwarded Icon"
      width="65px"
    />
  );
};

export const PhoneIncoming = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["phone-incoming"]}
      alt="Phone Incoming Icon"
      width="65px"
    />
  );
};

export const PhoneMissed = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["phone-missed"]}
      alt="Phone Missed Icon"
      width="65px"
    />
  );
};

export const PhoneOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["phone-off"]}
      alt="Phone Off Icon"
      width="65px"
    />
  );
};

export const PhoneOutgoing = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["phone-outgoing"]}
      alt="Phone Outgoing Icon"
      width="65px"
    />
  );
};

export const Phone = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.phone}
      alt="Phone Icon"
      width="65px"
    />
  );
};

export const PieChart = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["pie-chart"]}
      alt="Pie Chart Icon"
      width="65px"
    />
  );
};

export const PlayCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["play-circle"]}
      alt="Play Circle Icon"
      width="65px"
    />
  );
};

export const Play = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.play}
      alt="Play Icon"
      width="65px"
    />
  );
};

export const PlusCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["plus-circle"]}
      alt="Plus Circle Icon"
      width="65px"
    />
  );
};

export const PlusSquare = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["plus-square"]}
      alt="Plus Square Icon"
      width="65px"
    />
  );
};

export const Plus2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.plus}
      alt="Plus Icon"
      width="65px"
    />
  );
};

export const Pocket = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.pocket}
      alt="Pocket Icon"
      width="65px"
    />
  );
};

export const Power = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.power}
      alt="Power Icon"
      width="65px"
    />
  );
};

export const Printer = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.printer}
      alt="Printer Icon"
      width="65px"
    />
  );
};

export const Radio = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.radio}
      alt="Radio Icon"
      width="65px"
    />
  );
};

export const RefreshCcw = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["refresh-ccw"]}
      alt="Refresh Ccw Icon"
      width="65px"
    />
  );
};

export const RefreshCw = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["refresh-cw"]}
      alt="Refresh Cw Icon"
      width="65px"
    />
  );
};

export const Repeat = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.repeat}
      alt="Repeat Icon"
      width="65px"
    />
  );
};

export const Rewind = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.rewind}
      alt="Rewind Icon"
      width="65px"
    />
  );
};

export const RotateCcw = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["rotate-ccw"]}
      alt="Rotate Ccw Icon"
      width="65px"
    />
  );
};

export const RotateCw = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["rotate-cw"]}
      alt="Rotate Cw Icon"
      width="65px"
    />
  );
};

export const Rss = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.rss}
      alt="Rss Icon"
      width="65px"
    />
  );
};

export const Save = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.save}
      alt="Save Icon"
      width="65px"
    />
  );
};

export const Scissors = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.scissors}
      alt="Scissors Icon"
      width="65px"
    />
  );
};

export const Search2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.search}
      alt="Search Icon"
      width="65px"
    />
  );
};

export const Send = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.send}
      alt="Send Icon"
      width="65px"
    />
  );
};

export const Server = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.server}
      alt="Server Icon"
      width="65px"
    />
  );
};

export const Settings3 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.settings}
      alt="Settings Icon"
      width="65px"
    />
  );
};

export const Share3 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["share-2"]}
      alt="Share 2 Icon"
      width="65px"
    />
  );
};

export const Share4 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.share}
      alt="Share Icon"
      width="65px"
    />
  );
};

export const ShieldOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["shield-off"]}
      alt="Shield Off Icon"
      width="65px"
    />
  );
};

export const Shield = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.shield}
      alt="Shield Icon"
      width="65px"
    />
  );
};

export const ShoppingBag = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["shopping-bag"]}
      alt="Shopping Bag Icon"
      width="65px"
    />
  );
};

export const ShoppingCart = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["shopping-cart"]}
      alt="Shopping Cart Icon"
      width="65px"
    />
  );
};

export const Shuffle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.shuffle}
      alt="Shuffle Icon"
      width="65px"
    />
  );
};

export const Sidebar = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.sidebar}
      alt="Sidebar Icon"
      width="65px"
    />
  );
};

export const SkipBack = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["skip-back"]}
      alt="Skip Back Icon"
      width="65px"
    />
  );
};

export const SkipForward = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["skip-forward"]}
      alt="Skip Forward Icon"
      width="65px"
    />
  );
};

export const Slack = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.slack}
      alt="Slack Icon"
      width="65px"
    />
  );
};

export const Slash = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.slash}
      alt="Slash Icon"
      width="65px"
    />
  );
};

export const Sliders = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.sliders}
      alt="Sliders Icon"
      width="65px"
    />
  );
};

export const Smartphone = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.smartphone}
      alt="Smartphone Icon"
      width="65px"
    />
  );
};

export const Smile = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.smile}
      alt="Smile Icon"
      width="65px"
    />
  );
};

export const Speaker = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.speaker}
      alt="Speaker Icon"
      width="65px"
    />
  );
};

export const Square = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.square}
      alt="Square Icon"
      width="65px"
    />
  );
};

export const Star = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.star}
      alt="Star Icon"
      width="65px"
    />
  );
};

export const StopCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["stop-circle"]}
      alt="Stop Circle Icon"
      width="65px"
    />
  );
};

export const Sun = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.sun}
      alt="Sun Icon"
      width="65px"
    />
  );
};

export const Sunrise = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.sunrise}
      alt="Sunrise Icon"
      width="65px"
    />
  );
};

export const Sunset = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.sunset}
      alt="Sunset Icon"
      width="65px"
    />
  );
};

export const Table = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.table}
      alt="Table Icon"
      width="65px"
    />
  );
};

export const Tablet = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.tablet}
      alt="Tablet Icon"
      width="65px"
    />
  );
};

export const Tag = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.tag}
      alt="Tag Icon"
      width="65px"
    />
  );
};

export const Target = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.target}
      alt="Target Icon"
      width="65px"
    />
  );
};

export const Terminal = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.terminal}
      alt="Terminal Icon"
      width="65px"
    />
  );
};

export const Thermometer = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.thermometer}
      alt="Thermometer Icon"
      width="65px"
    />
  );
};

export const ThumbsDown = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["thumbs-down"]}
      alt="Thumbs Down Icon"
      width="65px"
    />
  );
};

export const ThumbsUp = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["thumbs-up"]}
      alt="Thumbs Up Icon"
      width="65px"
    />
  );
};

export const ToggleLeft = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["toggle-left"]}
      alt="Toggle Left Icon"
      width="65px"
    />
  );
};

export const ToggleRight = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["toggle-right"]}
      alt="Toggle Right Icon"
      width="65px"
    />
  );
};

export const Tool = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.tool}
      alt="Tool Icon"
      width="65px"
    />
  );
};

export const Trash2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["trash-2"]}
      alt="Trash 2 Icon"
      width="65px"
    />
  );
};

export const Trash = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.trash}
      alt="Trash Icon"
      width="65px"
    />
  );
};

export const Trello = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.trello}
      alt="Trello Icon"
      width="65px"
    />
  );
};

export const TrendingDown = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["trending-down"]}
      alt="Trending Down Icon"
      width="65px"
    />
  );
};

export const TrendingUp = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["trending-up"]}
      alt="Trending Up Icon"
      width="65px"
    />
  );
};

export const Triangle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.triangle}
      alt="Triangle Icon"
      width="65px"
    />
  );
};

export const Truck = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.truck}
      alt="Truck Icon"
      width="65px"
    />
  );
};

export const Tv = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.tv}
      alt="TV Icon"
      width="65px"
    />
  );
};

export const Twitch = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.twitch}
      alt="Twitch Icon"
      width="65px"
    />
  );
};

export const Twitter = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.twitter}
      alt="Twitter Icon"
      width="65px"
    />
  );
};

export const Type = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.type}
      alt="Type Icon"
      width="65px"
    />
  );
};

export const Umbrella = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.umbrella}
      alt="Umbrella Icon"
      width="65px"
    />
  );
};

export const Underline = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.underline}
      alt="Underline Icon"
      width="65px"
    />
  );
};

export const Unlock2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.unlock}
      alt="Unlock Icon"
      width="65px"
    />
  );
};

export const UploadCloud = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["upload-cloud"]}
      alt="Upload Cloud Icon"
      width="65px"
    />
  );
};

export const Upload = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.upload}
      alt="Upload Icon"
      width="65px"
    />
  );
};

export const UserCheck = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["user-check"]}
      alt="User Check Icon"
      width="65px"
    />
  );
};

export const UserMinus = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["user-minus"]}
      alt="User Minus Icon"
      width="65px"
    />
  );
};

export const UserPlus = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["user-plus"]}
      alt="User Plus Icon"
      width="65px"
    />
  );
};

export const UserX = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["user-x"]}
      alt="User X Icon"
      width="65px"
    />
  );
};

export const User2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.user}
      alt="User Icon"
      width="65px"
    />
  );
};

export const Users = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.users}
      alt="Users Icon"
      width="65px"
    />
  );
};

export const VideoOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["video-off"]}
      alt="Video Off Icon"
      width="65px"
    />
  );
};

export const Video = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.video}
      alt="Video Icon"
      width="65px"
    />
  );
};

export const Voicemail = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.voicemail}
      alt="Voicemail Icon"
      width="65px"
    />
  );
};

export const Volume1 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["volume-1"]}
      alt="Volume 1 Icon"
      width="65px"
    />
  );
};

export const Volume2 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["volume-2"]}
      alt="Volume 2 Icon"
      width="65px"
    />
  );
};

export const VolumeX = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["volume-x"]}
      alt="Volume X Icon"
      width="65px"
    />
  );
};

export const Volume3 = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.volume}
      alt="Volume Icon"
      width="65px"
    />
  );
};

export const Watch = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.watch}
      alt="Watch Icon"
      width="65px"
    />
  );
};

export const WifiOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["wifi-off"]}
      alt="WiFi Off Icon"
      width="65px"
    />
  );
};

export const Wifi = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.wifi}
      alt="WiFi Icon"
      width="65px"
    />
  );
};

export const Wind = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.wind}
      alt="Wind Icon"
      width="65px"
    />
  );
};

export const XCircle = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["x-circle"]}
      alt="X Circle Icon"
      width="65px"
    />
  );
};

export const XOctagon = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["x-octagon"]}
      alt="X Octagon Icon"
      width="65px"
    />
  );
};

export const XSquare = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["x-square"]}
      alt="X Square Icon"
      width="65px"
    />
  );
};

export const X3 = ({ className }: IconsProps) => {
  return (
    <img className={className} src={featherIcons.x} alt="X Icon" width="65px" />
  );
};

export const Youtube = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.youtube}
      alt="YouTube Icon"
      width="65px"
    />
  );
};

export const ZapOff = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["zap-off"]}
      alt="Zap Off Icon"
      width="65px"
    />
  );
};

export const Zap = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons.zap}
      alt="Zap Icon"
      width="65px"
    />
  );
};

export const ZoomIn = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["zoom-in"]}
      alt="Zoom In Icon"
      width="65px"
    />
  );
};

export const ZoomOut = ({ className }: IconsProps) => {
  return (
    <img
      className={className}
      src={featherIcons["zoom-out"]}
      alt="Zoom Out Icon"
      width="65px"
    />
  );
};
