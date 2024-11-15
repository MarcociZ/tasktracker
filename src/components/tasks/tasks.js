import React from "react";
import { TaskItem } from "../task-item/taskItem";
import { AddTask } from "../addTask/addTask";

import styles from "./Tasks.module.scss"

export const Tasks = () => {
    const [tasks, setTasks] = React.useState([]);

    const submitTask = (taskData) => {
     console.log(taskData);
        taskData.id = tasks.length+1;
        setTasks([...tasks, taskData]);
    }

    const removeTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    return (
        <div className={styles.root}>
            <h1 classes={{ root: styles.title }} >Task Tracker</h1>
            <AddTask submitTask={submitTask} />
            <>
                {tasks.map(task => (
                    <TaskItem id={task.id} taskText={task.taskText} newDate={task.newDate} time={task.time} removeTask={removeTask}/>
                ))}
            </>

        </div>

    );

}

