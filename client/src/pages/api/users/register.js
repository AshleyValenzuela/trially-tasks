import { registerUser } from '../../../services/api';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { first_name, last_name, email, password } = req.body;
      const newUser = await registerUser({ first_name, last_name, email, password });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
