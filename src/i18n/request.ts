import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

//const locales = ['en', 'es'];

export default getRequestConfig(async () => {
  //if (!locales.includes(locale as any)) notFound();
  const locale = 'es';
  return {
    locale,
    messages: (await import(`../../public/locales/${locale}/common.json`)).default
  };
});