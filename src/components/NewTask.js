import React, { useState, useEffect } from "react";
import {
    Button,
    Checkbox,
    Fab,
    FormControlLabel,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";

import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { format } from "date-fns";
import { Add, StarBorderOutlined } from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const NewTask = ({ tasklist, setTasklist, selectedTab }) => {
    const [open, setOpen] = useState(false);
    const [newTask, setNewTask] = useState("");
    const [newTaskImportant, setNewTaskImportant] = useState(() => {
        return selectedTab === "Important" ? true : false;
    });
    const [newTaskDate, setNewTaskDate] = useState(() => {
        return selectedTab === "Today" ? format(new Date(), "MM/dd/yyy") : null;
    });

    const handleAddTask = () => {
        if (newTask) {
            setOpen(false);
            if (newTaskDate) {
                const inputDate = format(new Date(newTaskDate), "MM/dd/yyyy");
                const newTasks = [...tasklist];
                newTasks.push({
                    task: newTask,
                    important: newTaskImportant,
                    date: inputDate,
                });

                setTasklist(newTasks);
            } else {
                const newTasks = [...tasklist];
                newTasks.push({
                    task: newTask,
                    important: newTaskImportant,
                    date: newTaskDate,
                });
                setTasklist(newTasks);
            }
        }
    };

    useEffect(() => {
        setNewTaskDate(() => {
            return selectedTab === "Today"
                ? format(new Date(), "MM/dd/yyy")
                : null;
        });

        setNewTaskImportant(() => {
            return selectedTab === "Important" ? true : false;
        });
        setNewTask("");
    }, [open]);

    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="New Task"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: {
                        xs: "calc(50% - 25px)",
                        sm: "calc(50% - 25px)",
                        md: "58%",
                    },
                }}
            >
                <Fab color="primary">
                    <Add />
                </Fab>
            </Tooltip>

            <StyledModal open={open} onClose={(e) => setOpen(false)}>
                <Stack
                    spacing={4}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    p={3}
                    borderRadius={5}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        New Task
                    </Typography>

                    <TextField
                        multiline
                        rows={2}
                        margin="none"
                        placeholder="Task"
                        variant="standard"
                        onChange={(e) => setNewTask(e.target.value)}
                        fullWidth
                    />

                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems={"center"}
                        justifyContent="space-evenly"
                    >
                        <FormControlLabel
                            id="newTaskImportant"
                            control={
                                <Checkbox
                                    onClick={() =>
                                        setNewTaskImportant(!newTaskImportant)
                                    }
                                    icon={<StarBorderOutlined />}
                                    checkedIcon={
                                        <StarBorderOutlined color="warning" />
                                    }
                                    checked={newTaskImportant}
                                />
                            }
                            label="Important"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Select a date"
                                renderInput={(params) => (
                                    <TextField
                                        id="newTaskDate"
                                        {...params}
                                        size="small"
                                        sx={{ width: "175px" }}
                                    />
                                )}
                                clearable
                                clearText="Clear Date"
                                minDate={new Date()}
                                value={newTaskDate}
                                onChange={(newDate) => setNewTaskDate(newDate)}
                            />
                        </LocalizationProvider>
                    </Stack>
                    <Button variant="contained" onClick={() => handleAddTask()}>
                        Add Task
                    </Button>
                </Stack>
            </StyledModal>
        </>
    );
};

export default NewTask;
