import { Nunito_Sans as NunitoSans } from 'next/font/google';

const body = NunitoSans({
  variable: '--body-font',
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin']
});

const loadFonts = () => {
  return [body.variable].join(' ');
};

export default loadFonts();
