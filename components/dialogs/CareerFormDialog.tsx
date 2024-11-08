"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/components/hooks/use-media-query";
import { Content } from "@prismicio/client";
import CareerApplyForm from "../forms/CareerApplyForm";

type CareerFormDialogProps = {
  post: Content.CareerDocument;
};

export default function CareerFormDialog({ post }: CareerFormDialogProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="text-uppercase btn-primary mt-4 block px-6 py-2 font-bold text-white transition">
            Apply Now
          </button>
        </DialogTrigger>
        <DialogContent className="px-4 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Apply Now</DialogTitle>
            <DialogDescription>
              Apply for the position of {post.data.title}.
            </DialogDescription>
          </DialogHeader>
          <CareerApplyForm title={post.data.title} setDialogOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="mt-4">
          Apply Now
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>Apply Now</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <CareerApplyForm title={post.data.title} setDialogOpen={setOpen} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
