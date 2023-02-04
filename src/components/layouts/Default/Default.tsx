import { FC, ReactNode } from 'react';
import { Container, Link } from '@chakra-ui/react';
import { Footer, Header } from 'components/modules';
import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} | BACD FINANCE`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Link rel="apple-touch-icon" size="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" size="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" size="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#603cba" />
    </Head>
    <Header />
    <Container maxW="container.lg" p={3} marginTop={5} as="main" minH="70vh">
      {children}
    </Container>
    <Footer />
  </>
);

export default Default;
