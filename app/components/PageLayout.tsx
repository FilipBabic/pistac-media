import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="bg-primary-dark relative flex min-h-screen grow flex-col overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pt-[50px]">
        <div className="from-primary via-primary-dark absolute top-1 left-0 size-[20000px] translate-x-[-47.5%] rounded-full bg-gradient-to-b" />
      </div>
      <div className="relative container mx-auto flex grow flex-col px-4">
        <div className="justify-evenly text-4xl text-[#222222] md:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
