"use client";

import * as React from "react";
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
  triggerSize?: "sm" | "default" | "lg";
  triggerVariant?: "default" | "outline";
  triggerLabel?: string;
};

export default function CareerFormDialog({
  post,
  triggerSize = "sm",
  triggerVariant = "outline",
  triggerLabel = "Apply",
}: CareerFormDialogProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const title = post.data.title ?? "Position";

  const applyTrigger = (
    <Button variant={triggerVariant} size={triggerSize}>
      {triggerLabel}
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{applyTrigger}</DialogTrigger>
        <DialogContent className="sm:max-w-sm p-5">
          <DialogHeader className="space-y-0.5 pb-3">
            <DialogTitle className="text-sm font-medium">
              Apply for {title}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Submit your application below.
            </DialogDescription>
          </DialogHeader>
          <CareerApplyForm title={post.data.title} setDialogOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{applyTrigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm px-4 pb-5">
          <DrawerHeader className="space-y-0.5 px-0 text-left">
            <DrawerTitle className="text-sm font-medium">
              Apply for {title}
            </DrawerTitle>
            <DrawerDescription className="text-xs text-muted-foreground">
              Submit your application below.
            </DrawerDescription>
          </DrawerHeader>
          <CareerApplyForm title={post.data.title} setDialogOpen={setOpen} />
          <DrawerFooter className="px-0 pb-0 pt-3">
            <DrawerClose asChild>
              <Button variant="ghost" size="sm" className="h-8 w-full text-xs">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
