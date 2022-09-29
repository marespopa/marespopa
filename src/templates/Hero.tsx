import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-primary-500">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo isLarge={true} />}>
        <li>
          <Link href="https://github.com/xkrromania">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com/smoothwizz">
            <a>Instagram</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <header className="text-center">
        <h1 className="text-6xl text-gray-900 font-bold whitespace-pre-line leading-hero">
          This site is being renovated.
        </h1>
        <div className="text-2xl text-gray-900 mt-4 mb-16">
          Sprucing things up, adding improvements, and coming back fresher and
          better. Stay tuned!
        </div>

        <div className="text-xl text-gray-900 mt-2">
          <p>Need to reach me? Drop me a line at</p>
          <p className="mt-2">
            <Link href="mailto:hello@marespopa.com">
              <a>
                <Button xl>hello@marespopa.com</Button>
              </a>
            </Link>
          </p>
        </div>
      </header>
    </Section>
  </Background>
);

export { Hero };
