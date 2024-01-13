import { Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import React from "react";
import { useTheme } from "@mui/material/styles";
import DrawerItems from "./items/DrawerItems";

type DrawerProps = {
  open: boolean;
  handleDrawerToggle: () => void;
};

const Drawer = ({ open, handleDrawerToggle }: DrawerProps) => {
  const theme = useTheme();
  return (
    <>
      <MuiDrawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Toolbar />
        <DrawerItems onClick={handleDrawerToggle}/>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
