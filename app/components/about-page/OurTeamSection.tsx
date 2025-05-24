import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';

import TeamMemberCard from '../reusable/TeamMemberCard';

export default function OurTeamSection() {
  const t = useTranslations('AboutPage.OurTeam');
  return (
    <section className="py-12">
      <Badge className="bg-secondary text-primary-dark mb-6 text-base">
        {t('badge')}
      </Badge>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            name: 'Tamara Ćorluka',
            title: 'Digital Marketing Specialist',
            description: `${t('description-1')}`,
            imageSrc: '/assets/team/tamara.jpeg',
          },
          {
            name: 'Miloš Petković',
            title: 'Backend Developer',
            description: `${t('description-2')}`,
            imageSrc: '/assets/team/milos.jpeg',
          },
          {
            name: 'Filip Babić',
            title: 'Frontend Developer',
            description: `${t('description-3')}`,
            imageSrc: '/assets/team/filip.png',
          },
        ].map((member, idx) => (
          <div key={idx} className="w-full max-w-sm sm:w-1/2 md:w-1/3">
            <TeamMemberCard {...member} />
          </div>
        ))}
      </div>
    </section>
  );
}
