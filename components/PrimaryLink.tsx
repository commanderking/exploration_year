import { Link } from "@chakra-ui/react";

type Props = {
  href: string | undefined;
  color?: string;
  children: React.ReactChildren | string;
  isExternal?: boolean;
};

const PrimaryLink = ({
  href,
  color = "brand.primary",
  children,
  isExternal = true,
}: Props) => {
  return (
    <Link href={href} color={color} isExternal={isExternal}>
      <strong>{children}</strong>
    </Link>
  );
};

export default PrimaryLink;
