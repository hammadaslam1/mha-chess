import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TODO,
  ADD_USER,
  DELETE_TODO,
  EDIT_TODO,
} from "../redux/Types/Types";
import { Button, TextField } from "@mui/material";
import { Textarea } from "@mui/joy";

const Home = () => {
  const todos = useSelector((state) => state.TodoReducer.todos);
  const user = useSelector((state) => state.UserReducer.user);
  const [todo, setTodo] = useState("");
  const [editedText, setEditedText] = useState("");
  const [edited, setEdited] = useState("");
  const dispatch = useDispatch();
  const handleUser = () => {
    dispatch({
      type: ADD_USER,
      payload: !user,
    });
    setTodo("");
  };
  const handleAdd = () => {
    dispatch({
      type: ADD_TODO,
      payload: [todo, ...todos],
    });
    setTodo("");
  };
  const handleEdit = (index) => {
    console.log(todos[index]);
    let tempArr = [...todos];
    tempArr[index] = editedText;
    setEdited("");
    dispatch({
      type: EDIT_TODO,
      payload: [...tempArr],
    });
  };
  const handleDelete = (index) => {
    const arr = [...todos];
    arr.splice(index, 1);
    dispatch({
      type: DELETE_TODO,
      payload: arr,
    });
  };

  return user ? (
    <div>
      <Textarea
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ margin: "5px" }}
        onClick={() => handleAdd()}
      >
        add
      </Button>
      <Button variant="contained" onClick={handleUser}>
        Logout
      </Button>
      <>
        <ul>
          {todos?.map((item, i) => (
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr" }}
              key={i}
              >
              {edited !== i ? (
                <li
                  style={{
                    listStyle: "circle",
                    paddingLeft: "35px",
                    textAlign: "center",
                    gridColumn: "1/4",
                    textAlign: "left",
                  }}
                >
                  {item}
                </li>
              ) : (
                <Textarea
                  style={{
                    display: "block",
                    textAlign: "left",
                    fontSize: "13.9pt",
                    paddingLeft: "35px",
                    gridColumn: "1/4",
                  }}
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
              )}

              {edited !== i ? (
                <Button
                  variant="contained"
                  sx={{ margin: "5px" }}
                  onClick={() => {
                    setEditedText(item);
                    setEdited(i);
                  }}
                >
                  edit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ margin: "5px" }}
                  onClick={() => setEdited("")}
                >
                  cancel
                </Button>
              )}
              {edited !== i ? (
                <Button
                  variant="contained"
                  sx={{ margin: "5px" }}
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ margin: "5px" }}
                  onClick={() => handleEdit(i)}
                >
                  Done
                </Button>
              )}
            </div>
          ))}
        </ul>
      </>
    </div>
  ) : (
    <Button variant="contained" onClick={handleUser}>
      Login
    </Button>
  );
};

export default Home;
