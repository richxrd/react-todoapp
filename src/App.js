import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";

import Content from "./pages/Content";
import NewTask from "./components/NewTask";
import Sidebar from "./components/Sidebar";
import { add, format } from "date-fns";

const DEFAULT = [
    {
        task: "Welcome to To Do App! Add some tasks!",
        important: true,
        date: null,
    },
    {
        task: "Mark it as important!",
        important: true,
        date: null,
    },
    {
        task: "Give it a date!",
        important: false,
        date: format(add(new Date(), { months: 3 }), "MM/dd/yyyy"),
    },
];

const App = () => {
    const [tasklist, setTasklist] = useState(() => {
        const localData = localStorage.getItem("tasks");
        return localData ? JSON.parse(localData) : DEFAULT;
    });
    const [selectedTab, setSelectedTab] = useState("Inbox");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasklist));
    }, [tasklist]);

    return (
        <>
            <Stack direction="row">
                <Sidebar
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />

                <Content
                    tasklist={tasklist}
                    setTasklist={setTasklist}
                    selectedTab={selectedTab}
                />
            </Stack>
            <NewTask
                tasklist={tasklist}
                setTasklist={setTasklist}
                selectedTab={selectedTab}
            />
        </>
    );
};

export default App;
