import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
      </ul>
      <Head>
        <title>My Blog</title>
        <meta
          name="My blog is powered by Next.js"
          content="My blog is powered by Next.js"
        />
        <h1>Welcome to My Blog</h1>
      </Head>
    </div>
  );
}
