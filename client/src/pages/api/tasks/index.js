import { fetchTasks, createTask } from '../../../services/api';

export default async function handler(req, res) {
  const { user_id } = req.query;
  if (req.method === 'GET') {
    try {
      const tasks = await fetchTasks(user_id);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  } else if (req.method === 'POST') {
    try {
      const taskData = req.body;
      const newTask = await createTask(taskData, user_id);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
