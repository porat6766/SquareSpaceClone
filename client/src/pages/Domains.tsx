import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const Domains = () => {
  return (
    <div className="p-[60px] min-w-[480px]">
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-bold text-[30px] mr-10">Domains</h1>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="bg-white text-black border border-gray-300 hover:bg-gray-100 rounded-none"
            >
              TRANSFER A DOMAIN
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-none">
              GET A DOMAIN
            </Button>
          </div>
        </div>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16 px-4">
            <h2 className="text-xl text-gray-700 mb-2">There are no domains</h2>
            <p className="text-gray-500 text-center">
              Get a domain or transfer a domain to manage them through
              Squarespace.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Domains;
