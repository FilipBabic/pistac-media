import { NextIntlClientProvider } from 'next-intl';

export default function LocaleProvider({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: Record<string, string>;
}) {
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
