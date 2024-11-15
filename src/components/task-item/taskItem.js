import React from "react";

import styles from "./TaskItem.module.scss"

export const TaskItem = ({ id, taskText, newDate, time, removeTask }) => {

    return (
        <>
            <div id={id} className={styles.root}>
                <div className={styles.taskCard}>
                    <div>
                        <h2 className={styles.h2} >{taskText}</h2>
                        <div>{newDate} {time}</div>
                    </div>
                    <div className={styles.button}>
                        <input className={styles.add} value="Remove" type="button" title="remove" onClick={() => removeTask(id)} />
                    </div>
                </div>

            </div>
        </>
    );
}