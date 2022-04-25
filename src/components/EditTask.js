import React, { useState, useEffect } from "react";
import {
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    Modal,
    Stack,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import { EditOutlined, StarBorderOutlined } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { format } from "date-fns";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const EditTask = ({ task, index, tasklist, setTasklist, upcoming }) => {
    const [editOpen, setEditOpen] = useState(false);
    const [newTask, setNewTask] = useState(task.task);
    const [newTaskImportant, setNewTaskImportant] = useState(task.important);
    const [newTaskDate, setNewTaskDate] = useState(task.date);

    const handleEditTask = () => {
        if (newTask) {
            setEditOpen(false);
            if (newTaskDate) {
                const inputDate = format(new Date(newTaskDate), "MM/dd/yyyy");
                const newTasks = [...tasklist];
                newTasks[index] = {
                    task: newTask,
                    important: newTaskImportant,
                    date: inputDate,
                };
                setTasklist(newTasks);
            } else {
                const newTasks = [...tasklist];
                newTasks[index] = {
                    task: newTask,
                    important: newTaskImportant,
                    date: newTaskDate,
                };
                setTasklist(newTasks);
            }
        }
    };

    return (
        <>
            <IconButton size="small" onClick={() => setEditOpen(true)}>
                <EditOutlined fontSize="small" />
            </IconButton>

            <StyledModal open={editOpen} onClose={(e) => setEditOpen(false)}>
                <Stack
                    spacing={4}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    p={3}
                    borderRadius={5}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Edit Task
                    </Typography>

                    <TextField
                        multiline
                        rows={2}
                        margin="none"
                        variant="standard"
                        value={newTask}
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
                    <Button
                        variant="contained"
                        onClick={() => handleEditTask()}
                    >
                        Add Task
                    </Button>
                </Stack>
            </StyledModal>
        </>
    );
};

export default EditTask;
