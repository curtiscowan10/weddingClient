import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import DarkModeToggle from "./darkModeToggle/DarkModeToggleContainer";
import './AppBar.scss';

type AppBarProps = {
  handleDrawerToggle: () => void;
};

const AppBar = ({ handleDrawerToggle }: AppBarProps) => (
  <IconButton
    component="label"
    aria-label="menu"
    onClick={handleDrawerToggle}
    edge="start"
    style={{ position: 'absolute', top: '16px', left: '24px', zIndex: 10000 }}
  >
    <MenuIcon />
  </IconButton>
);

export default AppBar;
