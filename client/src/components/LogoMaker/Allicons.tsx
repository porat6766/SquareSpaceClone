import React from "react";
// // // // // // // // // icons importing from components
import { LucideIcon, LucideProps } from "lucide-react";
// // // // // react
import {
  MoonIcon2,
  ShareIcon2,
  SunMediumIcon,
  ExternalLinkIcon,
  BookmarkIconComponent,
  LinkIcon,
  FacebookIcon,
  LinkedinIcon,
  MoreVerticalIcon,
  EyeOffIcon,
  BanIcon,
  FlagIconComponent,
  ChevronLeftIconComponent,
  ChevronRightIconComponent,
  FlameIcon,
  Xclose,
  ArrowBigUpIcon,
  MessagesSquareIcon,
  SearchIcon,
  BellIcon,
  HistoryIcon,
  UserIcon,
  SettingsIcon,
  DoorOpenIcon,
  BookOpenCheckIcon,
  ChevronLeftIconComponent2,
  ChevronRightIconComponent2,
  Settings2Icon,
  NewspaperIcon,
  Loader2IconComponent,
  CheckCircle2Icon,
  PencilIcon,
  HomeIcon,
  LogOutIcon,
} from "./ReactIcons";
// // // // // shadcn
import {
  ArrowRight,
  BookingLogo,
  BookingTripsIcon,
  CardXIcon,
  Discount,
  EmptyCalendarImg,
  FacebookWhiteIcon,
  IconApple,
  IconError,
  IconFacebook,
  IconGoogle,
  IconGuest,
  IconHamburger,
  IconHeart,
  IconPlusMinus,
  Information,
  LocationIcon,
  MyAccountIcon,
  SmallUpDown,
  Stars,
  UpDown,
  UpDownHeads,
  Vi,
  ViIcon,
  Xicon,
  XIcon,
  ShareIcon,
  Unlock,
  Copy,
  Heart,
  LockIcon,
  Bag,
  CommentIcon,
  Email,
  Hands,
  IconCounterMinus,
  IconCounterPlus,
  IconMen,
  Note,
  Question,
  Safety,
  ViBorder,
  XregularIcon,
  YellowCube,
  YellowVi,
  Coins,
  Command,
  HousePlus,
  Volume,
  BlackMen,
  Bottle,
  CheckIn,
  CheckOut,
  Cigar,
  CofeeCup,
  Groups,
  Payment,
  Person,
  Persons,
  Pet,
  QuestionMarkInfoIcon,
  SmallIconVi,
  Tower,
  MoonIcon,
  Plus,
  AgodaIcon,
  BeachIcon,
  BookingLogoBlue,
  CityIcon,
  CribIcon,
  DownIcon,
  FiltersIcon,
  GeniusLoyaltyIcon,
  KayakIcon,
  OpenTableIcon,
  OutdoorsIcon,
  PricelineIcon,
  ReviewsIcon,
  RewardsWalletIcon,
  SavedIcon,
  SignoutIcon,
  UpIcon,
  DeleteIcon,
  EditIcon,
  MapIcon,
} from "./CNIcons";
// // // // // feather
import {
  Activity,
  Airplay,
  Alert_circle,
  Alert_octagon,
  Alert_triangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Anchor,
  Aperture,
  Archive,
  ArrowDown,
  ArrowDownCircle,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight2,
  ArrowRightCircle,
  ArrowUp,
  ArrowUpCircle,
  ArrowUpLeft,
  ArrowUpRight,
  AtSign,
  Award,
  BarChart,
  BarChart2,
  Battery,
  BatteryCharging,
  Bell2,
  BellOff,
  Bluetooth,
  Bold,
  Book,
  Bookmark,
  BookOpen,
  Box,
  Briefcase,
  Calendar,
  Camera,
  CameraOff,
  Cast,
  Check,
  CheckCircle,
  CheckSquare,
  ChevronDown,
  ChevronLeft2,
  ChevronRight2,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  ChevronUp,
  Chrome,
  Circle,
  Clipboard2,
  Clock,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Columns,
  Compass,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crop,
  Crosshair,
  Database,
  Delete,
  Disc,
  Divide,
  DivideCircle,
  DivideSquare,
  DollarSign,
  Download,
  DownloadCloud,
  Dribbble,
  Droplet,
  Edit2,
  Edit3,
  Edit4,
  ExternalLink2,
  Eye,
  EyeOff2,
  Facebook2,
  FastForward,
  Feather,
  Figma,
  File2,
  FileMinus,
  FilePlus,
  FileText,
  Film,
  Filter,
  Flag,
  Folder,
  FolderMinus,
  FolderPlus,
  Framer,
  Frown,
  Gift,
  GitBranch,
  GitCommit,
  Github,
  Gitlab,
  GitMerge,
  GitPullRequest,
  Globe,
  Grid,
  HardDrive,
  Hash,
  Headphones,
  Heart3,
  HelpCircle,
  Hexagon,
  Home2,
  Image2,
  Inbox,
  Info,
  Instagram,
  Italic,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link2,
  Link3,
  Linkedin2,
  List,
  Loader,
  Lock2,
  LogIn,
  LogOut2,
  Mail,
  Map2,
  MapPin,
  Maximize,
  Maximize2,
  Meh,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  MinusSquare,
  Monitor,
  Moon3,
  MoreHorizontal,
  MoreVertical2,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Octagon,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  PenTool,
  Percent,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus2,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCcw,
  RefreshCw,
  Repeat,
  Rewind,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search2,
  Send,
  Server,
  Settings3,
  Share3,
  Share4,
  Shield,
  ShieldOff,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slack,
  Slash,
  Sliders,
  Smartphone,
  Smile,
  Speaker,
  Square,
  Star,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Table,
  Tablet,
  Tag,
  Target,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash,
  Trash2,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  Truck,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Unlock2,
  Upload,
  UploadCloud,
  User2,
  UserCheck,
  UserMinus,
  UserPlus,
  Users,
  UserX,
  Video,
  VideoOff,
  Voicemail,
  Volume1,
  Volume2,
  Volume3,
  VolumeX,
  Watch,
  Wifi,
  WifiOff,
  Wind,
  X2,
  X3,
  XCircle,
  XOctagon,
  XSquare,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut,
} from "./FeatherIcons";
// // // // // font awesome
import {
  Ad,
  Add,
  AddressBook,
  AddressCard,
  Adjust,
  AirFreshener,
  AlignCenter2,
  AlignJustify2,
  AlignLeft2,
  AlignRight2,
  Allergies,
  Ambulance,
  AmericanSignLanguageInterpreting,
  Anchor2,
  AnchorCircleCheck,
  AnchorCircleExclamation,
  AnchorCircleXmark,
  AnchorLock,
  AngleDoubleDown,
  AngleDoubleLeft,
  AngleDoubleRight,
  AngleDoubleUp,
  AngleDown,
  AngleLeft,
  AngleRight,
  AnglesDown,
  AnglesLeft,
  AnglesRight,
  AnglesUp,
  AngleUp,
  Angry,
  Ankh,
  AppleAlt,
  AppleWhole,
  Archive2,
  Archway,
  AreaChart,
  ArrowAltCircleDown,
  ArrowAltCircleLeft,
  ArrowAltCircleRight,
  ArrowAltCircleUp,
  ArrowRightArrowLeft,
  ArrowRightFromBracket,
  ArrowRightFromFile,
  ArrowRightLong,
  ArrowRightRotate,
  ArrowRightToBracket,
  ArrowRightToCity,
  ArrowRightToFile,
  ArrowRotateBack,
  ArrowRotateBackward,
  ArrowRotateForward,
  ArrowRotateLeft,
  ArrowRotateRight,
  Arrows,
  ArrowsAlt,
  ArrowsAltH,
  ArrowsAltV,
  ArrowsDownToLine,
  ArrowsDownToPeople,
  ArrowsLeftRight,
  ArrowsRotate,
  ArrowsUpDown,
  ArrowTrendDown,
  ArrowTrendUp,
  ArrowTurnDown,
  ArrowTurnUp,
  ArrowUp19,
  ArrowUp91,
  ArrowUpAZ,
  ArrowUpFromBracket,
  ArrowUpFromGroundWater,
  ArrowUpFromWaterPump,
  ArrowUpLong,
  ArrowUpRightDots,
  ArrowUpRightFromSquare,
  ArrowUpShortWide,
  ArrowUpWideShort,
  ArrowUpZA,
  AslInterpreting,
  AssistiveListeningSystems,
  Asterisk,
  At,
  Atlas,
  Atom,
  AudioDescription,
  AustralSign,
  Automobile,
  Award2,
  Baby,
  Bletter,
  Compass2,
} from "./FontAwesome";
// // /// // // / // // / /// // // / // / // // // // // // // // / // // // // // / // // / / // // //
export type Icon = LucideIcon;

