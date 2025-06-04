'use client';

import { useEffect, useState } from 'react';
import { DialogDescription } from '@radix-ui/react-dialog';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { SubscribeForm } from './SubscribeForm';

export default function PopupDialog() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5_000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent>
        <DialogDescription>Hello There!</DialogDescription>
        <DialogHeader>
          <DialogTitle className="text-green-600">
            Subscribe and Stay Ahead with Exclusive Insights
          </DialogTitle>
        </DialogHeader>
        <SubscribeForm />
      </DialogContent>
    </Dialog>
  );
}
