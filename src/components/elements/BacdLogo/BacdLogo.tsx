import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const BacdLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/bacd_logo_text_white.svg' : '/bacd_logo_text.svg'}
      height={35}
      width={100}
      alt="BACD FINANCE"
    />
  );
};

export default BacdLogo;