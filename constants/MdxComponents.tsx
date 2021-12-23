import {
  OrderedList,
  List,
  ListItem,
  UnorderedList,
  Link,
  Text,
} from "@chakra-ui/react";

const components = {
  ol: (props: any) => <OrderedList {...props} ml={8} mb={4} mt={4} />,
  ul: UnorderedList,
  li: ListItem,
  a: Link,
  p: Text,
};

export default components;
