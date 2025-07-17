import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CTAButton() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Link
            href={`https://calendly.com/beyondthesavannah-info/partner-discovery-call`}
            target="calendlyShow"
          >
            <Button className="text-2xl cursor-pointer px-4 py-8 bg-lime-400 hover:bg-lime-500 hover:scale-110 transition duration-700">
              Let&apos;s Get Started
            </Button>
          </Link>
        </DialogTrigger>
        <DialogContent className="min-h-[80dvh] max-w-[80vw]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            <div className="c">
              <iframe
                name="calendlyShow"
                src="https://calendly.com/beyondthesavannah-info/partner-discovery-call"
                className="min-h-[80dvh] w-full"
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
