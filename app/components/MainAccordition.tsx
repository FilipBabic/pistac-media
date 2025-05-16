import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export function MainAccordition() {
  return (
    <Accordion type="multiple" className="mx-auto max-w-md text-white">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bebas text-xl">
          Kako da unapredim interakciju sa pratiocima?
        </AccordionTrigger>
        <AccordionContent className="font-roboto text-[18px] leading-relaxed">
          <p className="text-base">
            Saznajte kako da unapredite interakciju sa pratiocima na društvenim
            mrežama kroz konkretne savete o poznavanju ciljne grupe, korišćenju
            poziva na akciju, doslednom objavljivanju i odgovaranju na
            komentare. Ključ uspeha nije broj pratilaca, već kvalitet
            komunikacije sa njima.
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
            sadržaja, pametno korišćenje heštagova, saradnje sa drugim nalozima
            i analizu podataka radi konstantnog napretka.
          </p>
          <Link href="/blog/kako-da-unapredim-posecenost-mojih-naloga" passHref>
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
            Otkrijte efikasne načine za povećanje prodaje vaših usluga uz pomoć
            optimizacije prisustva na mrežama, prodajnih poruka, sadržaja koji
            gradi poverenje i targetiranog oglašavanja.
          </p>
          <Link href="/blog/kako-da-unapredim-prodaju-mojih-usluga" passHref>
            <Button className="mt-4" variant="secondary">
              Pročitaj više
            </Button>
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
