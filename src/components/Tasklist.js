import React from "react";
import { Box, List, styled } from "@mui/material";
import TaskItem from "./TaskItem";
import { isAfter, isToday } from "date-fns";

const StyledContainer = styled(Box)(({ theme }) => ({
    width: "90%",
    height: "100%",
    margin: "auto",
}));

const Tasklist = ({ tasklist, setTasklist, selectedTab }) => {
    const handleImportantClick = (index) => {
        const newTasks = [...tasklist];
        newTasks[index].important = !newTasks[index].important;
        setTasklist(newTasks);
    };

    const handleDelete = (index) => {
        const newTasks = [...tasklist];
        newTasks.splice(index, 1);
        setTasklist(newTasks);
    };

    return (
        <StyledContainer>
            <List dense={true}>
                {tasklist.map((task, index) => {
                    if (
                        selectedTab === "Today" &&
                        isToday(new Date(task.date))
                    ) {
                        return (
                            <TaskItem
                                key={index}
                                task={task}
                                index={index}
                                onImportantClick={handleImportantClick}
                                onDeleteClick={handleDelete}
                                tasklist={tasklist}
                                setTasklist={setTasklist}
                            />
                        );
                    } else if (selectedTab === "Important" && task.important) {
                        return (
                            <TaskItem
                                key={index}
                                task={task}
                                index={index}
                                onImportantClick={handleImportantClick}
                                onDeleteClick={handleDelete}
                                tasklist={tasklist}
                                setTasklist={setTasklist}
                            />
                        );
                    } else if (
                        selectedTab === "Upcoming" &&
                        isAfter(new Date(task.date), new Date())
                    ) {
                        return (
                            <TaskItem
                                key={index}
                                task={task}
                                index={index}
                                onImportantClick={handleImportantClick}
                                onDeleteClick={handleDelete}
                                tasklist={tasklist}
                                setTasklist={setTasklist}
                            />
                        );
                    } else if (selectedTab === "Inbox") {
                        return (
                            <TaskItem
                                key={index}
                                task={task}
                                index={index}
                                onImportantClick={handleImportantClick}
                                onDeleteClick={handleDelete}
                                tasklist={tasklist}
                                setTasklist={setTasklist}
                            />
                        );
                    }
                })}
            </List>
        </StyledContainer>
    );
};

export default Tasklist;
