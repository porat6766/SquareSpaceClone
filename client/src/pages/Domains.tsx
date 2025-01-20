import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useUserProfile } from "../hooks/useUser";

const Domains = () => {
  const { data: userData } = useUserProfile();
  const sites = userData?.user?.sites || [];

  return (
    <div className="p-10 min-w-[480px] bg-gray-50">
      <div className="w-full max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-bold text-2xl text-gray-800">Domains</h1>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="bg-white text-black border border-gray-300 hover:bg-gray-100 rounded-lg px-4 py-2"
            >
              TRANSFER A DOMAIN
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-lg px-4 py-2">
              GET A DOMAIN
            </Button>
          </div>
        </div>

        {/* Domains List */}
        {sites.length > 0 ? (
          <Card className="bg-gray-50 border border-gray-200">
            <CardContent className="py-6">
              <ul className="space-y-4">
                {sites.map((site: any) => (
                  <li
                    key={site.id}
                    className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg border border-gray-200 overflow-x-auto"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{site.name}</h3>
                      <p className="text-sm text-gray-600 flex truncate">
                        {`${site.domain}/${site._id}`}
                      </p>
                    </div>
                    <Button
                      onClick={() =>
                        window.open(`${site.domain}/${site._id}`, "_blank")
                      }
                      className="bg-black text-white hover:bg-gray-800 rounded-lg px-4 py-2"
                    >
                      Go to Domain
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-gray-50 border border-gray-200">
            <CardContent className="flex flex-col items-center justify-center py-16 px-6">
              <h2 className="text-lg text-gray-700 font-semibold mb-2">
                There are no domains
              </h2>
              <p className="text-gray-500 text-center leading-relaxed">
                Get a domain or transfer a domain to manage them through
                Squarespace.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Domains;
