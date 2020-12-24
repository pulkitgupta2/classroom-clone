import { Button, DialogActions, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useLocalContext } from "../../context/context";
import { v4 as uuidV4 } from "uuid";
import db from "../../lib/firebase";

const Form = () => {
  const [className, setClassName] = useState("");
  const [Section, setSection] = useState("");
  const [Room, setRoom] = useState("");
  const [Subject, setSubject] = useState("");

  const { loggedInMail, setCreateClassDialog } = useLocalContext();

  const addClass = (e) => {
    e.preventDefault();
    const id = uuidV4();

    db.collection("CreatedClasses")
      .doc(loggedInMail)
      .collection("classes")
      .doc(id)
      .set({
        owner: loggedInMail,
        className: className,
        section: Section,
        room: Room,
        id: id,
      })
      .then(() => {
        setCreateClassDialog(false);
      });
  };
  return (
    <div className="form">
      <p className="class__title">Create Class</p>

      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Class Name (required)"
          className="form__input"
          variant="filled"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Section"
          className="form__input"
          variant="filled"
          value={Section}
          onChange={(e) => setSection(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Subject"
          className="form__input"
          variant="filled"
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Room"
          className="form__input"
          variant="filled"
          value={Room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <DialogActions>
        <Button onClick={addClass} color="primary">
          Create
        </Button>
      </DialogActions>
    </div>
  );
};

export default Form;
