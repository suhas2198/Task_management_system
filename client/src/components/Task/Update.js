import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Update = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getTask = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/task" + id);

      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("something went wrng in getting details of task");
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:8080/task/"+id, {
        taskTitle,
        description,
        status,
        dueDate,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleUpdate()}>
            <h2>Update Task</h2>
            <div className="mb-2">
              <label htmlFor="">TaskTitle</label>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task Title"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter the description of task"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Status</label>
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Enter the status of the tasks"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Due Date</label>
              <input
                type="text"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="Enter the Due date of th task"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary ms-3">
              update
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Update;
