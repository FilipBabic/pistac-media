import { Badge } from '@/components/ui/badge';

import TeamMemberCard from '../reusable/TeamMemberCard';
const team = [
  {
    name: 'Tamara Ćorluka',
    title: 'Digital Marketing Specialist',
    description:
      'Drives brand awareness and lead generation through strategic content, SEO, social media, and paid campaigns.',
    imageSrc: '/assets/team/tamara.jpeg',
  },
  {
    name: 'Miloš Petković',
    title: 'Backend Developer',
    description:
      'Builds and maintains scalable server-side logic, APIs, and databases to support seamless application performance.',
    imageSrc: '/assets/team/milos.jpeg',
  },
  {
    name: 'Filip Babić',
    title: 'Frontend Developer',
    description:
      'Transforms design concepts into interactive, high-performance user interfaces using modern web technologies, ensuring seamless experiences across all devices.',
    imageSrc: '/assets/team/filip.png',
  },
];

export default function OurTeamSection() {
  return (
    <section className="py-12">
      <Badge className="mb-6 text-base">Naš tim</Badge>
      <div className="flex flex-wrap justify-center gap-6">
        {team.map((member, idx) => (
          <div key={idx} className="w-full max-w-sm sm:w-1/2 md:w-1/3">
            <TeamMemberCard {...member} />
          </div>
        ))}
      </div>
    </section>
  );
}
