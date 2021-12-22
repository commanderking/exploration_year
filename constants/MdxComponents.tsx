import {
  OrderedList,
  List,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

const components = {
  ol: (props: any) => <OrderedList {...props} ml={8} />,
  ul: UnorderedList,
  li: ListItem,
  a: Link,
};

export default components;
