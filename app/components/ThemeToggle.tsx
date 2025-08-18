'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

import { Button } from '@/components/ui/button'; // if you use shadcn/ui

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="default"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="!bg-primary text-white"
    >
      <Sun className="h-[1.4rem] w-[1.4rem] dark:hidden" />
      <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
