import { updateProjectPositions } from "@/app/models/projectModel";

export async function PATCH(req) {
  try {
    const { positionUpdates } = await req.json();
    
    if (!positionUpdates || !Array.isArray(positionUpdates)) {
      return new Response(JSON.stringify({ error: 'Invalid position updates data' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const modifiedCount = await updateProjectPositions(positionUpdates);
    
    return new Response(JSON.stringify({ 
      message: 'Project positions updated successfully',
      modifiedCount 
    }), {
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
