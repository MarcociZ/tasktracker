import React from "react";
import styles from "./AddTask.module.scss";

export const AddTask = ({ submitTask }) => {

    const [taskText, setTaskText] = React.useState('');
    const [newDate, setNewDate] = React.useState('');
    const [time, setTime] = React.useState('');

    const handleTask = (e) => {
        e.preventDefault();
        setTaskText(e.target.value);
        console.log(taskText);
    }

    const handleDate = (e) => {
        e.preventDefault();
        setNewDate(e.target.value);
        console.log(newDate);
    }

    const handleTime = (e) => {
        e.preventDefault();
        setTime(e.target.value);
        console.log(time);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        submitTask({taskText, newDate, time});
        console.log("task was added");
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.root}>
                <div className={styles.task}>
                    <label htmlFor="res-task" >Task</label>
                    <input
                        type="text"
                        id="res-task"
                        placeholder="Enter Task"
                        value={taskText}
                        onChange={handleTask}
                    />
                </div>

                <div className={styles.date}>
                    <label htmlFor="res-date"> Date </label>
                    <input
                        type="date"
                        name="date"
                        id="res-date"
                        value={newDate}
                        onChange={handleDate}
                    />
                </div>
                <div className={styles.time}>
                    <label htmlFor="res-time"> Time </label>
                    <input
                        id="res-time"
                        type="time"
                        name="time"
                        value={time}
                        onChange={handleTime}
                    />
                </div>
                <div className={styles.button}>
                    <input className={styles.add} value="ADD" type="Submit" />
                </div>
            </form>
        </>
    );
}