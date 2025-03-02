import { createUser, getAllUsers } from '../../models/userModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const userId = await createUser(req.body);
      res.status(201).json({ userId, message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
