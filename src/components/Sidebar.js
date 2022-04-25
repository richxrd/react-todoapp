import React, { useEffect, useState } from "react";
import { Box, IconButton, styled, SwipeableDrawer } from "@mui/material";
import { Menu } from "@mui/icons-material";

import SidebarMenu from "./SidebarMenu";

const StyledContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const StyledMenuBtn = styled(IconButton)(({ theme }) => ({
    position: "fixed",
    margin: "1rem",

    [theme.breakpoints.up("md")]: {
        display: "none",
    },
}));

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setSidebarOpen(false);
    }, [selectedTab]);

    return (
        <Box>
            <StyledContainer>
                <SidebarMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            </StyledContainer>

            <StyledMenuBtn onClick={() => setSidebarOpen(true)}>
                <Menu />
            </StyledMenuBtn>

            <SwipeableDrawer
                anchor="left"
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                onOpen={() => setSidebarOpen(true)}
            >
                <SidebarMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            </SwipeableDrawer>
        </Box>
    );
};

export default Sidebar;
