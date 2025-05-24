import Link from 'next/link';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

import { InputWithButton } from './InputWithButton';

export function MainAccordition() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 md:flex-row md:py-20">
      <Accordion
        type="single"
        className="mx-auto w-full px-0 text-white sm:px-14"
      >
        <div>
          <InputWithButton />
        </div>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bebas text-xl">
            Kako da unapredim interakciju sa pratiocima?
          </AccordionTrigger>
          <AccordionContent className="font-roboto text-base leading-relaxed">
            <p className="text-base">
              Saznajte kako da unapredite interakciju sa pratiocima na
              društvenim mrežama kroz konkretne savete o poznavanju ciljne
              grupe, korišćenju poziva na akciju, doslednom objavljivanju i
              odgovaranju na komentare. Ključ uspeha nije broj pratilaca, već
              kvalitet komunikacije sa njima.
            </p>
            <Link
              href="/blog/kako-da-unapredim-interakciju-sa-pratiocima"
              passHref
            >
              <Button className="mt-4" variant="secondary">
                Pročitaj više
              </Button>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bebas text-xl">
            Kako da unapredim posećenost mojih naloga?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
              Otkrijte efikasne načine za povećanje posećenosti vaših profila na
              društvenim mrežama kroz optimizaciju profila, kreiranje deljivog
              sadržaja, pametno korišćenje heštagova, saradnje sa drugim
              nalozima i analizu podataka radi konstantnog napretka.
            </p>
            <Link
              href="/blog/kako-da-unapredim-posecenost-mojih-naloga"
              passHref
            >
              <Button className="mt-4" variant="secondary">
                Pročitaj više
              </Button>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bebas text-xl">
            Kako da unapredim prodaju mojih usluga?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
              Otkrijte efikasne načine za povećanje prodaje vaših usluga uz
              pomoć optimizacije prisustva na mrežama, prodajnih poruka,
              sadržaja koji gradi poverenje i targetiranog oglašavanja.
            </p>
            <Link href="/blog/kako-da-unapredim-prodaju-mojih-usluga" passHref>
              <Button className="mt-4" variant="secondary">
                Pročitaj više
              </Button>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="sm:w-max-sm relative h-96 w-full rounded-2xl">
        <Image
          src="/assets/images/woman-with-laptop-1.jpg"
          alt="Women With Megaphone"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
          className="rounded-md object-cover p-4"
          priority
        />
      </div>
    </div>
  );
}
