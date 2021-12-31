import {
  OrderedList,
  ListItem,
  UnorderedList,
  Link,
  Text,
  Code,
  Heading,
} from "@chakra-ui/react";
import PrimaryLink from "components/PrimaryLink";
const getHeadingCreator = (size: any, mt: any) => (props: any) => {
  return (
    <Heading mt={mt} size={size}>
      {props.children}
    </Heading>
  );
};

type MarkdownProps = {
  children: React.ReactChildren;
  href?: string;
};

const components = {
  ol: (props: MarkdownProps) => <OrderedList {...props} ml={8} mb={4} mt={4} />,
  ul: UnorderedList,
  li: ListItem,
  a: (props: MarkdownProps) => {
    return <PrimaryLink href={props.href}>{props.children}</PrimaryLink>;
  },
  p: (props: MarkdownProps) => (
    <Text mt={4} mb={4}>
      {props.children}
    </Text>
  ),
  code: (props: MarkdownProps) => (
    <Code padding={4} width="100%" overflow="scroll">
      {props.children}
    </Code>
  ),
  h1: getHeadingCreator("xl", 16),
  h2: getHeadingCreator("lg", 12),
  h3: getHeadingCreator("md", 12),
  h4: getHeadingCreator("sm", 8),
  h5: getHeadingCreator("xs", 4),
};

export default components;
