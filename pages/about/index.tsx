import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import matter from "gray-matter";
import components from "constants/MdxComponents";

import { Box } from "@chakra-ui/react";

type Props = {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};
const AboutPage = ({ mdxSource }: Props) => {
  return (
    <Box>
      <Box>
        <MDXRemote {...mdxSource} components={components}></MDXRemote>
      </Box>
    </Box>
  );
};

type StaticProps = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async () => {
  console.log("path", path.join("pages", "about", "about" + ".mdx"));
  const markdownWithMeta = fs.readFileSync(
    path.join("pages", "about", "about" + ".mdx")
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
    },
  };
};

export default AboutPage;
