import Nav from './Nav';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta
          keyword="Blog is powered by Next.js"
          content="Practicing Next.js"
        />
      </Head>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
