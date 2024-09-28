import taskModel from "../models/taskModel.js";

export const createtask = async (req, res) => {
  const { taskTitle, description, status, dueDate } = req.body;

  try {
    //creating object

    const task = new taskModel({
      taskTitle,
      description,
      status,
      dueDate,
    }).save();

    res.status(201).send({
      success: true,
      message: "task added successfully ",
      task,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error while adding task detail",
    });
  }
};

// Get all categories

export const getTask = async (req, res) => {
  try {
    // creating object and saving it

    const task = await taskModel.find();

    res.status(201).send({
      success: true,
      message: "task details faetched succesfully",
      task,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      messgage: "error while getting task details",
    });
  }
};

// getting single task

export const getTaskById = async (req, res) => {
    const { taskTitle, description,status,dueDate } = req.body;
  
    try {
      // creating object and saving it
  
      const task =await taskModel.findById(req.params.taskId);
      
      console.log(task)
  
      res.status(201).send({
        success: true,
        message: "details about one task is featched succesfully",
        task,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        messgage: "error while fetching task",
      });
    }
  };

  // update task

  
export const updateTask = async (req, res) => {
    const { taskTitle, description,status,dueDate } = req.body;
  
    try {
      // creating object and saving it
  
      const task =await taskModel.findByIdAndUpdate(
        req.params.taskId,
        req.body
      );
  
      res.status(201).send({
        success: true,
        message: "task detail updated succesfully",
        task,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        messgage: "error while creating category",
      });
    }
  };

  //Deleting tasks 

  
export const deleteTask = async (req, res) => {
    const {titleTask, description, status, dueDate} = req.body;
  
    try {
      // creating object and saving it
  
      const task =await taskModel.findByIdAndDelete(req.params.taskId);
      console.log(task)
  
      res.status(201).send({
        success: true,
        message: "task by id deleted succesfully",
        task,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        messgage: "error while deleting task",
      });
    }
  };

  
