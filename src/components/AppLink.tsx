import React, { VFC, memo, useMemo } from "react";
import Link from "next/link";
import { Link as MuiLink } from "@material-ui/core";

interface AppLinkProps {
  to?: string;
  as?: string;
  children?: React.ReactNode;
}

const AppLinkProps = {};

const AppLink: VFC<AppLinkProps> = (props) => {
  const { to, as, children, ...otherProps } = props;

  const nextRouter = useMemo(() => to || "#", [to]);
  const urlOnBrowser = useMemo(() => as, [as]);

  return (
    <Link href={nextRouter} as={urlOnBrowser} passHref={true}>
      <MuiLink {...otherProps}>{children}</MuiLink>
    </Link>
  );
};

export default memo(AppLink);
