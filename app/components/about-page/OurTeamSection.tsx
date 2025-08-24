import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';

import TeamMemberCard from '../reusable/TeamMemberCard';

export default function OurTeamSection() {
  const t = useTranslations('AboutPage.OurTeam');
  return (
    <section className="py-12">
      <Badge className="bg-secondary mb-4 border-1 border-white text-left text-lg whitespace-normal text-white">
        {t('badge')}
      </Badge>
      <div className="dark:text-primary mt-4 mb-10 text-left text-base text-gray-700 md:text-xl">
        {t.rich('p-1', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          b: (chunks) => <b>{chunks}</b>,
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            name: 'Tamara Ćorluka',
            title: 'Digital Marketing Specialist',
            description: `${t('description-1')}`,
            imageSrc: '/assets/team/tamara.jpeg',
          },
          {
            name: 'M.P.',
            title: 'Fullstack Developer',
            description: `${t('description-2')}`,
            imageSrc: '/assets/team/avatar.png',
          },
          {
            name: 'Filip Babić',
            title: 'Frontend Developer',
            description: `${t('description-3')}`,
            imageSrc: '/assets/team/filip.png',
          },
          {
            name: 'A.P.',
            title: 'Email Marketing Specialist',
            description: `${t('description-4')}`,
            imageSrc: '/assets/team/avatar.png',
          },
          {
            name: 'M.J.',
            title: 'Photographer',
            description: `${t('description-5')}`,
            imageSrc: '/assets/team/avatar.png',
          },
          {
            name: 'N.S.',
            title: 'Videographer',
            description: `${t('description-6')}`,
            imageSrc: '/assets/team/avatar.png',
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
