import { useEffect, useState } from "react";
import { BasicEditor3Website } from "../basicEditor3Pro/BasicEditor3ProTypes";

import { hydrateWebsite } from "../basicEditor3Pro/utils";
import BasicEditor3Pro from "../basicEditor3Pro/BasicEditor3Pro";

export type DisplayWebsite3Props = {
  websiteDataString: string;
};

function DisplayWebsite3({ websiteDataString }: DisplayWebsite3Props) {
  const [website, setWebsite] = useState<BasicEditor3Website>();

  useEffect(() => {
    const websiteData = JSON.parse(websiteDataString);
    hydrateWebsite(websiteData);
    setWebsite(websiteData);
  }, [websiteDataString]);

  return (
    <>
      {/* <BasicEditor3Pro currentWebsite={websiteData} isEditModeProp={false} /> */}
      {!(typeof website === "undefined") && (
        <BasicEditor3Pro currentWebsite={website} isEditModeProp={false} />
      )}
    </>
  );
}

export default DisplayWebsite3;
