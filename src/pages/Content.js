import { Box, styled } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Tasklist from "../components/Tasklist";

const StyledContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "fit-content",
}));

const Content = ({ tasklist, setTasklist, selectedTab }) => {
    return (
        <StyledContainer>
            <Header title={selectedTab} />

            <Tasklist
                tasklist={tasklist}
                setTasklist={setTasklist}
                selectedTab={selectedTab}
            />
        </StyledContainer>
    );
};

export default Content;
