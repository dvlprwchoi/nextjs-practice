export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Server Side Rendering

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     // `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
//     `http://localhost:8080/api/posts`
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts: posts,
//     },
//   };
// };

// Static Site Generation

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
    // `http://localhost:8080/api/posts`
  );
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
    // After 20 seconds
    revalidate: 20,
  };
};
