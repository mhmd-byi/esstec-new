import { deleteClient, getClientById, updateClient } from "@/app/models/clientModel";

export async function GET(req, context) {
  try {
    const clientId = context.params.id;
    const client = await getClientById(clientId);
    return new Response(JSON.stringify(client), {
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

export async function PATCH(req, context) {
  try {
    const clientData = await req.json();
    const clientId = context.params.id;
    const updated = await updateClient(clientId, clientData);
    if (updated) {
      return new Response(JSON.stringify({ message: 'Client updated successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Client not found');
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Client not found' ? 404 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function DELETE(req, res) {
  try {
    const clientId = context.params.id;
    const deleted = await deleteClient(clientId);
    if (deleted) {
      return new Response(JSON.stringify({ message: 'Client deleted successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Client not found');
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Client not found' ? 404 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
