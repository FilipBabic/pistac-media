import {
  Fingerprint,
  Sparkles,
  SlidersHorizontal,
  MessageCircleHeart,
  MessageSquare,
  HandHelping,
  GraduationCap,
} from 'lucide-react';

import ReusableTransparentCard from '../reusable/ReusableTransparentCard';

export default function OurMission() {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ReusableTransparentCard
        translation="AboutPage.Mission.card-1"
        icon={Fingerprint}
      />
      <ReusableTransparentCard
        translation="AboutPage.Mission.card-2"
        icon={Sparkles}
      />
      <ReusableTransparentCard
        translation="AboutPage.Mission.card-3"
        icon={SlidersHorizontal}
      />
      <ReusableTransparentCard
        translation="AboutPage.Mission.card-4"
        icon={MessageCircleHeart}
      />
      <ReusableTransparentCard
        translation="AboutPage.Mission.card-5"
        icon={MessageSquare}
      />
      <ReusableTransparentCard
        translation="AboutPage.Mission.card-6"
        icon={HandHelping}
      />
      <ReusableTransparentCard
        translation="AboutPage.Mission.card-7"
        icon={GraduationCap}
      />
    </div>
  );
}
