import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useState } from "react";

interface Preferences {
  acuity: boolean;
  bioSites: boolean;
  domains: boolean;
  promotions: boolean;
  squarespaceNews: boolean;
  squarespaceProductUpdates: boolean;
  surveys: boolean;
  unfold: boolean;
}

const EmailPreferences = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    acuity: true,
    bioSites: true,
    domains: true,
    promotions: true,
    squarespaceNews: true,
    squarespaceProductUpdates: true,
    surveys: true,
    unfold: true,
  });

  const handleToggle = (key: any) => {
    setPreferences((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const unsubscribeAll = () => {
    setPreferences(
      Object.keys(preferences).reduce(
        (acc, key) => ({
          ...acc,
          [key]: false,
        }),
        {} as Preferences
      )
    );
  };

  const preferenceItems = [
    { key: "acuity", label: "Acuity" },
    { key: "bioSites", label: "Bio Sites" },
    { key: "domains", label: "Domains" },
    { key: "promotions", label: "Promotions" },
    { key: "squarespaceNews", label: "Squarespace News" },
    { key: "squarespaceProductUpdates", label: "Squarespace Product Updates" },
    { key: "surveys", label: "Surveys" },
    { key: "unfold", label: "Unfold" },
  ];

  return (
    <Card className="w-full max-w-md p-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Notifications</CardTitle>
        <div className="text-sm text-gray-500">EMAIL PREFERENCES</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {preferenceItems.map(({ key, label }) => (
            <div
              key={key}
              className="flex items-center justify-between py-2 border-b border-gray-200"
            >
              <label htmlFor={key} className="font-medium">
                {label}
              </label>
              <Switch
                id={key}
                checked={preferences[key as keyof Preferences]}
                onCheckedChange={() => handleToggle(key)}
                className={
                  preferences[key as keyof Preferences] ? "bg-green-400" : ""
                }
              />
            </div>
          ))}

          <Button
            variant="ghost"
            className="w-full mt-6 text-gray-500 hover:text-gray-700"
            onClick={unsubscribeAll}
          >
            UNSUBSCRIBE ALL
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailPreferences;
