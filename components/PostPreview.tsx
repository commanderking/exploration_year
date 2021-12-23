import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { Post } from "types/post";

type Props = {
  post: Post;
};

export const PostPreview = ({ post }: Props) => {
  const { frontMatter } = post;

  return (
    <Box p={4} role="group" bg="brand.100">
      <Link href={`/posts/${post.slug}`} _hover={{ textDecoration: "none" }}>
        <Heading _groupHover={{ color: "brand.primary" }} mb={4} size="md">
          {frontMatter.title}
        </Heading>
        <Text>{frontMatter.description}</Text>
      </Link>
    </Box>
  );
};

export default PostPreview;
