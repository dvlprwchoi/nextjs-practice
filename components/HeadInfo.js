import Head from 'next/head';

const HeadInfo = ({ title, keyword, content }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta keyword={keyword} content={content} />
      </Head>
    </div>
  );
};

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog is powered by Next.js',
  content: 'Practicing Next.js',
};

export default HeadInfo;
