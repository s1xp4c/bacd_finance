import { Box, useColorMode, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';

const BacdLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          transform: 'scale(0.98)',
        }}
      >
        <NextLink href="/" passHref>
          <Link>
            <NextImage
              src={colorMode === 'dark' ? '/bacd_logo_text_white.svg' : '/bacd_logo_text.svg'}
              width={100}
              height={35}
              alt="BACD LOGO"
            />
          </Link>
        </NextLink>
      </Box>
    </>
  );
};

export default BacdLogo;
