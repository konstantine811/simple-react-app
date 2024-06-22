import {
  Button,
  Container,
  Dialog,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/slices/todoSlice";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
      setOpen(false);
    }
  };

  return (
    <div className="container">
      <div className="flex justify-center">
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Container>
          <h1>To-Do List</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTask();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <TextField
              label="New Task"
              variant="outlined"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              fullWidth
              style={{ marginRight: "1rem" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddTask}
              type="submit"
            >
              Add
            </Button>
          </form>
        </Container>
      </Dialog>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Contact;
