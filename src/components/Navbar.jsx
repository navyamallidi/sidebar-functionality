import React,{useState} from "react";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./flexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profile from "assets/profile.jpg"
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material";

function Navbar({
  isSidebarOpen,
  setIsSidebarOpen,}
) {
    const dispatch = useDispatch();
    const theme = useTheme();
  return <AppBar sx={{
    position:"static",
    background:"none",
    boxShadow:"none"
  }}>
    <Toolbar sx={{
        justifyContent:"space-between"
    }}>
      <FlexBetween>
        <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
          <MenuIcon/>
        </IconButton>
        <FlexBetween backgroundColor = {theme.palette.background.alt}
        borderRadius="9px"
        gap={"3rem"}
        p="0.1 rem 1.5 rem">
          <InputBase placeholder="Search"/>
          <IconButton>
            <Search/>
          </IconButton>
        </FlexBetween>
      </FlexBetween>

      <FlexBetween gap="1.5rem">
        <IconButton onClick={()=> dispatch(setMode())}>
          {theme.palette.mode === 'dark'?(<DarkModeOutlined sx={{fontSize:"25px"}}/>):( <LightModeOutlined sx={{fontSize:"25px"}}/>)}
        </IconButton>
        <IconButton>
          <SettingsOutlined sx={{fontSize:"25px"}}/>
        </IconButton>
      </FlexBetween>
        
    </Toolbar>

  </AppBar>;
}

export default Navbar;
