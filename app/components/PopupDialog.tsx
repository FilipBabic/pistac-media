'use client';

import { useEffect, useState } from 'react';
import { DialogDescription } from '@radix-ui/react-dialog';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function PopupDialog() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5_000); // 1 minute
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent>
        <DialogDescription className="hidden">
          Popup form for email subscribe
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Hello there!</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-gray-600">
          This popup appeared 1 minute after you landed on the site.
        </div>
      </DialogContent>
    </Dialog>
  );
}
