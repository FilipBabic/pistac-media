import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function MainAccordition() {
  return (
    <Accordion type="multiple" className="mx-auto max-w-md text-[#ffffff]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-anton text-2xl leading-tight">
          Kako da unapredim interakciju sa pratiocima?
        </AccordionTrigger>
        <AccordionContent className="font-roboto text-[18px] leading-relaxed">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          kako da unapredim posećenost mojih naloga?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          kako da unapredim prodaju mojih usluga?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