// // // props
interface IconsProps {
  className?: string;
}
// // // // // // // // icons map for search render // // // // // // // //
export const IconsMap: Record<string, React.FC<IconsProps>> = {
  moon: MoonIcon2,
  share: ShareIcon2,
  sun: SunMediumIcon,
  home: HomeIcon,
  logout: LogOutIcon,
  readMoreLink: ExternalLinkIcon,
  bookmark: BookmarkIconComponent,
  copyLink: LinkIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  moreVertical: MoreVerticalIcon,
  hideEye: EyeOffIcon,
  blockBan: BanIcon,
  flag: FlagIconComponent,
  left: ChevronLeftIconComponent,
  right: ChevronRightIconComponent,
  fireFlame: FlameIcon,
  arrowBigUp: ArrowBigUpIcon,
  messagesSquare: MessagesSquareIcon,
  search: SearchIcon,
  notificationBell: BellIcon,
  history: HistoryIcon,
  user: UserIcon,
  Xclose: Xclose,
  settings: SettingsIcon,
  dooropen: DoorOpenIcon,
  readBookOpenCheck: BookOpenCheckIcon,
  chevronLeft: ChevronLeftIconComponent2,
  chevronRight: ChevronRightIconComponent2,
  articlesSettings: Settings2Icon,
  newspaper: NewspaperIcon,
  loading: Loader2IconComponent,
  checkCircle: CheckCircle2Icon,
  editPencil: PencilIcon,
  //   // // // // // // // // //  shadcn
  booking: BookingLogo,
  Calendar: EmptyCalendarImg,
  heart: IconHeart,
  cardX: CardXIcon,
  plusminus: IconPlusMinus,
  stars: Stars,
  info: Information,
  vi: Vi,
  UpDown: UpDown,
  UpDownHeads: UpDownHeads,
  X: XIcon,
  Vi: ViIcon,
  SmallUpDown: SmallUpDown,
  google: IconGoogle,
  apple: IconApple,
  facebook2: IconFacebook,
  error: IconError,
  guest: IconGuest,
  hamburger: IconHamburger,
  location: LocationIcon,
  Heart: Heart,
  Share2: ShareIcon,
  Discount: Discount,
  Copy: Copy,
  FacebookWhite: FacebookWhiteIcon,
  X2: Xicon,
  Unlock: Unlock,
  Lock: LockIcon,
  Xregular: XregularIcon,
  HousePlus: HousePlus,
  Note: Note,
  ViBorder: ViBorder,
  Hands: Hands,
  Safety: Safety,
  comment: CommentIcon,
  Bag: Bag,
  Question: Question,
  Email: Email,
  Volume: Volume,
  Coins: Coins,
  men: IconMen,
  CounterPlus: IconCounterPlus,
  CounterMinus: IconCounterMinus,
  YellowVi: YellowVi,
  YellowCube: YellowCube,
  command: Command,
  ArrowRight: ArrowRight,
  Plus: Plus,
  SmallVi: SmallIconVi,
  BlackMen: BlackMen,
  CofeeCup: CofeeCup,
  QuestionMarkInfo: QuestionMarkInfoIcon,
  CheckIn: CheckIn,
  CheckOut: CheckOut,
  Persons: Persons,
  Person: Person,
  Groups: Groups,
  Payment: Payment,
  Cigar: Cigar,
  Bottle: Bottle,
  Moon2: MoonIcon,
  Pet: Pet,
  Tower: Tower,
  Edit: EditIcon,
  Delete: DeleteIcon,
  Filters: FiltersIcon,
  Map: MapIcon,
  Up: UpIcon,
  Down: DownIcon,
  BookingLogoBlue: BookingLogoBlue,
  Crib: CribIcon,
  OpenTable: OpenTableIcon,
  Agoda: AgodaIcon,
  Priceline: PricelineIcon,
  Kayak: KayakIcon,
  account: MyAccountIcon,
  bookingTrips: BookingTripsIcon,
  RewardsWallet: RewardsWalletIcon,
  Reviews: ReviewsIcon,
  Saved: SavedIcon,
  Signout: SignoutIcon,
  Beach: BeachIcon,
  Outdoors: OutdoorsIcon,
  City: CityIcon,
  GeniusLoyalty: GeniusLoyaltyIcon,
  //   // // // // // // // // // feather
  Activity: Activity,
  Airplay: Airplay,
  Alert_circle: Alert_circle,
  Alert_octagon: Alert_octagon,
  Alert_triangle: Alert_triangle,
  Align_center: AlignCenter,
  Align_justify: AlignJustify,
  Align_left: AlignLeft,
  Align_right: AlignRight,
  Anchor: Anchor,
  Aperture: Aperture,
  Archive: Archive,
  Arrow_down_circle: ArrowDownCircle,
  Arrow_down_left: ArrowDownLeft,
  Arrow_down_right: ArrowDownRight,
  Arrow_down: ArrowDown,
  Arrow_left_circle: ArrowLeftCircle,
  Arrow_left: ArrowLeft,
  Arrow_right_circle: ArrowRightCircle,
  Arrow_right: ArrowRight2,
  Arrow_up_circle: ArrowUpCircle,
  Arrow_up_left: ArrowUpLeft,
  Arrow_up_right: ArrowUpRight,
  Arrow_up: ArrowUp,
  At_sign: AtSign,
  AwardMedalWin: Award,
  Bar_chart_2: BarChart2,
  Bar_chart: BarChart,
  Battery_charging: BatteryCharging,
  Battery: Battery,
  Bell_off: BellOff,
  Bell: Bell2,
  Bluetooth: Bluetooth,
  Bold: Bold,
  Book_open: BookOpen,
  Book: Book,
  Bookmark: Bookmark,
  Box: Box,
  Briefcase: Briefcase,
  Calendar2: Calendar,
  Camera_off: CameraOff,
  Camera: Camera,
  Cast: Cast,
  Check_circle: CheckCircle,
  Check_square: CheckSquare,
  Check: Check,
  Chevron_down: ChevronDown,
  Chevron_left: ChevronLeft2,
  Chevron_right: ChevronRight2,
  Chevron_up: ChevronUp,
  Chevrons_down: ChevronsDown,
  Chevrons_left: ChevronsLeft,
  Chevrons_right: ChevronsRight,
  Chevrons_up: ChevronsUp,
  Chrome: Chrome,
  Circle: Circle,
  clipboard: Clipboard2,
  Clock: Clock,
  Cloud_drizzle: CloudDrizzle,
  Cloud_lightning: CloudLightning,
  Cloud_off: CloudOff,
  Cloud_rain: CloudRain,
  Cloud_snow: CloudSnow,
  Cloud: Cloud,
  Code: Code,
  Codepen: Codepen,
  Codesandbox: Codesandbox,
  Coffee: Coffee,
  Columns: Columns,
  Command: Command,
  Compass: Compass,
  Copy2: Copy,
  Corner_down_left: CornerDownLeft,
  Corner_down_right: CornerDownRight,
  Corner_left_down: CornerLeftDown,
  Corner_left_up: CornerLeftUp,
  Corner_right_down: CornerRightDown,
  Corner_right_up: CornerRightUp,
  Corner_up_left: CornerUpLeft,
  Corner_up_right: CornerUpRight,
  Cpu: Cpu,
  Credit_card: CreditCard,
  Crop: Crop,
  Crosshair: Crosshair,
  Database: Database,
  Delete2: Delete,
  Disc: Disc,
  Divide_circle: DivideCircle,
  Divide_square: DivideSquare,
  Divide: Divide,
  Dollar_sign: DollarSign,
  Download_cloud: DownloadCloud,
  Download: Download,
  Dribbble: Dribbble,
  Droplet: Droplet,
  Edit_2: Edit2,
  Edit_3: Edit3,
  Edit_4: Edit4,
  External_link: ExternalLink2,
  Eye_off: EyeOff2,
  Eye: Eye,
  Facebook: Facebook2,
  FastForward: FastForward,
  Feather: Feather,
  Figma: Figma,
  FileMinus: FileMinus,
  FilePlus: FilePlus,
  FileText: FileText,
  File: File2,
  Film: Film,
  Filter: Filter,
  Flag: Flag,
  FolderMinus: FolderMinus,
  FolderPlus: FolderPlus,
  Folder: Folder,
  Framer: Framer,
  sadFrown: Frown,
  Gift: Gift,
  GitBranch: GitBranch,
  GitCommit: GitCommit,
  GitMerge: GitMerge,
  GitPullRequest: GitPullRequest,
  Github: Github,
  Gitlab: Gitlab,
  Globe: Globe,
  Grid: Grid,
  HardDrive: HardDrive,
  Hash: Hash,
  Headphones: Headphones,
  Heart3: Heart3,
  HelpCircle: HelpCircle,
  Hexagon: Hexagon,
  Home2: Home2,
  Image2: Image2,
  Inbox: Inbox,
  Info: Info,
  Instagram: Instagram,
  Italic: Italic,
  Key: Key,
  Layers: Layers,
  Layout: Layout,
  LifeBuoy: LifeBuoy,
  Link2: Link2,
  Link3: Link3,
  Linkedin2: Linkedin2,
  List: List,
  Loader: Loader,
  Lock2: Lock2,
  LogIn: LogIn,
  LogOut2: LogOut2,
  Mail: Mail,
  MapPin: MapPin,
  Map2: Map2,
  Maximize2: Maximize2,
  Maximize: Maximize,
  docileNeutral: Meh,
  Menu: Menu,
  MessageCircle: MessageCircle,
  MessageSquare: MessageSquare,
  MicOff: MicOff,
  Mic: Mic,
  Minimize2: Minimize2,
  Minimize: Minimize,
  MinusCircle: MinusCircle,
  MinusSquare: MinusSquare,
  Minus: Minus,
  Monitor: Monitor,
  Moon3: Moon3,
  MoreHorizontal: MoreHorizontal,
  MoreVertical2: MoreVertical2,
  MousePointer: MousePointer,
  Move: Move,
  Music: Music,
  Navigation2: Navigation2,
  Navigation: Navigation,
  Octagon: Octagon,
  Package: Package,
  Paperclip: Paperclip,
  PauseCircle: PauseCircle,
  Pause: Pause,
  PenTool: PenTool,
  Percent: Percent,
  PhoneCall: PhoneCall,
  PhoneForwarded: PhoneForwarded,
  PhoneIncoming: PhoneIncoming,
  PhoneMissed: PhoneMissed,
  PhoneOff: PhoneOff,
  PhoneOutgoing: PhoneOutgoing,
  Phone: Phone,
  PieChart: PieChart,
  PlayCircle: PlayCircle,
  Play: Play,
  PlusCircle: PlusCircle,
  PlusSquare: PlusSquare,
  Plus2: Plus2,
  Pocket: Pocket,
  Power: Power,
  Printer: Printer,
  Radio: Radio,
  RefreshCcw: RefreshCcw,
  RefreshCw: RefreshCw,
  Repeat: Repeat,
  Rewind: Rewind,
  RotateCcw: RotateCcw,
  RotateCw: RotateCw,
  Rss: Rss,
  Save: Save,
  Scissors: Scissors,
  Search2: Search2,
  Send: Send,
  Server: Server,
  Settings3: Settings3,
  Share3: Share3,
  Share4: Share4,
  ShieldOff: ShieldOff,
  Shield: Shield,
  ShoppingBag: ShoppingBag,
  ShoppingCart: ShoppingCart,
  Shuffle: Shuffle,
  Sidebar: Sidebar,
  SkipBack: SkipBack,
  SkipForward: SkipForward,
  Slack: Slack,
  Slash: Slash,
  Sliders: Sliders,
  Smartphone: Smartphone,
  Smile: Smile,
  Speaker: Speaker,
  Square: Square,
  Star: Star,
  StopCircle: StopCircle,
  Sun: Sun,
  Sunrise: Sunrise,
  Sunset: Sunset,
  Table: Table,
  Tablet: Tablet,
  Tag: Tag,
  Target: Target,
  Terminal: Terminal,
  Thermometer: Thermometer,
  ThumbsDown: ThumbsDown,
  ThumbsUp: ThumbsUp,
  ToggleLeft: ToggleLeft,
  ToggleRight: ToggleRight,
  Tool: Tool,
  Trash2: Trash2,
  Trash: Trash,
  Trello: Trello,
  TrendingDown: TrendingDown,
  TrendingUp: TrendingUp,
  Triangle: Triangle,
  Truck: Truck,
  Tv: Tv,
  Twitch: Twitch,
  Twitter: Twitter,
  Type: Type,
  Umbrella: Umbrella,
  Underline: Underline,
  Unlock2: Unlock2,
  UploadCloud: UploadCloud,
  Upload: Upload,
  UserCheck: UserCheck,
  UserMinus: UserMinus,
  UserPlus: UserPlus,
  UserX: UserX,
  User2: User2,
  Users: Users,
  VideoOff: VideoOff,
  Video: Video,
  Voicemail: Voicemail,
  Volume1: Volume1,
  Volume2: Volume2,
  VolumeX: VolumeX,
  Volume3: Volume3,
  Watch: Watch,
  WifiOff: WifiOff,
  Wifi: Wifi,
  Wind: Wind,
  XCircle: XCircle,
  XOctagon: XOctagon,
  XSquare: XSquare,
  X3: X3,
  Youtube: Youtube,
  ZapOff: ZapOff,
  Zap: Zap,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut,
  //   // // // // // // //  font awesome
  Ad: Ad,
  plus: Add,
  AddressBook: AddressBook,
  AddressCard: AddressCard,
  Adjust: Adjust,
  AirFreshener: AirFreshener,
  AlignCenter: AlignCenter2,
  AlignJustify: AlignJustify2,
  AlignLeft: AlignLeft2,
  AlignRight: AlignRight2,
  Allergies: Allergies,
  Ambulance: Ambulance,
  AmericanSignLanguageInterpreting: AmericanSignLanguageInterpreting,
  anchor: Anchor2,
  AnchorCircleCheck: AnchorCircleCheck,
  AnchorCircleExclamation: AnchorCircleExclamation,
  AnchorCircleXmark: AnchorCircleXmark,
  AnchorLock: AnchorLock,
  AngleDoubleDown: AngleDoubleDown,
  AngleDoubleLeft: AngleDoubleLeft,
  AngleDoubleRight: AngleDoubleRight,
  AngleDoubleUp: AngleDoubleUp,
  AngleDown: AngleDown,
  AngleLeft: AngleLeft,
  AngleRight: AngleRight,
  AngleUp: AngleUp,
  AnglesDown: AnglesDown,
  AnglesLeft: AnglesLeft,
  AnglesRight: AnglesRight,
  AnglesUp: AnglesUp,
  Angry: Angry,
  Ankh: Ankh,
  AppleAlt: AppleAlt,
  AppleWhole: AppleWhole,
  archive: Archive2,
  Archway: Archway,
  AreaChart: AreaChart,
  ArrowAltCircleDown: ArrowAltCircleDown,
  ArrowAltCircleLeft: ArrowAltCircleLeft,
  ArrowAltCircleRight: ArrowAltCircleRight,
  ArrowAltCircleUp: ArrowAltCircleUp,
  ArrowCircleDown: ArrowAltCircleDown,
  ArrowCircleLeft: ArrowAltCircleLeft,
  ArrowCircleRight: ArrowAltCircleRight,
  ArrowCircleUp: ArrowAltCircleUp,
  ArrowDown: ArrowDown,
  ArrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  ArrowRightArrowLeft: ArrowRightArrowLeft,
  ArrowRightFromBracket: ArrowRightFromBracket,
  ArrowRightFromFile: ArrowRightFromFile,
  ArrowRightLong: ArrowRightLong,
  ArrowRightRotate: ArrowRightRotate,
  ArrowRightToBracket: ArrowRightToBracket,
  ArrowRightToCity: ArrowRightToCity,
  ArrowRightToFile: ArrowRightToFile,
  ArrowRotateBack: ArrowRotateBack,
  ArrowRotateBackward: ArrowRotateBackward,
  ArrowRotateForward: ArrowRotateForward,
  ArrowRotateLeft: ArrowRotateLeft,
  ArrowRotateRight: ArrowRotateRight,
  ArrowTrendDown: ArrowTrendDown,
  ArrowTrendUp: ArrowTrendUp,
  ArrowTurnDown: ArrowTurnDown,
  ArrowTurnUp: ArrowTurnUp,
  ArrowUp: ArrowUp,
  ArrowUp19: ArrowUp19,
  ArrowUp91: ArrowUp91,
  ArrowUpAZ: ArrowUpAZ,
  ArrowUpFromBracket: ArrowUpFromBracket,
  ArrowUpFromGroundWater: ArrowUpFromGroundWater,
  ArrowUpFromWaterPump: ArrowUpFromWaterPump,
  ArrowUpLong: ArrowUpLong,
  ArrowUpRightDots: ArrowUpRightDots,
  ArrowUpRightFromSquare: ArrowUpRightFromSquare,
  ArrowUpShortWide: ArrowUpShortWide,
  ArrowUpWideShort: ArrowUpWideShort,
  ArrowUpZA: ArrowUpZA,
  Arrows: Arrows,
  ArrowsAlt: ArrowsAlt,
  ArrowsAltH: ArrowsAltH,
  ArrowsAltV: ArrowsAltV,
  ArrowsDownToLine: ArrowsDownToLine,
  ArrowsDownToPeople: ArrowsDownToPeople,
  ArrowsLeftRight: ArrowsLeftRight,
  ArrowsRotate: ArrowsRotate,
  ArrowsUpDown: ArrowsUpDown,
  AslInterpreting: AslInterpreting,
  AssistiveListeningSystems: AssistiveListeningSystems,
  Asterisk: Asterisk,
  At: At,
  Atlas: Atlas,
  Atom: Atom,
  AudioDescription: AudioDescription,
  AustralSign: AustralSign,
  Automobile: Automobile,
  Award: Award2,
  B: Bletter,
  Baby: Baby,

  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};

interface IconDisplayProps {
  searchQuery: string;
}

export const IconDisplay: React.FC<IconDisplayProps> = ({ searchQuery }) => {
  const allIcons = Object.keys(IconsMap);
  const filteredIcons = allIcons.filter((icon) =>
    icon.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {filteredIcons.map((icon) => {
        const IconComponent = IconsMap[icon];
        return IconComponent ? (
          <div key={icon} className="flex flex-col items-center ">
            <IconComponent className="opacity-50 hover:opacity-100 cursor-grab active:cursor-grabbing w-[58px] min-h-10" />
            {/* <span className="text-xs mt-2">{icon}</span> */}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default IconDisplay;
