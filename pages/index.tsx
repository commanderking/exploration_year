import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "types/post";
import Posts from "components/Posts";
import { Box } from "@chakra-ui/react";

type Props = {
  posts: Post[];
};

const Home = ({ posts }: Props) => {
  return (
    <div>
      <Head>
        <title>Jeff King Blog</title>
        <meta
          name="description"
          content="Writing about my year of exploration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box maxWidth="600px" margin="auto">
        <Posts posts={posts} />
      </Box>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
