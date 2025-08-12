'use client';

import { useEffect, useState } from 'react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { SubscribeForm } from './SubscribeForm';

export default function PopupDialog() {
  const t = useTranslations('SubscriptionForm');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 12_000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent>
        <div style={{ position: 'relative', width: 120, height: 50 }}>
          <Image
            src="/assets/icons/pistac-media-logo.png"
            alt="Logo"
            fill
            sizes="120px"
            priority
            style={{ objectFit: 'contain' }}
            className="bg-primary-dark items-center"
          />
        </div>
        <DialogDescription>{t('greeting')}</DialogDescription>
        <DialogHeader>
          <DialogTitle className="text-left text-green-600">
            {t('title')}
          </DialogTitle>
        </DialogHeader>
        <SubscribeForm />
      </DialogContent>
    </Dialog>
  );
}
