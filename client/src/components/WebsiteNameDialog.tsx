import React, { useState, useCallback } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface WebsiteNameDialogProps {
  setWebsiteName: (name: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const WebsiteNameDialog: React.FC<WebsiteNameDialogProps> = ({
  setWebsiteName,
  setIsOpen,
}) => {
  const [name, setName] = useState("");

  const handleSubmit = useCallback(() => {
    if (name) {
      setWebsiteName(name);
      setIsOpen(false);
    }
  }, [name, setWebsiteName, setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Dialog open onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="hidden" />
      </DialogTrigger>
      <DialogContent className="max-w-sm p-6 bg-white rounded-lg z-[100]">
        <DialogTitle className="text-xl font-bold text-black">
          What will be your website's name?
        </DialogTitle>
        <DialogDescription className="text-black mb-4">
          Enter the name of your website below:
        </DialogDescription>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter website name"
          className="w-full p-2 border border-gray-300 rounded-md text-black mb-4"
        />
        <DialogFooter>
          <Button
            variant="default"
            onClick={handleSubmit}
            className="bg-black text-white"
          >
            Save
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="bg-gray-300 text-black"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WebsiteNameDialog;
