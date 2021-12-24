import { Box, Heading, Button } from "@chakra-ui/react";
import { Post } from "types/post";
import PostPreview from "components/PostPreview";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <Box>
      <Heading size="lg" mb={4}>
        Latest posts
      </Heading>
      {posts.map((post) => {
        return (
          <Box key={post.frontMatter.title}>
            <PostPreview post={post} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Posts;
