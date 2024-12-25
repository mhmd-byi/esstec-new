import { createClient, getAllClients } from "@/app/models/clientModel";

export async function GET() {
  try {
    const clients = await getAllClients();
    return new Response(JSON.stringify(clients), {
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
    const clientData = await req.json();
    const result = await createClient(clientData);
    return new Response(JSON.stringify({ result, message: 'Client created successfully' }), {
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
