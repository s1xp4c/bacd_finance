import { Box, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const BacdLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      justifyContent={'center'}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      _hover={{
        transform: 'scale(0.98)',

        boxShadow: '0 1px 0 0  rgba(46, 98, 59, .95)',
      }}
    >
      <a href="/">
        <Image
          src={colorMode === 'dark' ? '/bacd_logo_text_white.svg' : '/bacd_logo_text.svg'}
          height={35}
          width={100}
          alt="BACD FINANCE"
        />
      </a>
    </Box>
  );
};

export default BacdLogo;
