import { Target, Palette, Handshake, Users, Mic, Sparkles } from 'lucide-react';

import ReusableTransparentCard from '../reusable/ReusableTransparentCard';

export default function OurVision() {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ReusableTransparentCard
        translation="AboutPage.Vision.card-1"
        icon={Target}
      />
      <ReusableTransparentCard
        translation="AboutPage.Vision.card-2"
        icon={Palette}
      />
      <ReusableTransparentCard
        translation="AboutPage.Vision.card-3"
        icon={Handshake}
      />
      <ReusableTransparentCard
        translation="AboutPage.Vision.card-4"
        icon={Users}
      />
      <ReusableTransparentCard
        translation="AboutPage.Vision.card-5"
        icon={Mic}
      />
      <ReusableTransparentCard
        translation="AboutPage.Vision.card-6"
        icon={Sparkles}
      />
    </div>
  );
}
