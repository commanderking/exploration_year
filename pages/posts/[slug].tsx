import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import matter from "gray-matter";
import { Box, Heading } from "@chakra-ui/react";
import { Post } from "types/post";
import components from "constants/MdxComponents";
import Head from "next/head";

type Props = {
  frontMatter: Post["frontMatter"];
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const PostPage = ({
  frontMatter: { title, publishedOn, description },
  mdxSource,
}: Props) => {
  return (
    <Box className="mdxWrapper">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box p={4}>
        <Heading mb={4}>{title}</Heading>
        <MDXRemote {...mdxSource} components={components} />
      </Box>
    </Box>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

type StaticProps = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params: { slug } }: StaticProps) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
