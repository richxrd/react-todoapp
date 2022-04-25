import { DeleteOutlineOutlined, StarBorderOutlined } from "@mui/icons-material";
import {
    Checkbox,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from "@mui/material";
import React from "react";
import EditTask from "./EditTask";

const TaskItem = ({
    task,
    index,
    onImportantClick,
    onDeleteClick,
    tasklist,
    setTasklist,
}) => {
    return (
        <>
            <ListItem disablePadding>
                <ListItemIcon onClick={() => onImportantClick(index)}>
                    <Checkbox
                        checked={task.important}
                        icon={<StarBorderOutlined />}
                        checkedIcon={<StarBorderOutlined color="warning" />}
                    />
                </ListItemIcon>

                <Stack
                    direction="row"
                    width={"100%"}
                    spacing={2}
                    justifyContent="space-between"
                >
                    <ListItemButton>
                        <ListItemText primary={task.task} />
                    </ListItemButton>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <ListItemText secondary={task.date || " "} />

                        <EditTask
                            task={task}
                            index={index}
                            tasklist={tasklist}
                            setTasklist={setTasklist}
                        />

                        <IconButton
                            size="small"
                            onClick={() => onDeleteClick(index)}
                        >
                            <DeleteOutlineOutlined fontSize="small" />
                        </IconButton>
                    </Stack>
                </Stack>
            </ListItem>

            <Divider />
        </>
    );
};

export default TaskItem;
