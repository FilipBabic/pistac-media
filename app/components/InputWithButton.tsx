import { SearchCheck } from 'lucide-react';

import { Input } from '@/components/ui/input';

export function InputWithButton() {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-sm">
        <span className="pointer-events-none absolute top-1/2 left-1 -translate-y-1/2">
          <SearchCheck className="size-9 p-1 text-white" />
        </span>
        <div>
          <Input
            id="business-promo"
            name="businessPromo"
            autoComplete="off"
            disabled
            type="text"
            placeholder="Unapredi svoj biznis lako i efikasno"
            className="placeholder-opacity-100 font-anton placeholder:text-primary-dark border-primary-dark h-14 w-full border-1 bg-white pl-11 text-xl font-light placeholder:text-lg md:placeholder:text-xl"
          />
        </div>
      </div>
    </div>
  );
}
