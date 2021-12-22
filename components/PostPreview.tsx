import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { Post } from "types/post";
type Props = {
  post: Post;
};

export const PostPreview = ({ post }: Props) => {
  const { frontMatter } = post;

  return (
    <Link href={`/posts/${post.slug}`} _hover={{ textDecoration: "none" }}>
      <Box>
        <Heading size="md">{frontMatter.title}</Heading>
        <Text>{frontMatter.description}</Text>
      </Box>
    </Link>
  );
};

export default PostPreview;
