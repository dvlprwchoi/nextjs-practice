import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta
          name="My blog is powered by Next.js"
          content="My blog is powered by Next.js"
        />
      </Head>
      <h1>Welcome to My Blog</h1>
    </div>
  );
}
