"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "../ui/dialog";
import { useEffect, useState } from "react";

export default function ClientDialog({ client }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  function handleClose() {
    setIsOpen(false);
    // router.push("/movies");
    const timeOut = setTimeout(() => {
      router.push("/movies");
      clearTimeout(timeOut);
    }, 100);
  }
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <p>{JSON.stringify(client)}</p>
      </DialogContent>
    </Dialog>
  );
}
