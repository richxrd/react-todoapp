import React from "react";
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import {
    CalendarMonthOutlined,
    InboxOutlined,
    LightModeOutlined,
    StarBorderOutlined,
} from "@mui/icons-material";

const StyledContainer = styled(Box)(({ theme }) => ({
    width: "250px",
    height: "100%",
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.primary,
}));

const StyledHeader = styled(Box)({
    display: "flex",
    alignItems: "center",
    height: "75px",
    fontSize: "24px",
    fontWeight: "700",
    paddingLeft: "15px",
});

const SidebarMenu = ({ selectedTab, setSelectedTab }) => {
    return (
        <StyledContainer>
            <StyledHeader>To Do</StyledHeader>
            <Stack direction="column" spacing={1}>
                <List dense={true}>
                    <ListItem disablePadding>
                        <ListItemButton
                            selected={selectedTab === "Inbox"}
                            onClick={() => setSelectedTab("Inbox")}
                        >
                            <ListItemIcon>
                                <InboxOutlined
                                    fontSize="small"
                                    color="primary"
                                />
                            </ListItemIcon>
                            <ListItemText>Inbox</ListItemText>
                            <Typography variant="caption"></Typography>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton
                            selected={selectedTab === "Today"}
                            onClick={() => setSelectedTab("Today")}
                        >
                            <ListItemIcon>
                                <LightModeOutlined
                                    fontSize="small"
                                    color="error"
                                />
                            </ListItemIcon>
                            <ListItemText>Today</ListItemText>
                            <Typography variant="caption"></Typography>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton
                            selected={selectedTab === "Important"}
                            onClick={() => setSelectedTab("Important")}
                        >
                            <ListItemIcon>
                                <StarBorderOutlined
                                    fontSize="small"
                                    color="warning"
                                />
                            </ListItemIcon>
                            <ListItemText>Important</ListItemText>
                            <Typography variant="caption"></Typography>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton
                            selected={selectedTab === "Upcoming"}
                            onClick={() => setSelectedTab("Upcoming")}
                        >
                            <ListItemIcon>
                                <CalendarMonthOutlined
                                    color="success"
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            <ListItemText>Upcoming</ListItemText>
                            <Typography variant="caption"></Typography>
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider variant="middle" />
            </Stack>
        </StyledContainer>
    );
};

export default SidebarMenu;
