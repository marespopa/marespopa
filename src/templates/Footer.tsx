import { Background } from '../background/Background';
import { FooterCopyright } from '../footer/FooterCopyright';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <div className="text-center">
        <Logo />

        <div className="mt-8 text-sm">
          <FooterCopyright />
        </div>

        <style jsx>
          {`
            .navbar :global(li) {
              @apply mx-4;
            }
          `}
        </style>
      </div>
    </Section>
  </Background>
);

export { Footer };
