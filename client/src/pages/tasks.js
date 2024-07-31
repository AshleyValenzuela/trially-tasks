import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { fetchTasks, createTask, deleteTask, updateTask } from '../services/api';
import styles from '../styles/page.module.css';

const TasksPage = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const handleCreateTask = async (taskData) => {
    try {
      const createdTask = await createTask(taskData);
      setTaskList([...taskList, createdTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTaskList(taskList.filter((task) => task.task_id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdateTask = async (task) => {
    try {
      const updatedTask = await updateTask(task.task_id, task);
      setTaskList(taskList.map(t => t.task_id === task.task_id ? updatedTask : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className={styles.taskContainer}>
      <h1>Tasks</h1>
      <div className={styles.taskForm}>
        <TaskForm onSubmit={handleCreateTask} />
      </div>
      <div className={styles.taskList}>
        <TaskList tasks={taskList} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const userId = 1; // Replace with actual user ID, hardcoding for now - Ashley
  const tasks = await fetchTasks(userId);
  return {
    props: {
      tasks,
    },
  };
}

export default TasksPage;
