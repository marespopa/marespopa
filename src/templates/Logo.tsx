import Image from 'next/image';

type ILogoProps = {
  isLarge?: boolean;
};

const Logo = ({ isLarge }: ILogoProps) => {
  const logoSize = isLarge ? '128' : '64';
  return (
    <Image
      src="/assets/images/logo.svg"
      alt="Smoothwizz"
      width={logoSize}
      height={logoSize}
    />
  );
};

export { Logo };
