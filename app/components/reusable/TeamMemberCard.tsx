import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

type TeamMemberCardProps = {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
};

export default function TeamMemberCard({
  name,
  title,
  description,
  imageSrc,
}: TeamMemberCardProps) {
  return (
    <Card className="border-border bg-primary-dark h-full rounded-2xl border p-6 text-center shadow-none">
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="border-muted relative h-24 w-24 overflow-hidden rounded-full border">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-700">{name}</h3>
          <p className="text-sm font-semibold text-white">{title}</p>
        </div>
        <p className="text-secondary text-sm text-balance">{description}</p>
      </CardContent>
    </Card>
  );
}
