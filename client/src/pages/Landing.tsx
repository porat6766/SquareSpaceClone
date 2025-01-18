// imports
import GetStarted from "../components/landing/GetStart";
import Domain from "../components/landing/Domain";
import CreateWeb from "../components/landing/CreateWeb";
import ExploreTemp from "../components/landing/ExploreTemp";
import Selling from "../components/landing/Selling";
import Guide from "../components/landing/Guide";
import Helper from "../components/landing/Helper";
import Promote from "../components/landing/Promote";
import ScrollToTop from "../components/ScrollToTop";

function Landing() {
  return (
    <div>
      <ScrollToTop />
      <GetStarted />
      <Domain />
      <CreateWeb />
      <ExploreTemp />
      <Selling />
      <Promote />
      <Guide />
      <Helper />
    </div>
  );
}

export default Landing;
