import React, { FC } from "react";
import { Box } from "@mui/system";
import Header from "./Header";
import AppDrawer from "./AppDrawer";

type Props = {
  children: React.ReactNode;
}

/**
 * The layout component contains elements that will always be on the screen, regardless of the
 * current route. This includes the app bar and the menu bar.
 *
 * @param props
 * @returns
 */
const Layout: FC<Props> = (props) => {
  return (
    <Box sx={{ width: "100%", height: "100%"}}>
      <Header />
      <AppDrawer />
      {props.children}
    </Box>
  );
};

export default Layout;