import BasicEditor3Pro from '../components/basicEditor3Pro/BasicEditor3Pro'
import { type BasicEditor3Website } from '../components/basicEditor3Pro/BasicEditor3ProTypes';

const defaultHeaderData: any = {
  logo: { text: "LOGO1", imgSrc: null },
  pages: [],
  hasExtraButton: false,
  hasSocialLinks: false,
  hasAccount: true,
  style: {
    headerStyle: {},
    logoContainerStyle: {},
    navContainerStyle: {},
    navItemStyle: {},
  },
};

const defaultUser = { mongoId: "1234abcd", username: "user1" };

const defaultWebsite: BasicEditor3Website = {
  owner: defaultUser,
  name: "defaultWebsite0",
  headerData: defaultHeaderData,
  pages: [
    { name: "Home2", renderElements: [] },
    { name: "Home3", renderElements: [] },
  ],
  footerData: {},
};

function EditorTestingEnv() {
  return (
    <BasicEditor3Pro currentWebsite={defaultWebsite} />
  )
}

export default EditorTestingEnv