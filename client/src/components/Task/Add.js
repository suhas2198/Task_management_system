import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Layout from "../layout/Layout";

const Add = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    try {
      const res = axios.post("http://localhost:8080/task", {
        taskTitle,
        description,
        status,
        dueDate,
      });
      if (res.data.success) {
        toast.success("Data added successfully");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Someting went wrong");
    }
  };
  return (
    <Layout>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={submit}>
            <h2>Add Task</h2>
            <div className="mb-2">
              <label htmlFor="">TaskTitle</label>
              <input
                type="text"
                value={taskTitle}
                placeholder="Enter task Title"
                className="form-control"
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Description</label>
              <input
                type="text"
                value={description}
                placeholder="Enter the description of task"
                className="form-control"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Status</label>
              <input
                type="text"
                value={status}
                placeholder="Enter the status of the tasks"
                className="form-control"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Due Date</label>
              <input
                type="Date"
                value={dueDate}
                placeholder="Enter the Due date of the task"
                className="form-control"
                onChange={(e) => {
                  setDueDate(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary ms-3">
              Save
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
