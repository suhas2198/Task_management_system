import React, { useState ,useEffect} from "react";

import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import axios from "axios";
import toast from 'react-hot-toast'

const Task = () => {
  const [task, setTask] = useState([]);

  // get all tasks
  const getTask = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/task");
      console.log(task);

      if (data.success) {
        setTask(data.task);
       
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrng in getting details of task");
    }

    
  
  };

  useEffect(() => {
    getTask();
  }, []);

  const handleDelete=async(id)=>{
    try {
      const res=await axios.delete('http://localhost:8080/task/'+id)
      toast.success("Record deleted successfully")
      
      
    } catch (error) {
      console.log(error)
      toast.error("Error while deleting task record")
      
    }

  }
  return (
    <Layout>
      <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
        <div className=" w-70 bg-white rounded p-3">
          <Link to="/add" className=" btn btn-success">
            Add+
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>TaskTitle</th>
                <th>Description</th>
                <th>Status</th>
                <th>due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {task.map((task) => {
                return (
                  <tr>
                    <td>{task.taskTitle}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{task.dueDate}</td>
                    <td>
                      <Link to={`/update/${task._id}`} className=" btn btn-primary">
                        {" "}
                        Update
                      </Link>{" "}
                      <button className="btn btn-danger" onClick={(e)=>{handleDelete(task._id)}}>Delete</button>
                    </td>
                  </tr>
                );
              })} 
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Task;
