import { createUser, getAllUsers } from "@/app/models/userModel";

export async function GET(req, res) {
  try {
    const users = await getAllUsers();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function POST(req, res) {
  try {
    const userData = await req.json();
    const userId = await createUser(userData);
    return new Response(JSON.stringify({ userId, message: 'User created successfully' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
