import DisplayWebsite3 from "../components/basicDisplay3Pro/DisplayWebsite3";
import { useEffect, useState } from "react";
import { useSiteById } from "../hooks/useSite";
import { useParams, useNavigate } from "react-router-dom";

function UserWebsite() {
  const [website, setWebsite]: any = useState<string | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate("/error");
    return null;
  }

  const { data: site, isLoading, error } = useSiteById(id);

  useEffect(() => {
    if (site?.data) {
      try {
        setWebsite(site.data);
      } catch (error) {
        console.error("Error processing website data:", error);
        navigate("/error");
      }
    }
  }, [site, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    navigate("/error");
    return null;
  }

  return website ? (
    <DisplayWebsite3 websiteDataString={website} />
  ) : (
    <p>Error loading website data.</p>
  );
}

export default UserWebsite;
