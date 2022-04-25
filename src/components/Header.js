import React from "react";
import { Box, styled } from "@mui/material";

const StyledContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
    height: "75px",
    fontSize: "14px",
    letterSpacing: "2px",
    marginBottom: "15px",
}));

const StyledHeader = styled(Box)(({ theme }) => ({
    fontSize: "24px",
    fontWeight: "700",
}));

const Header = ({ title }) => {
    const date = new Date();
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let weekday = weekdays[date.getDay()];
    let month = months[date.getMonth()];
    let dayString = `${weekday}, ${month} ${date.getDate()}th`;

    return (
        <StyledContainer>
            <StyledHeader>{title}</StyledHeader>

            {dayString}
        </StyledContainer>
    );
};

export default Header;
