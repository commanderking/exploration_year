import {
  OrderedList,
  ListItem,
  UnorderedList,
  Link,
  Text,
  Code,
  Heading,
} from "@chakra-ui/react";

const getHeadingCreator = (size: any) => (props: any) => {
  return <Heading size={size}>{props.children}</Heading>;
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
    return (
      <Link href={props.href} color="brand.primary">
        <strong>{props.children}</strong>
      </Link>
    );
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
  h1: getHeadingCreator("xl"),
  h2: getHeadingCreator("lg"),
  h3: getHeadingCreator("md"),
  h4: getHeadingCreator("sm"),
  h5: getHeadingCreator("xs"),
};

export default components;
