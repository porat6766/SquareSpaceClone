import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { value: "Deutsch", label: "Deutsch" },
    { value: "English", label: "English" },
    { value: "Español", label: "Español" },
    { value: "Français", label: "Français" },
    { value: "Italiano", label: "Italiano" },
    { value: "Português (Brasil)", label: "Português (Brasil)" },
    { value: "Türkçe", label: "Türkçe", beta: true },
    { value: "日本語", label: "日本語" },
  ];

  return (
    <Card className="w-full max-w-md p-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Language</CardTitle>
        <p className="text-gray-500">
          Choose your preferred language for Squarespace settings and panels.
        </p>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
          className="space-y-4"
        >
          {languages.map((language) => (
            <div key={language.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={language.value}
                id={language.value}
                className="border-2"
              />
              <label
                htmlFor={language.value}
                className="flex items-center text-sm font-medium leading-none cursor-pointer"
              >
                {language.label}
                {language.beta && (
                  <span className="ml-2 text-xs text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    BETA
                  </span>
                )}
              </label>
            </div>
          ))}
        </RadioGroup>

        <Button
          variant="link"
          className="mt-6 p-0 text-blue-600 hover:text-blue-800"
          onClick={() =>
            alert("Beta means this language support is still being tested")
          }
        >
          What does "Beta" mean?
        </Button>
      </CardContent>
    </Card>
  );
};

export default LanguageSelector;
